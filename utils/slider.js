const next = document.getElementById("next");
const previous = document.getElementById("previous");
const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const slider_texts = document.getElementById("slider_text");
const slider_text = document.querySelectorAll("#slider_texts span");

let slide = 0;

const getValueToTransform = () => {
  if (window.innerWidth > 1150) {
    return 60;
  } else return 100;
};

next.addEventListener("click", () => {
  if (slide != img.length - 1) {
    slide++;
    imgs.style.transform = `translateX(${-slide * getValueToTransform()}vw)`;
    slider_text[slide].classList.add("show");
    slider_text[slide - 1].classList.remove("show");
  }
});

previous.addEventListener("click", () => {
  if (slide >= 1) {
    slide--;
    imgs.style.transform = `translateX(${-slide * getValueToTransform()}vw)`;
    slider_text[slide].classList.add("show");
    slider_text[slide + 1].classList.remove("show");
  }
});
