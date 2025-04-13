
document.getElementById("openFormBtn").onclick = function () {
    document.getElementById("popupForm").style.display = "block";
};

document.getElementById("closePopupBtn").onclick = function () {
    document.getElementById("popupForm").style.display = "none";
};

// Optional: close when clicking outside content
window.onclick = function(event) {
    const popup = document.getElementById("popupForm");
    if (event.target == popup) {
        popup.style.display = "none";
    }
};
