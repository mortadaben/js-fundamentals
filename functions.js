// try catch block
try {
    // code
    console.log("Trying to execute some code")
    throw new Error("Something went wrong")
} catch (error) {
    // code
    console.log("Error occured", error)
}

// ----------------------- functions ----------------------

// function declaration
function add(a, b) {
    return a + b
}
console.log(add(5, 6)) // 11

// function expression
var add = function(a, b) {
    return a + b
}
console.log(add(5, 6)) // 11