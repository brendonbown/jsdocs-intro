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

/**
 * Prints out all of the numbers in a range
 *
 * @param start {number} - the first number in the range
 * @param stop {number} - the last number in the range
 */
function printRange(start, stop) {
    for(let i = start; i <= stop; i++) {
        console.log(i)
    }
}

/**
 * Get the first letter of the input string
 *
 * @param input - the input string
 * @returns the first letter of the input string
 */
function firstLetter(input) {
    return input[0]
}

console.log(firstLetter("hey"))

/**
 * Parses two integers and adds them together.
 *
 * @param valA {string} - the first integer value as a string
 * @param valB {string} - the second integer value as a string
 * @returns {number} the two values added together
 */
function parseAndAdd(valA, valB) {
    const valAInt = parseInt(valA)
    const valBInt = parseInt(valB)
    return valAInt + valBInt
}


/**
 * @type {string}
 */
const hello = "Hello!"

/**
 * @type {number}
 */
const numPotatoes = 1

/**
 * @type {boolean}
 */
const isFresh = true

/**
 * @type {number[]}
 */
const powersOfTwo = [1, 2, 4, 8, 16, 32]

// Note the double sets of braces (one to indicate that it is a type,
// one to indicate that it is an object)
/**
 * @type {{
 *     profile: string,
 *     optimizationLevel: number
 * }}
 */
const config = {profile: "dev", optimizationLevel: 3}

class MyClass { /* ... */ }

/**
 * @type {MyClass}
 */
const myObj = new MyClass()

/**
 * @type {any[]}
 */
const myList = ["foo", 2, false]

/**
 * Get the length of the string
 *
 * @param s {string}
 * @return {number} the length of the string
 */
function stringLength(s) {
    return s.length
}

/**
 * Converts a string containing space-separated integers to a list of numbers
 *
 * @param s {string} a string containing integers separated by a space
 * @return {number[]} the list of numbers in the string
 */
function stringToList(s) {
    const nums = s.split(" ")
    return nums.map(parseInt)
}


/**
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function addInts(a, b) {
    return a + b
}

console.log(addInts("1", "2"))


/**
 * Add a class to the list
 *
 * @param classInfo {{
 *     className: string,
 *     classCode: string,
 *     professorName: string,
 *     availableSeats: number
 * }}
 */
function addClass(classInfo) { /* ... */ }

addClass({
    className: "Intro to CS",
    classCode: "CS 142",
    availableSeats: 20
})

/**
 * Print the person's name
 *
 * @param person {{
 *     name: string,
 *     id: string,
 *     numClasses: number
 * }}
 */
function printName(person) {
    console.log(person.nam)
}


class ApiConfig { /* ... */ }

class AwsConfig { /* ... */ }

/**
 * Make an API call to get the associated person ID
 * @param config {ApiConfig} Configurations for the API
 */
function getPersonId(config) { /* Make API call */ }

const configA = new AwsConfig()
const configB = new ApiConfig()

getPersonId(configA)

console.log(configB)


/**
 * @param s {string}
 */
const foo = s => console.log(s)

/**
 * @type {string}
 */
const bar = "abc"

/**
 * @type {number}
 */
const baz = 1

foo(bar)
