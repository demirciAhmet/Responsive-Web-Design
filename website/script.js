function loadHeader() {
    var headerFile = 'header.html';
    fetch(headerFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        document.querySelector('.header').innerHTML = text;
    })
    .catch(error => {
        console.error('There was a problem loading the header:', error);
    });
}

function loadFooter() {
    var footerFile = 'footer.html';
    fetch(footerFile)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        document.querySelector('.footer').innerHTML = text;
    })
    .catch(error => {
        console.error('There was a problem loading the footeer:', error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Code to be executed after the DOM content is loaded
    console.log("Page loaded");
    loadHeader();
    loadFooter();
});

$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        // Get form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        // Send data to a server (you can replace this with your backend endpoint)
        $.ajax({
            type: 'POST',
            url: 'your-backend-endpoint',
            data: formData,
            success: function(response) {
                // On success, show a success message or redirect to a thank you page
                alert('Thank you! Your message has been sent.');
                $('#contactForm')[0].reset(); // Clear the form
            },
            error: function(xhr, status, error) {
                // On error, show an error message
                alert('Error! Message could not be sent. Please try again later.');
            }
        });
    });
});