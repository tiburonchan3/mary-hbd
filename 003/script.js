const box_lid = document.querySelector(".box-lid");
const jump = document.querySelector(".jump");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const globes = document.querySelector(".globes");
const happy = new Audio("./audio/happy.mp3");

function openSlide() {
  if (slide1.classList.contains("slide-open")) {
    slide1.classList.remove("slide-open");
    slide2.classList.remove("slide-open");
    globes.classList.remove("globes-open");
    happy.pause();
    happy.currentTime = 0;
  } else {
    slide1.classList.add("slide-open");
    slide2.classList.add("slide-open");
    globes.classList.add("globes-open");
    // happy.play();
  }
}

function changeClass() {
  if (box_lid.classList.contains("box-lid-open")) {
    box_lid.classList.remove("box-lid-open");
    jump.classList.remove("jump-open");
  } else {
    box_lid.classList.add("box-lid-open");
    jump.classList.add("jump-open");
  }
}
