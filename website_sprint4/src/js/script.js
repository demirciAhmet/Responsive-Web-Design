function loadHeader() {
    var headerFile = '../components/header.html';
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
    var footerFile = '../components/footer.html';
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
//if the page is notes.html



//JQuery Functions

//Clipboard Page
$('#linkForm').submit(function(e){
    e.preventDefault(); // Prevent default form submission
    var name = $('#linkName').val();
    var url = $('#linkUrl').val();
    var listItem = '<li><a href="' + url + '" target="_blank" rel="noopener noreferrer">' + name + '</a> <button class="removeBtn">Remove</button></li>';
    $('#linkList').append(listItem);
    // Clear input fields after adding link
    $('#linkName').val('');
    $('#linkUrl').val('');
});

$(document).on('click', '.removeBtn', function(){ // Add click event to dynamically added remove buttons
    $(this).closest('li').remove(); // Remove the closest <li> parent of the clicked button
});

/* Notes Page */
$("#accordions").accordion( // Initialize the accordion
    {
        collapsible: true,
        active: false
        
    }
);

$("#grade").spinner( // Initialize the spinner
    {
        min: 1,
        max: 4
    }
);
$("#info_dialog").dialog({ // Initialize the dialog
    autoOpen: true,
    modal: true, // Make the dialog modal, blocking interaction with the rest of the page
    buttons: {
        "ok": function() {
            $(this).dialog("close"); // Close the dialog when the OK button is clicked
        }
    }
});

$("#note_added_dialog").dialog({ // Initialize the dialog
    autoOpen: false,
    modal: true, // Make the dialog modal, blocking interaction with the rest of the page
    buttons: {
        "ok": function() {
            $(this).dialog("close"); // Close the dialog when the OK button is clicked
        }
    }
});

const lectures = [
    "Introduction to Computer Engineering",
    "Computer Programming I",
    "Computer Programming II",
    "Object Oritended Programming",
    "Data Structures",
    "Algorithms",   
    "Databases",
    "Responsive Web Desing "
];

$( "#lecture" ).autocomplete({ // Initialize the autocomplete
    source: lectures
});


$('#notes_form').submit(function(e) {
    e.preventDefault();

    // Get form data
    let formData = {
        grade: $('#grade').val(),
        lecture: $('#lecture').val(),
        link: $('#link').val()
    };

    // Add to the specified grade accordion
    let grade = formData.grade;
    let lecture = formData.lecture;
    let link = formData.link;


    console.log("Notes added");

    let accordionId = '#accordion_' + grade;
    
    var note = '<li><a href="' + link + '" target="_blank" rel="noopener noreferrer">' + lecture + '</a> <button class="removeBtn">Remove</button></li>';
    
    $(accordionId).append(note);

    // Info dialog
    $('#note_added_dialog').dialog('open');
    
    // Clear form fields
    $('#grade').val('');
    $('#lecture').val('');
    $('#link').val('https://www.example.com');

});

// Clear fixed heigh attribute that comes from the jQuery UI 
$(".accordion").each(function() {
    $(this).css('height', '');
});

$(document).on('click', '.removeBtn', function(){ // Add click event to dynamically added remove buttons
    $(this).closest('li').remove(); // Remove the closest <li> parent of the clicked button
});

/* Events Page */
$('.ajax_person').click(function(event){
    event.preventDefault();
    const title = $(this).attr('title');
    const JSONPath = "../../assets/data/json_files/" + title + ".json"
    console.log("JSON path: " + JSONPath);

    // Make the AJAX request
    $.getJSON(JSONPath)
        .done(function(data) {
            console.log("JSON data retrieved successfully: ", data);

            const dataObject = data.speakers[0]; // get value of the key, and get the first object in the array
            //Get data
            const month = dataObject.month;
            const title = dataObject.title;
            const speaker = dataObject.speaker;
            const image = dataObject.image;
            const text = dataObject.text;

            $("main").empty();

            $("main").append(
                "<h1>" + title + "</h1>" +
                "<img src=" + image + ">" +
                "<h2>" + month + "<br>" + speaker + "</h2>" +
                "<p>" + text + "</p>"
            );


        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Failed to retrieve JSON file:");
            console.error("Status: " + textStatus);
            console.error("Error: " + errorThrown);
    });
});

/* Contacts Page */
$('#contact_form').submit(function(e) {
    e.preventDefault();

    // Get form data
    var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val(),
        info: "Your message has been sent successfully!"
    };

    // Respond to form data with an alert
    alert('Name: ' + formData.name + '\nEmail: ' + formData.email + '\nMessage: ' + formData.message + '\n\n' + formData.info);

    // Clear form fields
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
});

var searchTerm;
$("#btnSearch").click(function() {
    searchTerm = "";
    if ($("#search").val() == "") {
        alert("You must enter one or more tags!"); }
    else {
        searchTerm = $("#search").val();
        var url = "http://api.flickr.com/services/feeds/" +
        "photos_public.gne?format=json&jsoncallback=?" +
        "&tags=" + searchTerm + "&tagmode=all";
        $.getJSON(url, function(data){
            var html = "";
            $.each(data.items, function(i, item){
                html += "<h2>" + item.title + "</h2>";
                html += "<img src=" + item.media.m + ">";
                html += "<p><b>Tags: </b>" + item.tags + "</p>";
            });
            $("#flickr_photos").html(html);
        });
    }
});
var userSearchTerm;
$("#btnUserSearch").click(function() {
    userSearchTerm = "";
    if ($("#userSearch").val() == "") {
        alert("You must enter an ID!");
    }
    else {
        var username = $("#userSearch").val();
        var userUrl = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?" +
            "&id=" + username;
        $.getJSON(userUrl, function(data){
            var html = "";
            $.each(data.items, function(i, item){
                html += "<h2>" + item.title + "</h2>";
                html += "<img src=" + item.media.m + ">";
                html += "<p><b>Tags: </b>" + item.tags + "</p>";
            });
            $("#flickr_photos").html(html);
        });
    }
});