/*////////getAttribute(attributeName) */

/*let div = document.querySelector("#box")
console.log(div.getAttribute("id"))*/

/*let div = document.querySelector("div")
let id = div.getAttribute("id")
console.log(id)*/

/*let paragraph = document.querySelector(".para")
console.log(paragraph.getAttribute("class")) */

/*let paragraph = document.querySelector("p")
let class1 = paragraph.getAttribute("class")
console.log(class1)*/

/*let div = document.querySelector("div")
let name1 = div.getAttribute("name")
console.log(name1)*/

/*////////setAttribute(attributeName, setNewValue) */
/*let para = document.querySelector("p")
let paraNewClass = para.setAttribute("class", "paragraph")
console.log(paraNewClass) // lkn jb is cheez ko console krwte hn t wo undefine btata h but element m jaake change
// krdta h*/

/*/////////changing style attribute value through node.style*/

/*let para = document.querySelector("p")
console.log(para.style)
para.style.backgroundColor = "pink"*/

/*let div = document.querySelector("div")
console.log(div.style)
div.style.backgroundColor = "aquaMarine"
div.style.padding = "20px"*/

/*/////////Insert Elements: */
/*first we create elements for inserting it on document */

/*let newBtn = document.createElement("button")
console.log(newBtn)
console.log(newBtn.innerText)
newBtn.innerText = "Click me!"
console.log(newBtn)
console.log(newBtn.innerText)*/

/*let newDiv = document.createElement("div")
console.log(newDiv)
console.log(newDiv.innerText)*/

/*let newDiv2 = document.createElement("div")
console.log(newDiv2)
newDiv2.innerText = "New div"
console.log(newDiv2.innerText)*/

/*//// Now we insert ele on document */

//create ele:
/*let redBtn = document.createElement("button")
let whiteBtn = document.createElement("button")
//insert text into a new el
whiteBtn.innerText = "Click me!"
redBtn.innerHTML = "<b><i>view more projects</i></b>"
//access specific el
let div = document.querySelector("#box")
// CSS of newBtn
redBtn.style.height = "30px"
redBtn.style.width = "150px"
redBtn.style.backgroundColor = "red"
redBtn.style.color = "white"
//insert new el:

// div.append(whiteBtn)
// div.append(redBtn)
div.prepend(whiteBtn)
div.prepend(redBtn)

let mainHeading = document.createElement("h1")
mainHeading.innerHTML = "<i>This is h1 Heading</i>"

let subHeading = document.createElement("h3")
subHeading.innerHTML = "<i>This is h3 Heading</i>"

let body = document.querySelector("body")
let div2 = document.querySelector("#box2")

body.prepend(mainHeading)
// body.append(mainHeading)
div2.after(subHeading)
// div2.before(subHeading)

// redBtn.remove()
// whiteBtn.remove()
// mainHeading.remove()
// subHeading.remove()
div2.remove()

let para = document.querySelector("p")
para.remove()

let btn = document.querySelector("button")
btn.remove()*/

/*////// appendChild method */

/* let newElement = document.createElement("h1")
let newText = document.createTextNode("this is my content")

console.log(newElement)
console.log(newText)

newElement.appendChild(newText)
console.log(newElement)

let body = document.querySelector("body")
body.append(newElement)
// newText.appendChild(newElement)  // error
// console.log(newText) */

/**///////remove child: */
/*let uList = document.querySelector("ul")
let dltList = uList.children[0]
uList.removeChild(dltList)
// uList.removeChild(uList.children[2])*/

/*//////////Practice questions: */

// qno:1
let btn = document.createElement("button")
btn.innerText = "Click me!"
btn.style.backgroundColor = "red"
btn.style.color = "white"
let body = document.querySelector("body")
body.prepend(btn)

//qno:2

let para = document.querySelector("p")
para.classList.add("newContent")
para.classList.remove("content")