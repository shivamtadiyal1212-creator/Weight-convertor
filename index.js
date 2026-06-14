const inputE1=document.querySelector(".input");
const error=document.querySelector(".error");
let errorTime;
let resulttime;
const result=document.querySelector("#result");
inputE1.addEventListener("input",
    work
)

function work(){
    let valueE1=inputE1.value;
    if(valueE1<=0){
 error.textContent="Enter a Valid Value for x";
clearTimeout(errorTime);

errorTime=setTimeout(() => {
    error.textContent="";
    inputE1.value="";
}, 2000);
}
else{
    valueE1=Number(valueE1);
    valueE1=valueE1*45/100;
    result.textContent=`${valueE1}`;
    clearTimeout(resulttime);
    resulttime=setTimeout(()=>{
     result.textContent=""
     inputE1.value=""

    },5000)
    
}
}