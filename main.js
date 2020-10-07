let dieRollsArray = []
let roll = document.querySelector("#roll-button");
let showbutton = document.querySelector("#show-all-rolls");
let numberofdicebox = document.querySelector("#how-many-dice")
let totalnumber  = document.querySelector("total-number")
let resultscontainer = document.querySelector("results-container")
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

while (counter < dieRollsArray.length)
totalnumber.innerHTML +=dieRollsArray[counter]
counter = counter +1



})

showbutton.addEventListener("click",function(){
  let counter = 0
  
  while (counter < dieRollsArray.length)
resultscontainer.innerHTML +=dieRollsArray[counter]
counter = counter +1

})
