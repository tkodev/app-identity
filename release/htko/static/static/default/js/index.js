$( document ).ready(function() {
  console.log( "Note from Tony: Missing resources are normal :) I use div image overlays to display thumbnail assets, and some portfolio items just don't have any. The div images remain transparent to the default thumbnail underneath. I use this method in lieu of complicated hugo templating code." );

  if ($("#free-code-camp_toc").length ) {
    getData("htko89");
  }

});
function getData(user){ // gets weather
  $.getJSON("http://api.htko.ca/fcc?user="+user+"&callback=?", function(result){
    console.log(result);
  });
};
