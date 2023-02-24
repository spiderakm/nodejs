let myname = 'ashok'
let age  = 23
let ishobie = true

function summaryUser(myname,age,ishobie){
    return `myname is ${myname} age is ${age} hobies is ${ishobie}`
}

console.log(summaryUser(myname,age,ishobie))

// task ---> product of two numbers

var num1  = 7
var num2 = 4


const addTwoNum = (num1,num2) => num1*num2

console.log(addTwoNum(num1,num2))


// es6 object

const person = {
    name:'ashok',
    age:23,
    // great: () =>{
    //     console.log(`hi, my name is ${this.name} and age is ${this.age}`)
    //this will be undefined because arrow function always refer to its global scope or its parent scope in object
    // }
    great(){
        console.log(`hi, my name is ${this.name} and age is ${this.age}`)
    }
}
person.great()