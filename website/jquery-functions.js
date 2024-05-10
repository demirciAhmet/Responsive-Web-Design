$(document).ready(function(){
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

    //Notes Page

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

});