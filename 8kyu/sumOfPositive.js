// https://www.codewars.com/kata/5715eaedb436cf5606000381

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


// 1st solution:
function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i]
      }
    }
    return sum
  }


// Refactored solution on 25-01-2023:
function positiveSum(arr) {
    return arr.filter(arrItem => arrItem > 0).reduce((acc, currentVal) => acc + currentVal, 0) 
  }