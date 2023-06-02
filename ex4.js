function findIndex(arr, value) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; 
  }
  

  const array = ['Annie', 'Bernard', 'Daniel', 'Jack', 'Noel', 'Paul', 'Stela', 'Tom'];
const value = 'Paul';
const index = findIndex(array, value);

console.log(index); 
