//variable declaration
//var x = 'Pizza'  //name var uniquely, only use 1 time
// x = "Cheese"
var pizza
pizza = 'Pizza'

// function changePizza(topping) {
//     pizza = topping
// }
// or
// var changePizza = function(topping) {
//     pizza = topping
// }

// var changePizza = function(topping, price) {  //topping and price are a var, but are only a var in function changePizza
// pizza = topping
//     alert(pizza)
//     alert(price)
// }
// changePizza('Hawaiian Pizza', 12.65)  //Now changePizza is Hawaiian Pizza

// changePizza()  //you are letting the function above know it can run
// changePizza()//it will run 4 times because ther are 4 of them.
// changePizza()
// changePizza()

// function example() {
//     //this is really example() var = X
//     var x = 'Soda'
// }
//
// example()

// console.log(pizza)
// console.log(changePizza)

// one()  //function go in order.  This will go from one() to two() until it gets to the bottom, then it will come back up.  Which will then make is answer the console logs it had yet to get to.
// console.log('After 1')
// console.log(4)
//
// function one() {
//     console.log(1)
//     two()
//     console.log('After 2')
// }
// function two() {
//     console.log(2)
//     three()
//     console.log('After 3')
// }
// function three() {
//     console.log(3)
// }
//bottom of this example.

//
// for(let i = 0; i < 10000; i++)  //for loop

// function increaseCounter() {
//     console.log(2)
//     counter++
// }
//
// var counter = 0
// console.log('Running setInterval() Function.')
// // var timer = setInterval(increaseCounter, 1000) //zero seconds from the end of this script
// setTimeout(increaseCounter, 1000)
// fetch('http://swapi.co/api/')
//     .then(response => console.log('Ran fetch() Function.'))
//
// console.log(1)
// console.log('Script finished running.')

// function increaseCounter() {
//     console.log(2)
//     counter++
// }

// console.log(window.document)
// console.log(document)  //document is your entire HTML document


var myCustomTag = {
    tagName: 'custom',
    className: 'col'
}

console.log('We are looing for stuff.')
h1 = document.querySelector('h1')
// scripts = document.querySelector('script')
// test = document.getElementById('test')
// console.log(document.body.children[0].children[0])  //long way, don't do.
console.dir(test)
console.log('We found stuff')
