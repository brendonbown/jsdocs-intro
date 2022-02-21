// Prints "Hello world!" to the console
console.log("Hello world!")

// A list of the numbers 1-5
const list = [1, 2, 3, 4, 5]

/*
This finds the squares of all even numbers in two steps
  1. It filters out all odd numbers
  2. It squares all of the numbers that remain
 */
const evenSquares = list.filter(num => num % 2 === 0).map(num => num * num)

/*
This function takes a number and adds one to it
 */
function addOne(num) {
    return num + 1
}

console.log(addOne(3))












