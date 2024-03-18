
// merge sort solution for sorting

function mergeSort(ary) {
    if (ary.length<=1) {
        return ary;
    }
    let mid = Math.floor(ary.length / 2)
    
    let leftSort = ary.slice(0, mid);
    let rightSort = ary.slice(mid);

    leftSort = mergeSort(leftSort);
    rightSort = mergeSort(rightSort);

    return merge(leftSort, rightSort); 
}


function merge(left, right, l=0, r=0)  {

    let result = [];
        while (l < left.length && r < right.length){
        if (left[l] < right[r]) {
            result.push(left[l])
            l++;
        }
        else {
            result.push(right[r])
            r++
        }
    }
    return result.concat(right.slice(r).concat(left.slice(l)))
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))