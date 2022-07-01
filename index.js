var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //using this keyword we get the button which was clicked to active the function ie we get acces to the button which triggered the event listener
    var key=this.innerHTML;
    playsound(key);
    animate(key);
  });
}

//for keypress we will add the eventlistener to entire document as entire document will detect the key  press.
document.addEventListener("keypress",function(event){
    //parameter event triggers the keypress from keyboard
    playsound(event.key);//event.key tells about which key was pressed  
    animate(event.key);
}
)

function playsound(key)//this the function which plays sound when both  keypress and click is detected.
{
    switch (key) {
        case "w" :
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s" :
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d" :
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k" :
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l" :
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        default: console.log(key);
            break;
    }   
}

function animate(keypress)
{
    var element=document.querySelector("."+keypress);//selecting the whole block having class keypress 
    element.classList.add("pressed")//adding class in that block element 
    
    //settime function will remove the animation effects created by class pressed after 0.1 sec  by removing the class pressed inside the function 
    setTimeout(function(){

        element.classList.remove("pressed");
    },100);
}

