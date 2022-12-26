let container=document.querySelector(".container-header");
let message=document.querySelector(".msg");
let input=document.querySelector(".input");
let button=document.querySelector(".btn");

function hidemessage(){
    setTimeout(()=>{
     message.innerHTML = '<span>Result will show here.</span>';
    },3000)
 }

button.addEventListener("click",()=>{
  
    if(input.value.length <= 1){
        message.innerHTML = '<span>Enter Text or Number must be at least 2 characters.</span>';  
        hideMassage()
        return;
      }
  
    let abc= input.value.split("");
   let xyz= abc.reverse().join('');
  if(xyz == input.value) {
    message.innerHTML=`Yes,<span>'${input.value}'</span> is Palindrome!`;
    hidemessage();
  }else{
    message.innerHTML=`No,<span>'${input.value}'</span> is Palindrome!`;
    hidemessage();
  }
 
});
    