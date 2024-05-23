// Ahmet Kaan Demirci
// Can Kankılıç
//https://demirciAhmet.github.io/Responsive-Web-Design/in-classActivity11/DemirciKankilic-Activity11.html
//https://cankromo.github.io/Responsive-Web-Design/in-classActivity11/DemirciKankilic-Activity11.html

$(document).ready(function() {
    $('a').click(function(event){
        event.preventDefault();
        const title = $(this).attr('title');
        const JSONPath = "json_files/" + title + ".json"
        
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

}); // end ready 
