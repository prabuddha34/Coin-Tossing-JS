 const myButton=document.getElementById("mybutton");
const Output=document.getElementById("output");

 myButton.addEventListener("click" ,event =>{
const myRoll= Math.floor(Math.random()*2);
const arr=["Head","Tail"];
if(myRoll === 0){
 Output.textContent="You Got Heads 🙂‍↕️ !";
}
else{
  Output.textContent="You Got Tails 🪡!";
}
})
