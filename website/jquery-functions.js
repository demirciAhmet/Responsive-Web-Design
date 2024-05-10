$(document).ready(function(){
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

    // Add click event to dynamically added remove buttons
    $(document).on('click', '.removeBtn', function(){
        $(this).closest('li').remove(); // Remove the closest <li> parent of the clicked button
    });
    
});