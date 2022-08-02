function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 1) {
            console.log(arr[i]);
        }
    }
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    const arr = [1, 2, 3, 4, 5, 6, 7];
    for(let i = arr.length-1; i > 0; i--) {
        if(i % 2 ===1) {
            console.log(arr[i]);
        }
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
            newArr.push(arr[i]);
        }
        return newArr;
    }

    console.log(secondPower([1, 2, 3, 4, 5, 6, 7, 8]));




function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    const arr = [5, 2, 3, 7, 6, 2];

   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      const curr = Math.pow(el, i);
      res[i] = curr;
   };
   return res;
};
console.log(nthPower(arr));


function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < arr.length / 2; i++) {
        console.log(arr[1]);
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 3; i < arr.length / 2; i++) {
        console.log(arr[1]);
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
