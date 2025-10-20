    // Problem 1

var firstName = "Hamza Ahmed";
var lastName = "Shaikh";
var address = "Karachi";

address = "Huzaifa Bhai ka dil";

document.writeln(
  "First Name ==> " + firstName + "<br>" +
  "Last Name ==> " + lastName + "<br>" +
  "Address ==> " + address
);

    // Problem 2


var street = "Buffer Zone 15A4"    
var country = "Pakistan" 
var fullAddress = "Pakistan" 


fullAddress = country +" "+ street

console.log("full mailing address ==>" +" "+ fullAddress)


    // Problem 3

var plate1 = 2
var plate2 = 10
var plate3 = 4

var totalPlates = plate1 + plate2 + plate3


var people = 7

remainingPlates = totalPlates - people

alert ("There are" +" "+ remainingPlates +" "+ "plates available")

    // Problem 4


var fruits = ["Strawberries", "Mango", "Peach", 69]

var first = fruits[1]
fruits [fruits.length -1 ] = "Huzaifa Bhai"

console.log (first)
console.log (fruits)

    // Problem 5

function calculateArea(width, height)  {
  Area = width * height
  console.log(Area)
}  

calculateArea(5 , 20)