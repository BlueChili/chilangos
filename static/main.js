window.addEventListener("DOMContentLoaded", function () {
  const caroussel = document.querySelectorAll(".hr-Slider");
  const sliderWidth = `${document.querySelector(".hr-SliderWrapper").getBoundingClientRect().width}px`;
  document.documentElement.style.setProperty("--slider-width", sliderWidth)
  const sliderHeight = `${document.querySelector(".hr-SliderWrapper").getBoundingClientRect().height}px`;
  document.documentElement.style.setProperty("--slider-height", sliderHeight)
  if (caroussel.length) {
    console.log(sliderHeight, sliderWidth);
  const sliderControls = document.querySelectorAll(".sl-Slider_Control");

  caroussel.forEach(function(card) {
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
  }, 3300)

  // sliderTicker;
  }
})
