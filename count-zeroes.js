function countZeroes(arr) {
    let firstIdx = findIdx(arr)
    if (firstIdx === -1){
        return 0
    }
    return arr.length - firstIdx
}

function findIdx(arr, left=0, right=arr.length - 1){
    while(right >= left){
        let middle = left + Math.floor((right - left)/2)
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] ===0){
            return middle;
        } else if(arr[middle] === 1){
            return findIdx(arr, middle +1, right)
        }
        return findIdx(arr, left, middle - 1)
    }
    return -1
}

module.exports = countZeroes