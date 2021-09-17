export { slidesHandler };

const slidesHandler = () => {
  const btnPrev = document.querySelector("div[class='btn'][id='prev']");
  const btnNext = document.querySelector("div[class='btn'][id='next']");

  btnPrev.addEventListener("click", prevSlide);
  btnNext.addEventListener("click", nextSlide);

  function prevSlide() {
    if (Number(top.ActiveSlideIndex) - 1 < 0) {
      showSlide(top.nbOfTimestamps - 1);
    } else {
      showSlide(Number(top.ActiveSlideIndex) - 1);
    }
  }

  function nextSlide() {
    console.log(top.ActiveSlideIndex, top.nbOfTimestamps)
    if (Number(top.ActiveSlideIndex) + 1 >= top.nbOfTimestamps) {
      showSlide(0);
    } else {
      showSlide(Number(top.ActiveSlideIndex) + 1);
    }
  }

  function showSlide(index) {
    const curSlide = document.querySelector(`div[id='ts${top.ActiveSlideIndex}']`);
    curSlide.classList.remove("timestampActive");
    const newSlide = document.querySelector(`div[id='ts${index}']`);
    newSlide.classList.add("timestampActive");
    top.ActiveSlideIndex = index;
  }
};
