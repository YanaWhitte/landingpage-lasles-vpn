// Disable buttons

const myButtons = document.querySelectorAll(".btn");
myButtons.forEach((button) => {
  button.addEventListener("click", (event) => event.preventDefault());
});

// Card switcher
$(function () {
  $(".plan-card").click(function () {
    // $(this).toggleClass("active-card");
    $(".plan-card").removeClass("active-card");
    $(this).addClass("active-card");
  });
});

// Comments slider

// clone children
{
  const carouselContainer = document.getElementById("js-carousel-1");
  const carouselChildren = Array.from(carouselContainer.children);
  carouselChildren.forEach((child) => {
    const copiedElement = child.cloneNode(true);
    carouselChildren.push(copiedElement);
    carouselContainer.appendChild(copiedElement);
  });

  function resetChildrenActiveClasses() {
    carouselChildren.forEach((child) => {
      child.classList.remove("active");
    });
  }

  const owl = $("#js-carousel-1").owlCarousel({
    margin: 50,
    autoWidth: true,
  });

  const switchPanel = document.querySelector(".comment-section .switch-panel");
  switchPanel.querySelector(".js-prev").addEventListener("click", () => {
    owl.trigger("prev.owl.carousel");
  });

  switchPanel.querySelector(".js-next").addEventListener("click", () => {
    owl.trigger("next.owl.carousel");
  });

  const commentsNumber = carouselChildren.length;
  const switcher = switchPanel.querySelector(".left .active");
  switcher.style.left = "0%";

  owl.on("changed.owl.carousel", function (event) {
    const currentIndex = event.item.index;
    resetChildrenActiveClasses();
    try {
      carouselChildren[currentIndex].classList.add("active");
      switcher.style.left = `${Math.floor(
        (currentIndex / commentsNumber) * 100
      )}%`;
    } catch (e) {}
  });
}
