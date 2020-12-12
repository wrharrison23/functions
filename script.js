// Foundations - Functions

// Lightning 1

function logJSString() {
    console.log("I love JavaScript!")
}

logJSString()

// Lightning 2

function vacation(name, destination) {
    console.log(`${name} would love to visit ${destination}.`)
}

vacation("Wes", "Rome")
vacation('Kayla', 'New York City')
vacation('Drew', 'France')

// Lightning 3

function tacoOrder(typeOfShell, topping) {
    let order = `Your ${typeOfShell} shell taco with ${topping} is ready!`
    return order
}

let myOrder = tacoOrder('soft', 'pork')
console.log(myOrder)

// Practice 1

function add(num1, num2){
    console.log(num1 + num2)
}

function subtract(num1, num2){
    console.log(num1 - num2)
}

function multiply(num1, num2){
    console.log(num1 * num2)
}

function divide(num1, num2){
    console.log(num1 / num2)
}

// add(1,1)
// add(2,2)
// add(3,5)

// subtract(5,3)
// subtract(7,2)
// subtract(8,4)

// multiply(2,2)
// multiply(5,5)
// multiply(3,2)

// divide(4,2)
// divide(8,4)
// divide(10,5)

// Practice 2

function add(num1, num2){
    let sum = num1 + num2
    return sum
}

function subtract(num1, num2){
    let difference = num1 - num2
    return difference
}

function multiply(num1, num2){
    let product = num1 * num2
    return difference
}

function divide(num1, num2){
    let result = num1 / num2
    return result 
}


// Practice 3

// let personObject = {
//     name: 'Bill',
//     language: 'spanish',
// }

// if (personObject.language === 'english'){
//     console.log(`Hello, ${personObject.name}!`)
// } else if (personObject.language === 'spanish'){
//     console.log(`Hola, ${personObject.name}!`)
// } else if (personObject.language === 'french'){
//     console.log(`Bonjour, ${personObject.name}!`)
// }

function greetings(name, language) {
    if (language === 'english') {
        console.log(`Hello, ${name}!`)
    } else if (language === 'spanish') {
        console.log(`Hola, ${name}!`)
    } else if (language === 'french' ) {
        console.log(`Bonjour, ${name}!`)
    }
}
greetings('wes', 'french')

// Practice 4

function sandwichOrder(breadType, sandwichName, isToasted) {
    let finalOrder
    if (isToasted) {
         finalOrder = `You ordered a toasted ${sandwichName} on ${breadType}`
    } else { 
         finalOrder = `You ordered a ${sandwichName} on ${breadType}` 
    }
    return finalOrder
}

let mySandwich = sandwichOrder('wheat', 'blt', true)
console.log(mySandwich)

// Practice 5

let dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
  }
  
  function printHobbies(){
    for (hobby = 0; hobby <= dwayneObject.hobbies.length; hobby++) {
        console.log(dwayneObject.hobbies[hobby])
    }
  }
printHobbies()

// Practice 6

let partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  
  function ageChecker(){
    let legalGuests = []
    for (let guest = 0; guest <= partyGuests.length; guest++) {
        if (partyGuests[guest].age >= 21) {
            legalGuests.push(partyGuests[guest].name)
        }
    } 
    console.log(`${legalGuests} can drink.`)
  }

  ageChecker()

//  function ageChecker() {
//   for (guest = 0; guest <= partyGuests.length; guest++) {
//       console.log(partyGuests[guest].age)
//   }
// }
// ageChecker()