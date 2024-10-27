const add = (a,b)=> a+b;
    console.log(add(4,4))

    2

const isEven = (num) => num % 2 ===0;
    console.log( "რიცხვი ლუწია",isEven(10))

    3

const isPostive = (num) => num > 0;
    console.log(isPostive(20))


    4
const Three = (num) => num % 3 ===0;
    console.log(Three(25))

    5

let  cub = (num) => num * num * num;
    console.log(cub(5))

    6


let Great = (num) => num >0;
    console.log(Great(7))

    7


let Square = (num) => num * num;
    console.log (Square(10))


8

function number(num1, num2, callback) {
    return callback (num1, num2)
}
function multiplication(num1, num2) {
    return num1 * num2
    
}
console.log(number(4,4,multiplication))



9
function call(num1, callback) {
    return callback (num1)
    
}
function square(num1) {
    return num1 * num1
}
console.log(call(7,square))


10
function even(num1,callback) {
    return  callback (num1)
}
function even2(num1) {
    return num1 % 2
    
}
console.log(even( 10,  even2))


11

function sum(num1, num2, callback) {
    return callback (num1,num2)
    
}
function sum2(num1,num2) {
    return num1 * num2
}
console.log(sum(8,8, sum2))

12

function addd(num1, num2, callback) {
    return callback (num1,num2)
    
}
function addd2(num1,num2) {
    return num1 + num2
}
console.log(addd(8,40, addd2))

13

let numbers = function (a,b){return a-b}
console.log (numbers(10,8))

14

let  word = function (a,){return a*2}
console.log(word(8))


15
const truee = function (a){return a / 2}
console.log (truee(10))