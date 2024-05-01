/*////////////////1st property: tagName */

// let btn = document.querySelector("button")
// console.log(btn.tagName)

// let heading = document.querySelectorAll(".head")
// console.log(heading.tagName)

/*///////////////2nd property: innerText */

/*it doesn't work: */  // ek r bt jb hm srf + lgaenge tb bh ye work nh krega. yni mjhe + k sth = bh lgana hga ya t srf = lgana hga lkn akele + m ye work nh krega
// let para = document.querySelector("#headTypePara").innerText
// let paraRes = para + " world"
// console.log(paraRes)

// let newPara2 = document.querySelector("#headTypePara").innerText
// newPara2 + " javeria"

// let myPara2 = document.querySelector("#headTypePara").innerText
// myPara2 = myPara2 += " javeria"
// console.log(myPara2)

// let myPara = document.querySelector("#headTypePara")
// myPara = myPara.innerText + " world" 
// console.log(myPara)

// let para2 = document.querySelector("#headTypePara")
// let paraRes2 = para2.innerText + " javeria"
// console.log(paraRes2)

/*it works: */

// let para = document.querySelector("#headTypePara").innerText = document.querySelector("#headTypePara").innerText + "with apna college students"
// console.log(para)

// let myPara = document.querySelector("#headTypePara")
// myPara = myPara.innerText += " world"
// console.log(myPara)

// let myPara2 = document.querySelector("#headTypePara")
// myPara2 = myPara2.innerText = " world"
// console.log(myPara2)

// let para = document.querySelector("#headTypePara")
// let paraRes = para.innerText += " of tech"
// console.log(paraRes)

// let para3 = document.querySelector("#headTypePara")
// let paraRes3 = para3.innerText = " javeria farooq"
// console.log(paraRes3)

// let javPara = document.querySelector("#headTypePara")
// javPara.innerText += " world"
// console.log(javPara)

/***** whatsapp readmore button */

// let extraMsg = document.querySelector("#secPara")
// extraMsg.style.visibility = "hidden"

// function readmore() {
//     let abc = document.querySelector("a")
//     abc.innerText = extraMsg.style.visibility = "visible"
//     abc.style.color = "black"
//     abc.style.textDecoration = "none"

// }



/*//////////////////3rd property: innerHTML */

// let div = document.querySelector("div")
// console.log(div.innerHTML)
// console.log(div.innerHTML = "<div> inner div </div>")

// let myText = document.querySelector("#jav")
// console.log(myText.innerHTML = "<i> javeria farooq </i>")

// let heading = document.querySelector("h1")
// heading.innerHTML = "<i> new heading </i>"
// console.log(heading.innerText = "new heading")


/*////////////////4th n last property: textContent */

// let mainHeading = document.querySelector("h1")
// mainHeading.style.visibility = "hidden"

// console.log(mainHeading.innerText)
// console.log(mainHeading.textContent)
// console.log(mainHeading.innerHTML)



/*////////////////////////////// practice questions: */
//qno: 1
let heading = document.querySelector("h2")
heading.innerText += " from apna college students"

let divs = document.querySelectorAll(".box")
// divs[0].innerText = " new unique value 1"
// divs[1].innerText = " new unique value 2"
// divs[2].innerText = " new unique value 3"
let idx = 1
for(div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++
}