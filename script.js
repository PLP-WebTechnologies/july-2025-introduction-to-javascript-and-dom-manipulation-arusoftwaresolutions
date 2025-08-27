function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;

}
function div(num1, num2){
    return num1/num2
}
function mul(num1,num2){
    return num1*num2
}

const display=document.getElementById("output");
const buttons=document.querySelectorAll("button")

let current="";
let num1=null;
let operator=null;

for (let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click", function(event){
        event.preventDefault();
        let value=buttons[i].innerText;

        if (!isNaN(value) || value==='.'){
            current+=value;
            display.value=current;
        }
        else if(["+", "-","X","/"].includes(value)){
        num1=parseFloat(current);
        operator=value;
        current="";
        }
        else if(value==="="){
            let num2=parseFloat(current);
            let result;

            if(operator==="+") result=add(num1, num2);
            if(operator==="-") result=sub(num1,num2);
            if(operator==="X") result=mul(num1,num2);
            if(operator==="/") result=div(num1,num2);
            display.value=result;
            current=result.toString();
            num1=null;
            operator=null;
        }
        else if(value==="C"){
            current="";
            num1=null;
            operator=null;
            display.value="";
        }
    });
}
