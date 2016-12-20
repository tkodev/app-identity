$(document).ready(function(){

	$("#wiki-search").on("click", getWiki);
	// $("#wiki-input").on("click", getWiki);

});

function getWiki(){
	var query = $("#wiki-input").val();
	if( query ){
		$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+query+"&callback=?", function(result){
			var data = result.query.search;
			console.log(data);
			// var template = document.getElementById('template').innerHTML;
			var source = $("#wiki-template").html();
			var template = Handlebars.compile(source);
			var output = template(data);
			$('#wiki-results').html(output);
		});
	}else{
		alert("You must enter a search query!");
	}
};
