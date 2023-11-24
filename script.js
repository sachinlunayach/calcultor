let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let screenValue = "";
for ( items of button) {
    items.addEventListener("click",(e)=>{
        buttontext = e.target.innerText;
        // console.log("this is your result",buttontext)
        if (buttontext == "X") {
            buttontext = "*"
            screenValue += buttontext;
          screen.value =  screenValue;   
        }else if(buttontext == "C"){
            screenValue = "";
            screen.value =  screenValue;   
          }else if(buttontext == "="){
         screen.value = eval(screenValue)
         }else{
            screenValue += buttontext;
            screen.value =  screenValue; 
         }
         
    })

}