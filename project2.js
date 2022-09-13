{
  /* <button id="open-btn">
<p>Where's Our Modal</p>
</button>

<!-- Modal & Modal Background -->

<div id="modal-container">
<div id="modal">
  <p>Here I am!</p>
  <div id="close-btn">&times;</div>
</div>
</div> */
}

//selector
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const modalContainer = document.querySelector("#modal-container");

// eventlistener

openBtn.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("active");
});
