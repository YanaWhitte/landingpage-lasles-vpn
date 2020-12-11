// Disable buttons

const myButtons = document.querySelectorAll(".btn");
myButtons.forEach((button) => {
  button.addEventListener("click", (event) => event.preventDefault());
});

// Card switcher

$(document).ready(function () {
  $(".plan-card").click(function () {
    // $(this).toggleClass("active-card");
    $(".plan-card").removeClass("active-card");
    $(this).addClass("active-card");
  });
});
