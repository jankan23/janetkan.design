var tileImages = document.querySelectorAll('.tile img');
var tileTitles = document.querySelectorAll('.tile .title');

window.onload = function() {
	for(var i = 0; i < tileImages.length; ++i) {
		fadeIn(tileImages[i]);
	}
};

var viewport = $("html", "body");
var speed = 600;
var easing = "easeInExpo";

$(".tile").unbind('click').click(function() {
	var tileid = this.id;

	// Load project
	$(".project").load("project/" + tileid + ".html", function() {
		$(".project").slideToggle(speed, "easeOutElastic", function() {
			$("#close").fadeIn(100); // show close button
			$(".project img").fadeIn(speed);
		});
	});
});

// Close project
$("#close").unbind('click').click(function() {
	$(".project").stop().slideToggle(500, easing, function() {
		$("#close").fadeOut("fast");

		// Scroll project container back to top
		viewport.scrollTop(0); // Scroll body to top
		$(".project").scrollTop(0); // Scroll project window to top
	});
});