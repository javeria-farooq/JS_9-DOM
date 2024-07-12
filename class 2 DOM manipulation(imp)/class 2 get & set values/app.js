/*// get values:
// tagName:
let myHeading = document.querySelector(".heading")
console.log(myHeading) // jb hm srf itna lkhnge t ye tag with content print krwaega lkn agr hm chahen k hmare ps srf uska tagName get ho.
let myPara = document.querySelector(".para").tagName
console.log(myParaara) // ab ye hmn srf uska tag name return krega but in uppercase.

// innerText: jb hm chahen k hmn tagName return na ho blke srf uska text return ho
let div = document.querySelector(".div").innerText
console.log(div) // ab ismn iske jtne bh childrens hnge sbka text aaega.

//innerHTML: jb hmn pura html with text chahiye ho
let container = document.querySelector(".container").innerHTML
console.log(container) // ismn bh parent with child sbka inner html aaega

//textContent: jb hmn text t chahiye ho lkn jo hide(display none, visisbility hidden) h wo bh chahiye
let hide = document.querySelector(".hideEleContainer").textContent
console.log(hide)

// yhn tk hmne values ko get krlia ab bt aati h values ko set krne ki t ye bt yd rh k jb bh hmn values set krni hti hn t hm in 4ron properties ko variable declare krte time variable m nh rkhte blke declare krte time srf el ko access krte hn then phr next step m ya t oosi variable m property assign krte hn ya phr without variable bh .se property ko set krte hn t ye hjta h but variable declare krte time srf el ko access krte hn..

// set values:
let heading1 = document.querySelector(".heading").innerText
heading1 = heading1 += "javeria" // at the time of declaring a variable innerText set that's why it's not work

let heading2 = document.querySelector(".heading")
heading2.innerText += " by apna college"

let para = document.querySelector(".para")
para.innerText += " ! hello paragraph"*/

// whatsapp readmore button
let a = document.querySelector(".readMore")
let hidePara = document.querySelector(".hidePara")

a.addEventListener("click", () => {
    a.style.display = 'none'
    hidePara.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum asperiores sapiente nemo reiciendis in, quos tempora magnam nulla optio nostrum, iure velit suscipit, perspiciatis vel aliquam ut pariatur voluptatem libero officiis. Et necessitatibus vero, iure recusandae quaerat debitis adipisci, eius esse optio quae voluptate eveniet explicabo sit atque! Tempora!`
})

// practice questions:
//qno: 1
let heading = document.querySelector(".pracHeading")
heading.innerText += " from apna college students"
// qno:2
let divs = document.querySelectorAll(".pracBox")
// divs[0].innerText = " new unique value 1"
// divs[1].innerText = " new unique value 2"
// divs[2].innerText = " new unique value 3"
let idx = 1
for(div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++
}