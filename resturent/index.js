// script.js
document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservation-form");

  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const partySize = document.getElementById("party-size").value;

    // You can perform validation here if needed

    // Display confirmation message
    alert(
      `Reservation Details:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nParty Size: ${partySize}`
    );

    // Reset the form
    reservationForm.reset();
  });
});
