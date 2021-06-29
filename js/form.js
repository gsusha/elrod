var modal = document.getElementById("modal");

var btn = document.getElementById("order-btn");

var span = document.getElementsByClassName("modal__close")[0];

function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}