/*//getAttribute()
let box = document.querySelector(".box").getAttribute("class")
console.log(`class : ${box}`)

let box2 = document.querySelector(".box")
console.log(`id : ${box2.getAttribute("id")}`)

let box3 = document.querySelector(".box")
let boxRes = box3.getAttribute("name")
console.log(`name : ${boxRes}`)

//setAttribute()
console.log('"Set Attribute"')
let boxSetting = document.querySelector(".box").setAttribute("class", "box box_setting") // can set multiple attributes
console.log(`class : ${boxSetting}`)

let boxSetting2 = document.querySelector(".box")
console.log(`id : ${boxSetting2.setAttribute("id", "divSetting")}`)

let boxSetting3 = document.querySelector(".box")
let boxSettingRes = boxSetting3.setAttribute("name", "aliza")
console.log(`name : ${boxSettingRes}`)*/

/*//classList(add, remove)
let box = document.querySelector(".box")
console.log(box)
box.classList.add("helloBox", 'jav') // can set multiple classes
box.classList.remove('helloBox', 'jav') // can remove muliple classes*/

/*// node.style
let box = document.querySelector(".box")
console.log('"box styling"')
console.log(box)
box.style.height = '200px'
box.style.width = '200px'
box.style.backgroundColor = 'aqua'
box.style.border = '2px solid black'
// box.style.transform = 'rotate(90deg)'
// box.style.transform += 'translateY(100%)'
// box.style.transform += 'scale(3)'
box.style.transform = 'rotate(90deg) translateY(100%) scale(3)'*/

/*//createElement:
let h1 = document.createElement('h1')
h1.innerText = "This is DOM's heading"
let p = document.createElement("p")
p.innerHTML = '<i> this is DOM paragraph </i>'
console.log(h1)
console.log(p)
let btn = document.createElement('button')
btn.innerText = "Click"
console.log(btn)

//insertElement
let container = document.querySelector(".container")
//append
// container.append(h1)
// container.append(p)
// container.append(btn)

//prepend:
// container.prepend(h1)
// container.prepend(p)
// container.prepend(btn)

//before:
// container.before(h1)
// container.before(p)
// container.before(btn)

//after:
container.after(h1)
container.after(p)
container.after(btn)*/

/*//remove:
let htmlHead = document.querySelector(".htmlHead")
htmlHead.remove()
p.remove()*/

//two more method but this is older one. 'appendChild' and 'removeChild

let container = document.querySelector(".container")

let headingTag = document.createElement("h1")
let headingText = document.createTextNode('Heading of DOM')

let paragraphTag = document.createElement("p")
let paragraphText = document.createTextNode("Paragraph of DOM")

let btnTag = document.createElement("button")
let btnText = document.createTextNode("Click for JS tutorial")

headingTag.appendChild(headingText)
paragraphTag.appendChild(paragraphText)
btnTag.appendChild(btnText)
console.log(headingTag)
console.log(paragraphTag)
console.log(btnTag)

// container.append(headingTag)
// container.append(paragraphTag)
// container.append(btnTag)

// container.prepend(headingTag)
// container.prepend(paragraphTag)
// container.prepend(btnTag)

// container.before(headingTag)
// container.before(paragraphTag)
// container.before(btnTag)

container.after(headingTag)
container.after(paragraphTag)
container.after(btnTag)
//removeChild
btnTag.removeChild(btnText)