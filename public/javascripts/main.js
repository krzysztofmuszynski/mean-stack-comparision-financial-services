(function($){

	// Return data from currency base to load on the page!

	var URL = "http://www.apilayer.net/api/live?access_key=a941734716b80744c1ba38a1573e0837&format=1",
			$usdpln = $('.usdpln'),
			$usdeur = $('.usdeur'),
			$usdgbp = $('.usdgbp');
			
	var getQuotes = function(data) {
	  	var quotes = data.quotes;
	  	$usdpln.text(quotes.USDPLN);
	  	$usdeur.text(quotes.USDEUR);
	  	$usdgbp.text(quotes.USDGBP);
	}

	$.getJSON(URL, getQuotes);

})(jQuery);
