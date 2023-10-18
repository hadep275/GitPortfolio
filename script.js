// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Example: Adding an event listener to an element with id "myElement"
    var myElement = document.getElementById("myElement");

    if (myElement) {
        // If the element with "myElement" ID exists, add a click event listener to it
        myElement.addEventListener("click", function () {
            // Your event handler code here
            // This code will run when "myElement" is clicked
        });
    }

    // Add a click event listener to the element with the ID "scroll-down-button"
    const scrollDownButton = document.getElementById("scroll-down-button");

    scrollDownButton.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetOffset = targetElement.getBoundingClientRect().top;
            const headerHeight = document.getElementById("navbar").offsetHeight;
            const scrollToPosition = targetOffset - headerHeight;

            // Scroll to the target element with smooth behavior
            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth",
            });
        }
    });
});
