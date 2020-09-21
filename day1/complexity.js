// // ex 1
// const getBalance = function (bankOperations) {
//     let balance = 0
//     ﻿for (let op of bankOperations) {
//         balance += op
//     }
//     return balance
// }

// getBalance([-27, -43, -2400, -700, 15000, 58])

// //O(n)

// //ex 2
// const printSome = function (complaints) {
//     for (let i = 1; i < complaints.length; i = i * 2)
//         console.log(complaints[i].text);
// }
// //O(log(n))

// //ex 3
// const allSides = [
//     { a: 3, b: 4 },
//     { a: 15, b: 21 },
//     { a: 41, b: 8 },
//     { a: 12, b: 6 }
// ]

// const relevantSides = allSides.filter(s => s.a % 3 == 0)
// for (let sides of relevantSides) {
//     console.log(getHype(sides))
// }

// const getHype = function (sides) {
//     let a = sides.a
//     let b = sides.b
//     let sumOfSquares = a * a + b * b
//     return Math.sqrt(sumOfSquares) //??
// }

// //O(log(n)) / O(1)

// //ex 4
// const studentAnswers = {
//     brBlds: {
//         1: "a",
//         2: "a",
//         3: "c"
//     },
//     dvOna: {
//         1: "a",
//         2: "c",
//         3: "c"
//     },
//     nmPrz: {
//         1: "a",
//         2: "b",
//         3: "a"
//     }
// }
// const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

// const distributions = {
//     1: {},
//     2: {},
//     3: {}
// }

// const getDistributions = function (studentAnswers) {
//     studentGithubs.forEach(sg => {
//         let answers = studentAnswers[sg]

//         Object.keys(answers).forEach(questionNumber => {
//             let letterAnswer = answers[questionNumber]

//             distributions[questionNumber][letterAnswer] ?
//                 distributions[questionNumber][letterAnswer]++ :
//                 distributions[questionNumber][letterAnswer] = 1
//         })
//     })

//     return distributions
// }

// getDistributions(studentAnswers)

// // O(mn)

// //ex 5
// const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))

// const emailManager = function () {
//     let email = generateEmail()

//     $.get('/recepients', function (recepients) {
//         sendEmails(email, recepients)
//     })
// }

// // O(n)

// //ex 6
// const findDuplicates = function(arr) {
//     const numsInArr = {}
//     arr.forEach(o => {
//         if(numsInArr[o]){
//             console.log("there is a duplicate");
//         }else{
//             numsInArr[0] = 1
//         }
//     })
// }

// //ex 7

// const employeeData = {
//     ax01: {name: 'Ray', age: 28, salary: 1300},
//     qs84: {name: 'Lucius', age: 31, salary: 840},
//     bg33: {name: 'Taylor', age: 18, salary: 2700}
// }

// const findEmployeeSalary = employeeID => {
//     if(employeeData[employeeID]){
//         return true
//     }else{
//         return false
//     }
// }

// // ex 8
// let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

// const findIndex = (numbers, num) =>{
//     let index = Math.floor(numbers.length/2)
//     let minIndex = 0
//     let maxIndex = numbers.length-1
//     while(numbers[index] != num && maxIndex > minIndex){
//         if(numbers[index] > num){
//             maxIndex = index - 1
//             index -= Math.floor((index -minIndex)/2)
//         }else{
//             minIndex = index + 1 
//             index += Math.floor((maxIndex -index)/2)
//         }
//     }
//     if(maxIndex > minIndex){
//         return index
//     }else{
//         return -1
//     }
// }
// console.log(findIndex(numbers, 2630));

//ex 9
// O( 1 ) = green
// O( log(n) ) = yellow
// O( n ) = blue
// O( n2 ) = red


//algorithems

// let numbers = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

// let numbers = [-312, -9123, -112, -812, -7411, -312] //should find -9123

// let numbers = [23, 23, 23, 23, 23] //should find 23

// let smallestNumber = numbers[0]//our 'number stored in memory'

// for(let num of numbers){ //going over each number

//   if(num < smallestNumber){

//     smallestNumber = num //forget the number stored in memory and store num instead
//   }
// }

// console.log("Smallest number is " + smallestNumber)

//ex 1
// const printStars = num => {
//     let msg = '*'
//     for (let i = 0; i < num; i++) {
//         console.log(msg);
//         msg += '*'
//     }
// }
// printStars(5)

//ex 2
// const printBackwardsStars = num => {
//     for (let i = num; i > 0; i--) {
//         let msg = '*'
//         for (let j = 1; j < i; j++) {
//             msg += '*'
//         }
//         console.log(msg);
//     }
// }
// printBackwardsStars(6)

