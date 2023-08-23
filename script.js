const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%" , "*", "/", "-","+" ,"="]
let output = "";
//function to calculate based on button clicked
const calculcate = (btnvalue) =>{
    if(btnvalue === "=" && btnvalue !==""){
        output =eval(output.replace("%","/100"));
    }else if(btnvalue==="AC"){
        output=""
    }else if(btnvalue==="DEL"){
        output=output.toString().slice(0,-1);//remove last character
    }else{
        if(output==="" && specialchars.includes(btnvalue)) return;
        output+=btnvalue;
    }
    display.value=output;
}
//add event listener to buttons , call calculate() on click
buttons.forEach((button)=>{
    //button click listener calls calculate() with dataset value as argument
    button.addEventListener("click",e=>calculcate(e.target.dataset.value));
});