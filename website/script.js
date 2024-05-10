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
