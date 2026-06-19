function mergeSort(arr){
    //define a base case
    if(arr.length <= 1) return arr;

    //split the array into halves
    const leftSide = arr.slice(0, Math.floor(arr.length / 2));
    const rightSide = arr.slice(Math.floor(arr.length / 2));

    //recursive function calls to store values in left and right variables 
    const left = mergeSort(leftSide);
    const right = mergeSort(rightSide);

    //nested merge function to actually sort and merge the two left and right arrays back together
    function merge(left, right){
        const sortedArray = [];

        let leftIndex = 0;
        let rightIndex = 0;

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                sortedArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                sortedArray.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return [...sortedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
    }

    return merge(left, right)
}

console.log(mergeSort([3, 7, 1, 4, 8, 2, 6, 5]));


// if(left[0] < right[0]){
//     sortedArray.push(left.splice(0, 1));
// }else{
//     sortedArray.push(right.splice(0, 1));
// }