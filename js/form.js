// Получить модальный
var modal = document.getElementById("modal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("order-btn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("modal__close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
}