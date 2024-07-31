/* 
JS 7 data types
Number -> way to represent a numb
String  -> Is a way to represent text in computer
Boolean -> a way to represent a check
null -> empty container()
undefined -> what we're looking for is not there
Objects -> A way to be specific
Arrays -> List of anything (cars, shopping items)


*/ 

//get info on a human



// 5 + 3 * 10 / 4 = oneSingleNumber
const object = {
    sayHello: function() {
        return 'hello'
    }
} 

console.log(addNums(1,2))



console.log('HELLO ALL'.toLocaleLowerCase())

class StringCopy {
    constructor(val) {
        this.val = val;
    }


    toLocaleLowerCase2() {
        return this.val.toLocaleLowerCase()
    }
}


const newString = new StringCopy('WELCOME').toLocaleLowerCase2()
console.log(newString)


//ES5 vs ES6
//ES5 which has hoisting
function addNums(num1, num2) {
    return num1 + num2
}


//ES6 cleaner functions
const newAddNums = (num1, num2) => num1 + num2