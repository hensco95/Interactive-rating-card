let submitBtn = document.querySelector(".submit")
let modal = document.querySelector(".modal");
let numbers = document.querySelectorAll("li");
let modal_msg = document.querySelector(".selection");

numbers.forEach(function (num) {
  num.addEventListener("click", function (e) {

    let target = e.target.textContent;
    if (target) {
      modal_msg.textContent = `You selected ${target} out of 5`;
      submitBtn.disabled = false;
      // submitBtn.classList.add("pointer")
      submitBtn.addEventListener("mouseover", function () {
        submitBtn.style.cursor = "pointer"
      })
    }
    // console.log(modal_msg.textContent);
  })
})


submitBtn.addEventListener("click", function () {
  modal.classList.add("show_modal");
})
