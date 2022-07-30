

function add() {
let input = +document.getElementById('display').value
let result = +document.getElementById('result').innerHTML
document.getElementById('result').innerHTML=result+input
document.getElementById('log').innerHTML=document.getElementById('log').innerHTML+`${result} + ${input}= ${result+input}<br> `
}

function sub() {

let input = +document.getElementById('display').value
let result = +document.getElementById('result').innerHTML
document.getElementById('result').innerHTML=result-input
document.getElementById('log').innerHTML=document.getElementById('log').innerHTML+`${result} - ${input}= ${result-input}<br>`

}
function mul() {
let input = +document.getElementById('display').value
let result = +document.getElementById('result').innerHTML
document.getElementById('result').innerHTML=input*result
document.getElementById('log').innerHTML=document.getElementById('log').innerHTML+`${result} * ${input}= ${result*input}<br>`
}

function div() {
let input = +document.getElementById('display').value
let result = +document.getElementById('result').innerHTML
document.getElementById('result').innerHTML=result/input
document.getElementById('log').innerHTML=document.getElementById('log').innerHTML+`${result} / ${input}= ${result/input}<br>`

}

function sin(){
    let input = +document.getElementById('display').value
    document.getElementById('result').innerHTML=+Math.sin(input*Math.PI/180)


}
function cos(){
    let input = +document.getElementById('display').value
    document.getElementById('result').innerHTML=+Math.cos(input*Math.PI/180)


}

function tan(){
    let input = +document.getElementById('display').value
    document.getElementById('result').innerHTML=+Math.tan(input*Math.PI/180)


}

function cleanAll() {
   
    display.value = 0
}
