const body = document.querySelector('.body')
const darkBtn = document.querySelector('.dark-button');
const lightBtn = document.querySelector('.light-button');

  darkBtn.addEventListener("click", function() {
    body.classList.add("dark");
  });

  lightBtn.addEventListener("click", function() {
    body.classList.remove("dark");
  });