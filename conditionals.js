$(document).ready(function(){ 
	console.log("Ready!");


	// this function is triggered when the Generate madlib button is clicked
	$("#enter").click(function() {
		

		// get the values from each input
		var animal = $("#turtles_or_lions").val();
		console.log(animal);

		// determine what animal was inputted
		if (animal == "turtles") {
			var image_source = "https://cms.qz.com/wp-content/uploads/2018/01/green-sea-turtle-e1515534263421.jpg?quality=80&strip=all&w=2766";
			$("#error_message").html("");
			console.log("hiii");
		} 
		else if (animal == "lions") {
			image_source = "https://onekindplanet.org/wp-content/uploads/2016/09/az_lion1-wpcf_520x294.jpg";	
			$("#error_message").html("");
		}
		else  {
			$("#error_message").html("This is not a turtle or a lion!");
			
		}

		// display the image in the img element 
		$("#picture").attr('src', image_source);
		
	});

	// this function is triggered when the Generate madlib button is clicked
	$("#enter2").click(function() {
		

		// get the values from each input
		var animal = $("#animals2").val();

		// determine what animal was inputted
		if (animal == "bears") {
			var image_source = "https://blog.oxforddictionaries.com/wp-content/uploads/bears-1200x330.jpg";
			$("#error_message2").html("");
			console.log("hiii");
		} 
		else if (animal == "zebras") {
			image_source = "http://animals.sandiegozoo.org/sites/default/files/2016-08/hero_zebra_animals.jpg";
			$("#error_message2").html("");
		}
		else  {
			$("#error_message2").html("This is not a bear or a zebra!");
			
		}

		// display the image in the img element 
		$("#picture2").attr('src', image_source);

	}); 
});