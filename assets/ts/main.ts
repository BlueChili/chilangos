window.addEventListener("DOMContentLoaded", function () {
  const caroussel = document.querySelectorAll(".hr-Slider");
  if (caroussel.length) {
    console.log(sliderHeight, sliderWidth);
  const sliderWidth = `${document.querySelector(".hr-SliderWrapper").getBoundingClientRect().width}px`;
  const sliderHeight = `${document.querySelector(".hr-SliderWrapper").getBoundingClientRect().height}px`;
  document.documentElement.style.setProperty("--slider-width", sliderWidth)
  document.documentElement.style.setProperty("--slider-height", sliderHeight)
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

let tacoList = document.querySelectorAll(".hr-TacosItem");
let sodaList = document.querySelectorAll(".hr-SodasItem");

const itemsList = Array.prototype.concat.call(...tacoList, ...sodaList);

itemsList.forEach(function (link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(`[data-item="${event.target.dataset.itemid}"]`);
    const yStart = target.getBoundingClientRect().y;
    window.scrollBy({ left: 0, top: yStart, behavior: "smooth"});
    console.log( target )
  });
});
})
