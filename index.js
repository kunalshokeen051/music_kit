// alert("Welcome to my site");
// alert("click on musical instrument or press keyboard key to play sound \n\n\t\t\t\t\t\tEnjoy 😊");

let len = document.querySelectorAll(".drum").length;



// ON CLICKED EVENT
for (let i = 0; i < len; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        animationButton(buttonInnerHtml);
        console.log(buttonInnerHtml);
    });
}



// 
//decting keyboard press
// 
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animationButton(event.key);
});



// 
// play sound when key pressed or on_clicked
// 
function makeSound(key) {

    // console.log(key);
    switch (key) {
        case "w":
            let audio1 = new Audio("/sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("/sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("/sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("/sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("/sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("/sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("/sounds/kick-bass.mp3");
            audio7.play();
            break;

        default:
            console.log("undefined input");

    }
}



function animationButton(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

// setting time out for the function    
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}
