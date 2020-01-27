
function sort(array)
{
  
  //wiki: The entire array is sorted by quicksort(A, 0, length(A)-1).
  
  function quicksort(A, left, right, partitionStrategy)
  {
    if(left < right)
      {
        var p = partition(A, left, right);
        quicksort(A, left, p - 1);
        quicksort(A, p + 1, right);
      }
    return A;
  }
  
  function partition(A, left, right) 
  {
    var pivot = right;
    var i = left;
  
    for (var j = left; j < right; j++) 
    {
      if(A[j] <= A[pivot]) 
      {
        var temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
      }
    }
    var temp_1 = A[i];
    A[i] = A[j];
    A[j] = temp_1;
    
    return i;
  }
  
  return quicksort(array, 0, array.length);
}

var myArray = [3, 0, 2, 5, -1, 4, 1, 6, 8, 9, 11, 26, 3, 55, 1078];

console.log("Original Array: " + myArray);
var sortedArray = sort(myArray);
console.log("Sorted Array: " + sortedArray); 