//toggle button that changes the screen to dark-mode & light-mode when clicked
let modeBtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
       // body.classList.add("dark");
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
        //body.classList.add("light");
    }
    console.log(currMode)
    
    console.log("you are trying to change mode");
});