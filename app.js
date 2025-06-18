//js file
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");

  setTimeout(() => {
    loader.style.display = "none";
    mainContent.classList.add("show");
  }, 1000); // simulate a loading delay
});
