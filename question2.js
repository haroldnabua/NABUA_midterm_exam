//function to sum all numbers in an array
function sumArray(numbers){
    //use reduce() to calculate the total 
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//test the function with a sample array. 
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result); //output the result

