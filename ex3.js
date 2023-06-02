function findMostRepeatedNumber(arr) {
    const countMap = {};
    let maxCount = 0;
    let mostRepeatedNumber;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      countMap[num] = (countMap[num] || 0) + 1;
  
      if (countMap[num] > maxCount) {
        maxCount = countMap[num];
        mostRepeatedNumber = num;
      }
    }
  
    return mostRepeatedNumber;
  }

const array = [2, 4, 4, 5, 2, 3, 3, 4, 5, 6, 6, 6, 1];
const mostRepeatedNumber = findMostRepeatedNumber(array);

console.log(mostRepeatedNumber); 
