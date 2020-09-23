// class UniqueArray {
//     constructor() {
//         this.data = {}
//         this.length = 0
//     }

//     add(item) {
//         if (this.data[item] === undefined) {
//             this.data[item] = this.length
//             this.length++
//         }
//     }


//     showAll() {
//         for (let i in this.data) {
//             console.log(i);
//         }
//     }

//     exists(item) {
//         if (this.data[item] !== undefined) {
//             return true
//         } else {
//             return false
//         }
//     }

//     get(index) {
//         for (let i in this.data) {
//             if (this.data[i] === index) {
//                 return i
//             }
//         }
//         return -1
//     }
// } 

// class UniqueArray {
//     constructor() {
//         this.data = []
//         this.exist = {}
//         this.length = 0
//     }

//     add(item) {
//         for (let i of this.data) {
//             if (i === item) {
//                 return false
//             }
//         }
//         this.data[this.length] = item
//         this.exist[item] = 1
//         this.length++
//     }


//     showAll() {
//         console.log(this.data);
//     }

//     exists(item) {
//         if (this.exist[item] === 1) {
//             return true
//         } else {
//             return false
//         }
//     }

//     get(index) {
//         if(this.data[index]){
//             return this.data[index]
//         }else{
//             return -1
//         }
//     }
// }

// const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// console.log(uniqueStuff.exists("toy")) //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(2)) //prints "hydrogen"


