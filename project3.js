// variable

const accordions = document.querySelectorAll(".content-container");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // console.log(this);
    this.classList.toggle("active");
  });
});
