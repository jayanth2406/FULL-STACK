// const marks = [45,76,23]
// const english = marks[0]
// const maths = marks[1]
// const science = marks[2]
// console.log(english,maths,science)

// const marks = [45,76,23]
// const [english,maths,science] = marks
// console.log(english,maths,science)

// const marks = [45,76,23]
// const [english,,science] = marks
// console.log(english,science)

const marks = [45,76]
const [english,maths,science=10] = marks
console.log(english,maths,science)