document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let saber = document.getElementById('saber');
    let left = e.offsetX;
    let top = e.offsetY;
    saber.style.left = left + "px";
    saber.style.top = top + "px"
})

const saberblade = document.querySelector('.saberblade');
//const audio2 = document.getElementById('sabersound');
const sabersound = new Audio("swimng3-94210.mp3");

document.querySelector('.saber-btn').addEventListener('click', function() {
    saberblade.classList.toggle('saberblade-height');
    saberFun();
})

function saberFun(){
//    audio2.play();
    sabersound.play;
    setTimeout(2000);
    sabersound.pause;
    console.log("made it!");
}

