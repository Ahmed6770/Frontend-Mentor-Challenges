questionBox = document.querySelectorAll(".question-box");
answer = document.querySelectorAll(".answer");
btn = document.querySelectorAll(".toggle-btn");

const saved = localStorage.getItem("savee");

if (saved !== null) {
  answer[saved].classList.add("show");
  btn[saved].innerHTML = "-";
}

questionBox.forEach((item, index) => {
  item.addEventListener("click", function () {
    let isOpen = answer[index].classList.contains("show");
    answer.forEach((item2) => {
      item2.classList.remove("show");
    });
    btn.forEach((mins) => {
      mins.innerHTML = "+";
    });
    if (isOpen) {
      answer[index].classList.remove("show");
      btn[index].innerHTML = "+";
    } else {
      answer[index].classList.add("show");
      btn[index].innerHTML = "-";
    }

    localStorage.setItem("savee", index);
    localStorage.setItem("plus", index);
  });
});
