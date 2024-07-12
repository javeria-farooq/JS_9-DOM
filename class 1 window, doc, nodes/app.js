/*///// WINDOW:
// console.log(window)*/

/*////DOCUMENT:
console.log(window.document) // HTML document
console.log(document) // HTML document

console.dir(window.document) // document object
console.dir(document) // document obj*/

///NODES:

/*/////document children
console.log(document.firstChild) // doctype
console.log(document.lastChild) // html
console.log(document.children[0]) // html
console.log(document.children[1]) // undefined
console.log(document.firstElementChild) // html
console.log(document.lastElementChild) // html*/

/*//HTML children
console.log(document.children[0].firstChild) // head
console.log(document.children[0].lastChild) // body
console.log(document.children[0].children[0]) // head
console.log(document.children[0].children[1]) // body
console.log(document.children[0].children[2]) // undefined
console.log(document.firstElementChild.firstElementChild) // head
console.log(document.firstElementChild.lastElementChild) // body*/

/*// head children
console.log(document.children[0].children[0].firstChild) // text node
console.log(document.children[0].children[0].lastChild) // text node
console.log(document.children[0].children[0].children[0]) // 1st meta
console.log(document.children[0].children[0].children[1]) // 2nd meta
console.log(document.children[0].children[0].children[2]) // title
console.log(document.firstElementChild.firstElementChild.firstElementChild) // 1st meta
console.log(document.firstElementChild.firstElementChild.lastElementChild) // title
console.log(document.firstElementChild.firstElementChild.children[1]) // 2nd meta*/

/*//body children
console.log(document.firstElementChild.lastElementChild.firstElementChild) // img 1
console.log(document.firstElementChild.lastElementChild.lastElementChild) // script
console.log(document.firstElementChild.lastElementChild.children[1]) // img 2
console.log(document.firstElementChild.lastElementChild.children[2]) // h1
console.log(document.children[0].children[1].firstChild) // text node
console.log(document.children[0].children[1].lastChild) // script node
console.log(document.children[0].children[1].children[0]) // 1st img
console.log(document.children[0].children[1].children[1]) // 2nd img
console.log(document.children[0].children[1].children[2]) // h1
console.log(document.children[0].children[1].children[3]) // p
console.log(document.children[0].children[1].children[4]) // p
console.log(document.children[0].children[1].children[5]) // p
console.log(document.children[0].children[1].children[6]) // script*/

/*//siblings
console.log(document.firstElementChild.firstElementChild.nextElementSibling) // body
console.log(document.firstElementChild.firstElementChild.previousElementSibling) // null
console.log(document.firstElementChild.lastElementChild.previousElementSibling) // head
console.log(document.firstElementChild.lastElementChild.nextElementSibling) // null
console.log(document.children[0].children[0].nextSibling) // text
console.log(document.children[0].children[1].previousSibling) // text
console.log(document.children[0].children[0].nextElementSibling) // body
console.log(document.children[0].children[1].previousElementSibling) // head*/

/*// parent node
console.log(document.firstElementChild.parentNode) // document
console.log(document.firstElementChild.parentElement) // null*/

/*//extra properties => childNodes, children, childElementCount, hasChildNodes
console.log(document.firstElementChild.childNodes) // returns an array of html children with text node
console.log(document.firstElementChild.children)  // returns an array of html children without text node
console.log(document.firstElementChild.childElementCount) // nmbr of childs of html without text node
console.log(document.firstElementChild.hasChildNodes()) // returns boolean value if it has any child node or not
console.log(document.firstElementChild.ELEMENT_NODE) // always return 1 for every node
console.log(document.firstElementChild.lastElementChild.children[2].COMMENT_NODE) // 8
console.log(document.firstElementChild.DOCUMENT_NODE) // 9*/