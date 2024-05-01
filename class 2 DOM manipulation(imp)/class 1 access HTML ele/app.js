/*1st method: selecting with id: */

let mainHeading = document.getElementById("mainHeading")
console.log("ID:")
console.log(mainHeading)
console.dir(mainHeading)

/*2nd method: selecting with class: */

let btn = document.getElementsByClassName("btns")
console.log("CLASS:")
console.log(btn)
console.dir(btn)

/*3rd method: selecting with tag: */

let para = document.getElementsByTagName("p")
console.log("TAG: ")
console.log(para)
console.dir(para)

/*unique method: query selector: */

//ID:
let mainHeading2 = document.querySelector("#mainHeading")
console.log("QUERY SELECTOR: ID")
console.log(mainHeading2)
console.dir(mainHeading2)

//CLASS:

let btn2 = document.querySelectorAll(".btns")
console.log("QUERY SELECTOR: CLASS")
console.log(btn2)
console.dir(btn2)

//TAG:

let para2 = document.querySelectorAll("p")
console.log("QUERY SELECTOR: TAG")
console.log(para2)
console.dir(para2)