/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/
// 1st solution 29-01-2023
function sumOfIntegersInString(s){
    let sToArr = s.split("")
    let tempNumb = ""
    sToArr.push(" ")
    let onlyDigitsArr = []
    let sum = 0
    for (let i = 0; i < sToArr.length; i++) {
        if (parseInt(sToArr[i]) >= 0){
            tempNumb += sToArr[i]
        }
        else {
            onlyDigitsArr.push(tempNumb)
            tempNumb = ""
        }   
    }
    for (let i = 0; i < onlyDigitsArr.length; i++) {
        sum += Number(onlyDigitsArr[i])
    }
    return sum
  }

let testStr = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
console.log(sumOfIntegersInString(testStr))
