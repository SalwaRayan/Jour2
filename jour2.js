// 01 - Numbers

var integer = 102
var float = 13.9

console.log(integer)
console.log(float)

// 02 - Convert

var basic = 34

console.log(basic)
console.log(typeof basic)

var stringified = basic.toString()

console.log(stringified)
console.log(typeof stringified)

// 03 - Round

var num = 1.5 
var rounded = Math.round(num)

console.log(num)
console.log(rounded)

// 04 - Arithmétique 

var test = 12 
var bis = 5

console.log(test + bis)
console.log(test - bis)
console.log(test * bis)
console.log(test / bis)
console.log(test ** bis)
console.log(test % bis)

console.log(bis + test)
console.log(bis - test)
console.log(bis * test)
console.log(bis / test)
console.log(bis ** test)
console.log(bis % test)

// 05 - Comparaison

var test = 143
var bis = 219

console.log(test < bis)
console.log(test <= bis)
console.log(test > bis)
console.log(test >= bis)
console.log(test == bis)
console.log(test === bis)
console.log(test != bis)
console.log(test !== bis)

// 06 - Condition

var limit = 50
var score = 64

if(score >= limit) {
  console.log("Ok, good!")
} else {
  console.log("Oh nooo...")
}

// 07 - Condition II

var password = "azerty"

if (password.length > 4){
  console.log("The password is secure")
}
 
// 08 - Condition III

if(score >= limit && password.length > 4){
  console.log("Everything is good")
} else if (score >= limit || password.length > 4){
  console.log("Something is good")
} else {
  console.log("Nothing is good")
}

// Bonus

var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (max - min + 1) + min)

console.log(random)

if(random === 6){
  console.log("Yes, I win !")
} else {
  console.log("So close...")
}

// Bonus II

var month = "January"

console.log(month)

switch (month) {
	case "March" :
  case "April" :
  case "May": 
		console.log("Spring");
		break;
	case "June" :
  case "July" :
  case "August" : 
		console.log("Summer");
		break;
	case "September" :
  case "October" :
  case "November" : 
		console.log("Fall");
		break;
	case "Dicember" :
  case "January" :
  case "February" : 
		console.log("Winter");
		break;
	default: 
		console.log("That's not a season...");
}

// Bonus III
    //var num = 1.5    1.4
    //var rounded = Math.round(num)
    //console.log(num)     - 1.5    1.4
    //console.log(rounded) - 2      1



    // var roundedNumber = 3.5

    // if(roundedNumber + 0.5 >= Math.floor(roundedNumber) + 1){
    //   console.log(Math.ceil(roundedNumber))
    // } else {
    //   console.log(Math.floor(roundedNumber))
    // }



    // if(roundedNumber - 0.4 >= Math.floor(roundedNumber)){
    //   console.log(Math.ceil(roundedNumber))
    // } else {
    //   console.log(Math.floor(roundedNumber))
    // }



    // var roundedNumber = 13.6
    // var mathCeil = Math.ceil(roundedNumber)
    // var mathFloor = Math.floor(roundedNumber)
    // var result = mathCeil - roundedNumber

    // if (result <= 0.5) {
    //   console.log(mathCeil)
    // } else {
    //   console.log(mathFloor)
    // }


    // var rNumber = 3.4;
    // var numberCeil = Math.ceil(rNumber) - rNumber;

    // console.log(numberCeil);

    // if(numberCeil <= 0.5){
    //     console.log(Math.ceil(rNumber));
    // }
    // else{
    //     console.log(Math.floor(rNumber));
    // }


    var roundedNumber = 12.4

    if (roundedNumber % 1 >= 0.5) {
      console.log(Math.ceil(roundedNumber))
    } else {
      console.log(Math.floor(roundedNumber))
    }


roundedNumber = roundedNumber.toString ()

// console.log(roundedNumber)

if(roundedNumber.substring(2) >= 5){
  console.log(roundedNumber.substring(0, 1).replace("3", "4"))
} else {
  console.log(roundedNumber.substring(0, 1))
}
