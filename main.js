//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function display(){
    const person3 = {
        pizza:["Deep Dish","South Side Thin Crust"],
        tacos:"Anything not from Taco bell",
        burgers:"Portillos Burgers",
        ice_cream:["Chocolate","Vanilla","Oreo"],
        shakes:[{
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }]
    }
    for(const [key, value] of Object.entries(person3)){
        console.log(key, value)
    }
}
console.log(display())




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age)
    }

    Person.prototype.addingAge = () => {
        this.age++;
    }
}
var abby = new Person('Abby', 25)
abby.printInfo()
abby.addingAge()
abby.printInfo()

var bryan = new Person('Bryan', 26)
bryan.printInfo()
bryan.addingAge()
bryan.addingAge()
bryan.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function sentenceLength(sentence) {
    return new Promise((resolve, reject) => {
        if(sentence.length > 10){
            resolve('Big Word')
        } else {
            reject('Small Number');
        }
    })
}

sentenceLength('I love Marvel Comics')
    .then(result => console.log(result))
    .catch(error => console.log(error));

sentenceLength('DC Stinks')
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Python Problem 1 => Simple Multiplication 8 kyu (One I have done before)

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
  }

// Python Problem 2 => Quarter of the year 8 kyu (One I have not done yet)

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else {
      return 4;
    }
  };