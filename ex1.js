function modifyArray(arr) {
    const n = arr.length;
    let previousValue = 0;
    
    for (let i = 0; i < n; i++) {
      const currentValue = arr[i];
      
      // kontrollojme nese vlera aktuale eshte e barabarte me ate perpara
      if (currentValue === previousValue || currentValue === arr[i + 1]) {
        // nese jane te barabarata e barazojme me 0
        arr[i] = 0;
        //ne te kundert e shumezojme me 0 
      } else {
        arr[i] *= 2;
      }
      
      previousValue = currentValue;
    }


    // bejme renditjen e vektorit duke kaluar 0 perpara
    arr.sort((a, b) => {
        if (a === 0 && b !== 0) {
          return -1; 
        } else if (a !== 0 && b === 0) {
          return 1; 
        } else {
          return 0; 
        }
      });
    
    return arr;
  }

const array = [0 , 2,  5, 4, 1, 0, 3, 3, 6, 7];
const modifiedArray = modifyArray(array);

console.log(modifiedArray); 
