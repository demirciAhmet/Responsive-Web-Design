/**  =================================================
 * load navigation bar by class .navigation
 *  ==================================================*/
function loadNavbar() {
    /* if the page doesn't use the generic navigation bar, don't load it */
    if (window.location.pathname === '/localweb/src/announcements.html') {
        return;
    }
    fetch('navigation.html')
    .then(response => {
        return response.text();
    })
    .then(text => {
        document.querySelector('.navigation').innerHTML = text;
    })
    .catch(error => {
        console.error('There was a problem loading the navigation bar:', error);
    });
}
loadNavbar();


/** ==================================================
 * Function to fetch and read text file for the links
 * ===================================================*/
function readTextFileLineByLine(filePath) {
    fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        const lines = text.split('\n');
        
        lines.forEach(line => {
            var linkElement = document.createElement("a");
            linkElement.setAttribute("href", line);
            linkElement.setAttribute("target", "_blank");
            linkElement.textContent = line;
            document.getElementById("links").appendChild(linkElement);
            document.getElementById("links").appendChild(document.createElement("br"));
        });
    })
    .catch(error => {
        console.error('There was a problem reading the text file:', error);
    });
}
if (window.location.pathname === 'links.html') {
    readTextFileLineByLine('../resources/links');
} else if(window.location.pathname === '/localweb/src/links.html') {
    readTextFileLineByLine('../resources/links');
}



/** ==================================================
 * Announcements page
 * ===================================================*/

function changeSection(src, event) {
    changeIframeSrc(src, event);
    changeActiveColor(event);
}

function changeIframeSrc(src, event) {
    document.getElementById('iframe').src = src;
}

function changeActiveColor(event) {
    var links = document.querySelectorAll('.announcements-nav-bar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    var clickedLink = event.target;
    clickedLink.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    function changeNavBar() {
        document.querySelector('.iframe-container').classList.toggle('responsive');
        document.querySelector('.announcements-nav-bar').classList.toggle('responsive');
    }
    if(window.location.pathname === '/localweb/src/announcements.html') {
        document.querySelector('.menu-symbol').addEventListener('click', changeNavBar);
    }
});
  
