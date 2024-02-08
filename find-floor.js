function findFloor(arr,x,left=0,right=arr.length - 1) {
    let middle = Math.floor((left+right)/2);
    
    if(left > right) return -1;
    if(x >= arr[right]) return arr[right];
    if(arr[middle] === x) return arr[middle];

    if(middle > 0 && arr[middle - 1] <= x && x < arr[middle]){
        return arr[middle -1];
    }

    if(x < arr[middle]){
        return findFloor(arr,x,left,middle -1);
    }
    return findFloor(arr,x,middle +1, right);
}

module.exports = findFloor