if(window.matchMedia("(max-innerWidth:786)").matches){
    alert("Please Zoom Out First For Better Experience")
}
var loader = document.getElementById("loader");

window.addEventListener("load" , function(){
    loader.style.display = "none" ;
})


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


const introScreen = document.getElementById("intro-screen");
  const enterButton = document.getElementById("enter-button");
  const video = document.getElementById("intro-video");
  const mainContent = document.body;

  enterButton.addEventListener("click", () => {
    enterButton.style.display = "none";
    video.style.display = "block";
    video.play();
  });

  video.addEventListener("ended", () => {
    introScreen.style.display = "none";
  });
