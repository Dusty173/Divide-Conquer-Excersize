function findRotatedIndex(arr,int) {
    let point = rotationPoint(arr);
    if(point > 0 && int >= arr[0] && int <= arr[point - 1]){
        return findIdx(arr, int, 0, point -1)
    } else{
        return findIdx(arr, int, point, arr.length -1)
    }
}

function rotationPoint(arr) {
    if(arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right){
        let middle = Math.floor((left + right) /2);
        if (arr[middle] > arr[middle +1]) return middle +1;
        else if (arr[left] <= arr[middle]){
            left = middle +1;
        } else {
            right = middle -1;
        }
    }
}

function findIdx(arr, int, left, right){
    if(arr.length === 0) return -1;
    if(int < arr[left] || int > arr[right]) return -1;

    while (left <= right) {
        let middle = Math.floor((left + right) /2);
        if(arr[middle] === int){
            return middle
        } else if(int < arr[middle]){
            right = middle -1;
        } else {
            left = middle +1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex