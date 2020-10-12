let dieRollsArray = []
let roll = document.querySelector("#roll-button");
let showbutton = document.querySelector("#show-all-rolls");
let numberofdicebox = document.querySelector("#how-many-dice")
let totalnumber  = document.querySelector("total-number")
let allroll = document.querySelector("#ALL-ROLL")
let totaldiv = document.querySelector("#total")
let resetbutton = document.querySelector("#reset-button")
let total = 0
roll.addEventListener("click",function(){

  console.log("rollbutton clicked")

let howmanytimeyouwantmetoroll = numberofdicebox.value
console.log(howmanytimeyouwantmetoroll)

let counter= 0
while (counter < howmanytimeyouwantmetoroll) {
    
 
  let roll =Math.floor(6.0*Math.random() +1)
  console.log(roll) 
 dieRollsArray.push(roll)
 
      
 counter = counter +1    

  }
  console.log(dieRollsArray)
  let sum 
  sum = dieRollsArray.reduce(function(a, b){
    return a + b;
}, 0);
console.log(sum)
totaldiv.innerHTML = sum

})

showbutton.addEventListener("click",function(){
  let counter = 0
  
  while (counter < dieRollsArray.length){
allroll.innerHTML += "<li>"+ dieRollsArray [counter] + "</li>"
counter = counter +1
  }

})
resetbutton.addEventListener("click" ,function(){
  let counter = 0
 
})