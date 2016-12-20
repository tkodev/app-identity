var unit = "c";
$(document).ready(function(){

	getLocale(unit);
	getDate();
	$("#weather-unit-btn").on("click", toggleUnit);

});

function getLocale(unit){ // gets lat and lon
	$.getJSON("http://ipinfo.io/json?callback=?", function(result){
		console.log(result);
		getWeather(result.loc, unit);
	});
};

function getWeather(loc, unit){ // gets weather
	$.getJSON("https://api.wunderground.com/api/8b89268fdbd5e9b8/conditions/q/"+loc+".json", function(result){
		var data = result.current_observation;
		console.log(data);
		$("#weather-btn").attr("href", data.ob_url);
		$("#weather-icon").attr("src", "static/img/weather/icons/"+data.icon+".svg");
		$('#weather-cond').html(data.weather);
		$('#weather-locale').html(data.display_location.full);
		if( unit == "c" ){
			$('#weather-val').html(Math.round(data.temp_c));
			$("#weather-unit").attr("src", "static/img/weather/general/unit_c.svg");
		}else{
			$('#weather-val').html(Math.round(data.temp_f));
			$("#weather-unit").attr("src", "static/img/weather/general/unit_f.svg");
		};
	});
};

function toggleUnit(){ // toggles unit variable
	if(unit == "c"){
		unit = "f";
	}else{
		unit = "c";
	}
	getLocale(unit);
}

function getDate(){ // gets date
	var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
	  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
		];
	var d = new Date()
	$('#date-month').html(monthNames[d.getMonth()]);
	$('#date-day').html(d.getDay());
};
