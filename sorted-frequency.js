function sortedFrequency(arr, num) {
    let firstIdx = findFirstIdx(arr, num);
    if(firstIdx == -1) return firstIdx;
    let lastIdx = findLastIdx(arr, num);
    return lastIdx - firstIdx + 1;
}

function findFirstIdx(arr, num, left = 0, right = arr.length - 1){
    if(right >= left){
        let middle = Math.floor((left + right) / 2)
        if((middle === 0 || num > arr[middle - 1]) && arr[middle] === num){
            return middle;
        } else if (num > arr[middle]) {
            return findFirstIdx(arr, num, middle + 1, right)
        } else{
            return findFirstIdx(arr, num, left, middle - 1)
        }
    }
    return -1
}

function findLastIdx(arr, num, left = 0, right = arr.length - 1){
    if(right >= left){
        let middle = Math.floor((left + right) / 2)
        if((middle === arr.length - 1 || num < arr[middle + 1]) && arr[middle] === num){
            return middle;
        } else if (num < arr[middle]) {
            return findLastIdx(arr, num, left, middle - 1)
        } else{
            return findLastIdx(arr, num, middle + 1, right)
        }
    }
    return -1
}




module.exports = sortedFrequency