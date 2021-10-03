// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// test created
// Test run failed

describe("colors", () =>{
    test("a function that takes in an array, removes the first item and shuffles the remaining content", () =>{
        expect(colors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(colors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Declare a function that takes in an array
// use .shift() to remove the first element in the array
// Declare new variable 'shuffle' that is equal to arr.sort((a, b) => Math.floor(Math.random * arr.length))
// this will sort the array by Math.random rounded to the nearest whole number that is less than the length of the array
// Return shuffle



// b) Create the function that makes the test pass.
const colors = (arr) => {
    arr.shift()
    let shuffle = arr.sort((a, b) => Math.floor(Math.random * arr.length))
    return shuffle
}
// Yay green light!

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("smToLg", () =>{
    test("function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () =>{
        expect(smToLg(nums1)).toEqual([-8, 90])
        expect(smToLg(nums2)).toEqual([5, 109])
    })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.

// Declare a function that takes in an array
// Declare a variable min and max to equal an empty array
// push the Math.min and Math.max into minNMax using a spread operator on the array parameter
// Return minNMax

const smToLg = (arr) => {
    let minNMax = []
    minNMax.push(Math.min(...arr))
    minNMax.push(Math.max(...arr))
    return minNMax
}
// Yay another green light!

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Test created
// I noticed the wacky yargs and such code only appears at the top when I am using tab to autofill test declarations
// Test run failed


describe("noDupes", () => {
    test("function that takes in two arrays as arguments and returns one array with no duplicate values", () =>{
        expect(noDupes(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
// Alrighty so I remember this question from  a couple weeks ago because it gave me nightmares! I researched ways to solve this but didn't quite understand what was going on at the time. WELLLL I do now! It was pretty nice to go back through old work and be like Ohhh! thats what that was!  

// Declare a function that takes in 2 arrays
// declare a variable for answer that is equal to [...new Set([...arr1,...arr2 ])]
// return answer

const noDupes = (arr1,arr2) => {
    let answer = [...new Set([...arr1,...arr2 ])]
    return answer
  }
// Yay 3 green lights!!

// I was messing around to see if I was just going overboard with the spread operators but I guess I'm not? It works perfectly like this?? And I don't need multiple for loops?!? *Mind happily blown*

// I hope you don't mind these shorter functions! These were actually pretty fun making and refactoring... Also, Lots of arrays this week! My goodness! I feel like a pirate writing all those Arrs!

// I feel alot better about this assessment! After the last assessment I found myself feeling really defeated and doing a little rough mentally. Hopefully this week turns out better! I'm happy with my code here!