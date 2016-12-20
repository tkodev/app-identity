$(document).ready(function(){

	getQuote();
	$("#quote-btn").on("click", getQuote);

});

function getQuote(){
	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
		// $('#quote-text').html(JSON.stringify(result));
		var quoteText = result.quoteText.trim();
		var quoteAuthor = result.quoteAuthor.trim();
		var shareQuote = encodeURI( quoteText+" - "+quoteAuthor );
		var shareURL = encodeURI( "http://www.htko.ca/fcc/widgets" );
		$('#quote-text').html(quoteText);
		$('#quote-author').html(quoteAuthor);
		$("#quote-tw").attr("href", "https://twitter.com/share?url="+shareURL+"&hashtags=famous%2Cquotes&text="+shareQuote);
		$("#quote-fb").attr("href", "http://www.facebook.com/sharer.php?u="+shareURL);
	});
};
