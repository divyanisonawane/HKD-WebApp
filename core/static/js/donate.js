// Store selected values
let selectedAmount = "";
let selectedPurpose = "";

// Get modal element
const upiModal = document.getElementById("upiModal");

// Bind modal show event to capture amount and purpose
upiModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;

  // Read data attributes
  selectedAmount = button.getAttribute("data-amount");
  selectedPurpose = button.getAttribute("data-purpose");

  // Update modal content
  document.getElementById("donationAmount").textContent = selectedAmount;
  document.getElementById("donationPurpose").textContent = selectedPurpose;
});

// Expose this function to global window so HTML can access it
window.openUPIApp = function (app) {
  const upiId = "your-upi-id@upi"; // Replace with your actual UPI ID
  let url = "";

  if (app === "gpay") {
    url = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      selectedPurpose
    )}&am=${selectedAmount}&cu=INR`;
  } else if (app === "phonepe") {
    url = `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(
      selectedPurpose
    )}&am=${selectedAmount}&cu=INR`;
  } else {
    alert("Invalid app selected.");
    return;
  }

  // Hide the modal before redirecting
  const modalInstance = bootstrap.Modal.getInstance(upiModal);
  modalInstance.hide();

  // Slight delay to allow modal to close
  setTimeout(() => {
    window.location.href = url;
  }, 300);
};
