document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    
// Check if the user has a preference for light or dark mode
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
body.classList.toggle("dark-mode", prefersDarkMode);

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        body.classList.toggle("dark-mode");
        // Toggle between moon and sun emojis
        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "🌞"; // Sun Emoji for light mode
        } else {
            modeToggle.textContent = "🌙"; // Crescent Moon Emoji for dark mode
        } 
    });
});


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




let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds (adjust as needed)
}


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.createElement('div');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Collect the form data
        const formData = new FormData(contactForm);

        // Handle the form submission
        try {
            const response = await fetch('https://formspree.io/f/mdorbzvz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                // Display a success message
                successMessage.textContent = 'Thank you for your message!';
                const formContainer = document.getElementById('contact-section');
                formContainer.innerHTML = ''; // Clear the form
                formContainer.appendChild(successMessage);

                // After a brief delay, reset the form and hide the success message
                setTimeout(() => {
                    successMessage.textContent = '';
                    formContainer.innerHTML = ''; // Clear the success message
                    contactForm.reset(); // Reset the form fields
                    formContainer.appendChild(contactForm); // Display the form again
                }, 1500); // Adjust the delay (in milliseconds) as needed
            } else {
                // Display an error message if the form submission fails
                alert('There was an error submitting your message. Please try again later.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    });
});
