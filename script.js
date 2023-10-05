document.addEventListener("DOMContentLoaded", function () {
    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const hotelId = button.getAttribute("data-hotel");
            // You can implement booking logic here
            alert(`You  Booked  ${hotelId}!`);
        });
    });
});


