// Handle form submission for booking
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Show success screen
    const successScreen = document.createElement("div");
    successScreen.classList.add("success-screen");

    const successContent = document.createElement("div");
    successContent.classList.add("success-content");

    successContent.innerHTML = `
      <h2>Booking Successful!</h2>
      <p>Thank you for choosing Gambella Transport & Delivery. We will contact you shortly.</p>
      <a href="index.html" class="btn">Return Home</a>
    `;

    successScreen.appendChild(successContent);
    document.body.appendChild(successScreen);

    // Display success screen
    successScreen.style.display = "flex";
  });
}

// Handle sending location via Telegram
const sendLocationBtn = document.getElementById("sendLocation");
if (sendLocationBtn) {
  sendLocationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const telegramUrl = `https://t.me/share/url?url=${latitude},${longitude}`;
        window.open(telegramUrl, "_blank");
      }, (error) => {
        alert("Unable to retrieve your location. Please enable location services and try again.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });
}