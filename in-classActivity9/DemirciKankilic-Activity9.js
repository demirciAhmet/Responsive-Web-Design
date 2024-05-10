$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// add fade out effect to current image and title

		const waitTime = 500;
		
		$("#image").fadeOut(waitTime);
		$("#caption").fadeOut(waitTime);
		
		const element = $(this);

		//wait for fade out to finish
		setTimeout(function(){
			
			// update image and title
			var imageURL = $(element).attr("href");
			$("#image").attr("src", imageURL);
			var caption = $(element).attr("title");
			$("#caption").text(caption);
		}, waitTime);


		$("#image").fadeIn(waitTime);
		$("#caption").fadeIn(waitTime);

		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready