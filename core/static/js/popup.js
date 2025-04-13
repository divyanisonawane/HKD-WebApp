document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close");

    if (popup && closeBtn) {
      popup.style.display = "flex";

      closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
      });
    } else {
      console.warn("Popup or close button not found");
    }
  }, 2000); // 2 seconds delay
});
