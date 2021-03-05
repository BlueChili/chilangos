window.addEventListener("DOMContentLoaded", function () {
const caroussel = document.querySelectorAll(".hr-Slider");
if (caroussel.length) {
  console.log("1got hit");
const sliderControls = document.querySelectorAll(".sl-Slider_Control");

caroussel.forEach((card) => {
  console.log("got hit");
  console.log( card );
  const imagesContainer = card.querySelector(".hr-Slider");
  console.log( imagesContainer );
  sliderControls.forEach((el, index) => {
    el.addEventListener(`click`, (e) => {
      toggleSlider(e);
      document.querySelector('.sl-Slider_Control[aria-current="true"]').setAttribute('aria-current', false) 
      e.target.setAttribute('aria-current', true);
      if (e.isTrusted) clearInterval( sliderTicker );
    });
  });
  function toggleSlider (event) {
    console.log("togglin");
    event.preventDefault();
    const index = event.target.dataset.index;
    const displacementBase = document.querySelector(`.sl-slide`).getBoundingClientRect().width;
    card.style.transform = `translate3d(-${index * displacementBase}px, 0 ,0)`;
  }
});

let sliderTicker = window.setInterval(function() {
  if (!!document.querySelector('[aria-current="true"]').nextElementSibling) document.querySelector('[aria-current="true"]').nextElementSibling.click()
  else { sliderControls[0].click() }
}, 5000)

sliderTicker;
}
})
