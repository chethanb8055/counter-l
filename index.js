// const mydiv = document.createDocumentFragment();



// const t1 = performance.now()
// function para(name){
//     console.log(name.target.nodeName)
// }
// mydiv.addEventListener('click',para)
// for(let i =0;i<100;i++){
//     const Element= document.createElement("p")
    

//     Element.textContent = `this is paragrap ${i}`

//     mydiv.appendChild(Element)
// }
// const t2 = performance.now()

// console.log(t2-t1)
// document.body.appendChild(mydiv)


// setTimeout(function(){
// console.log("say Hi1...")
// console.log("helo")
// setTimeout(function(){
//     console.log("say Hi2...")
//     setTimeout(function(){
//         console.log("say Hi3...")
//         },1000)
//     },1000)
// },1000)

// console.log(typeof myTime)
// myTime()


// button has onclick event


const countValue = document.querySelector("#counter");
const increment=()=>{
    //it give string
    let value = parseInt(countValue.innerText);
    //update the UI
    value =value+1;
    //set the value on UI
    countValue.innerText=value;
}


const decrement =()=>{
    let value = parseInt(countValue.innerText);
    value =value-1;
    countValue.innerText=value;
}




console.log()