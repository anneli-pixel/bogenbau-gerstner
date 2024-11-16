const modal = document.getElementById("myModal");
const bowImages = document.querySelectorAll(".bow-img");
const modalImg = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const cross = document.getElementById("close");

bowImages.forEach((bowImg) => {
  const caption = document.getElementById(bowImg.dataset.bow);
  bowImg.alt = caption.innerHTML;
});

function zoomIn() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalCaption.innerHTML = this.alt;
}

bowImages.forEach((bowImg) => {
  bowImg.addEventListener("click", zoomIn);
});

cross.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function () {
  modal.style.display = "none";
};
