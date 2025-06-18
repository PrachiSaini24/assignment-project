//js file
//main content animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");

  setTimeout(() => {
    loader.style.display = "none";
    mainContent.classList.add("show");
  }, 1000); // simulate a loading delay
});

// paragraph section animation

document.addEventListener("DOMContentLoaded", () => {
  const p = document.querySelector(".p-content p");
  const words = p.textContent.trim().split(" ");
  p.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

  // Now trigger the animation
  const spans = document.querySelectorAll(".p-content span");

  const revealWords = () => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("visible");
        }, index * 100);
      });
      window.removeEventListener("scroll", revealWords);
    }
  };

  window.addEventListener("scroll", revealWords);
});