//ex 3
// const printStarSeries = (num, count) => {
//     for (let j = 0; j < count; j++) {
//         let msg = '*'
//         for (let i = 0; i < num; i++) {
//             console.log(msg);
//             msg += '*'
//         }
//        msg = msg.substring(0, msg.length - 2)
//         for (let i = 0; i < num; i++) {
//             console.log(msg);
//             msg = msg.substring(0, msg.length - 1)
//         }
//     }
// }
// printStarSeries(5, 3)

//ex 4
// const reverse = function(str){
//     let reversed = ''
//     for(let i of str){
//         console.log(i);
//        reversed = i + reversed 
//     }
//     console.log(reversed);
//   }

//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"

// ex 5
// const isPalindrom = (str) =>{
//     str = str.replace(' ', '');
//     for(let i = 0 ; i< str.length; i += 2){
//         if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPalindrom('Taco Cat')); 

//ex 6
// const encrypt = str =>{
//     let newStr = ''
//     for(let i in str){
//     newStr += String.fromCharCode(str.charCodeAt(i) + 1)
//     }
//     console.log(newStr); 
// }
// encrypt('Yuval')

//ex 7
// const decrypt = str => {
//     let newStr = ''
//     for (let i in str) {
//         newStr += String.fromCharCode(str.charCodeAt(i) - 1)
//     }
//     console.log(newStr);
// }
// decrypt('dbu')

//ex 8
// const colors = ["red", "indigo", "white", "teal", "yellow"];
// const foods = ["bread", "cheese", "cucumber"];

// const jumble = function (arr1, arr2) {
//     let jumbledArr = []
//     while (arr1[0] || arr2[0]) {
//         if (arr1[0]) {
//             let index1 = Math.floor(Math.random() * arr1.length)
//             jumbledArr.push(arr1[index1])
//             arr1.splice(index1, 1)
//         }
//         if (arr2[0]) {
//             let index2 = Math.floor(Math.random() * arr2.length)
//             jumbledArr.push(arr2[index2])
//             arr2.splice(index2, 1)
//         }
//     }
//     console.log(jumbledArr)
// }

// jumble(colors, foods) // could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]


// ex 9
// const rawDist = {
//     A: 60,
//     B: 10,
//     C: 10,
//     D: 20
// }
// const getLetter = () => {
//     const randNum = Math.random() * 100
//     let count = 0
//     for (let i in rawDist) {
//         if (count < randNum && randNum < count + rawDist[i]) {
//             return i
//         } else {
//             count += rawDist[i]
//         }
//     }
// }

// console.log(getLetter())

//extentions
//ex 1
// const printInLoop = arr => {
//     let j = 0
//     while (j === 0) {
//         for (i of arr) {
//             console.log(i);
//         }
//     }
// }
//printInLoop(["down", "the", "rabbit", "hole"])

//ex 2
// let pizzaLocations = [
//     { x: 6, y: 12 },
//     { x: 3, y: 1 },
//     { x: 9, y: 0 },
//     { x: 4, y: 10 }
// ]

// let homeLocation = { x: 4, y: 2 }
// const findClosest = (locations, location) =>{
//     let closest
//     let closestDiffer = (Math.abs(locations[0].x - location.x) + Math.abs(locations[0].y - location.y))
//     locations.forEach(l => {
//         const differ = Math.abs(l.x - location.x) + Math.abs(l.y - location.y)
//         if( differ < closestDiffer){
//             closestDiffer = differ
//             closest = l
//         }
//     })
//     console.log(closest)
// }
// findClosest(pizzaLocations, homeLocation) // should return {x: 3, y: 1}

//ex 3
// const secretEncrypt = (word, key) =>{
//     let newWord = ''
//     let index = 0
//     for(let i in word){
//         newWord += String.fromCharCode(word.charCodeAt(i) + key.charCodeAt(index) - 96) 
//         index++
//         if(index === key.length){
//             index = 0
//         }
//     }
//     console.log(newWord);
// }
// secretEncrypt("elephant", "cab")

//ex 4

// const secretDecrypt = (word, key) =>{
//     let newWord = ''
//     let index = 0
//     for(let i in word){
//         newWord += String.fromCharCode(word.charCodeAt(i) - (key.charCodeAt(index) - 96)) 
//         index++
//         if(index === key.length){
//             index = 0
//         }
//     }
//     console.log(newWord);
// }
// secretDecrypt("hmgsicqu", "cab")


