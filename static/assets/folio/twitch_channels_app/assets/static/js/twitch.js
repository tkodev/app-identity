var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404","thomasballinger","esl_csgo","2GGaming","Destiny","pewdiepie"];

$(document).ready(function(){

  twitchAll();
  $("#twitch-btn-all").on("click", twitchAll);
  $("#twitch-btn-on").on("click", twitchOn);
  $("#twitch-btn-off").on("click", twitchOff);

});
function twitchInfo(mode){
  $('#twitch-results').html("");
  channels.forEach(function(channel){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+channel+"?callback=?", function(data){
      var name, url, logo, banner, game, status;
      var unknown = "static/img/twitch/unknown.png";
      var offline = "static/img/twitch/Twitch_BlackLogo_2.png";
      var twitchlogo = "static/img/twitch/Twitch_BlackLogo_sq.png";
      if (data.stream === null) { // Offline
        name = channel;
        url = "https://www.twitch.tv/"+channel;
        logo = twitchlogo;
        banner = offline;
        status = "offline";
        game = "Offline";
      } else if (data.stream === undefined) { // Account Closed
        name = channel;
        url = "https://www.twitch.tv/";
        logo = twitchlogo;
        banner = unknown;
        status = "closed";
        game = "Account Closed";
      } else { // Online
        name = data.stream.channel.display_name;
        url = data.stream.channel.url;
        logo = data.stream.channel.logo;
        banner = data.stream.channel.profile_banner;
        status = "online";
        game = data.stream.channel.status;
      };
      var result = {"channel": name, "url": url, "logo": logo, "banner": banner,"status": status, "game": game};
      var source = $("#twitch-template").html();
      var template = Handlebars.compile(source);
      var output = template(result);
      if ( mode === "all" ){
        $('#twitch-results').append(output);
      }else if( (mode === "on")&&(status === "online") ){
        $('#twitch-results').append(output);
      }else if( (mode === "off")&&(status !== "online") ){
        $('#twitch-results').append(output);
      };
    });
  });
};

function twitchBtn(mode){ // button active state switcher
  $("#twitch-btn-all").removeClass("active");
  $("#twitch-btn-on").removeClass("active");
  $("#twitch-btn-off").removeClass("active");
  $(mode).addClass("active");
};

function twitchAll(){
  if ( !$("#twitch-btn-all").hasClass("active") ){ // Only continue if inactive
    twitchBtn("#twitch-btn-all");
    twitchInfo("all");
  }
};

function twitchOn(){
  if ( !$("#twitch-btn-on").hasClass("active") ){ // Only continue if inactive
    twitchBtn("#twitch-btn-on");
    twitchInfo("on");
  }
};

function twitchOff(){
  if ( !$("#twitch-btn-off").hasClass("active") ){ // Only continue if inactive
    twitchBtn("#twitch-btn-off");
    twitchInfo("off");
  }
};
