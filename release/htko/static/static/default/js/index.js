$(document).ready(function() {
  console.log("Note from Tony: Missing resources are normal :) I use div image overlays to display thumbnail assets, and some portfolio items just dont have any. The div images remain transparent to the default thumbnail underneath. I use this method in lieu of complicated hugo templating code.");
  backToTop();
  altGallery();
  getData("htko89");
});
function altGallery (){

}
function getData(user) { // gets weather
  if ($("#free-code-camp_toc").length) {
    $.getJSON("http://api.htko.ca/fcc?user=" + user + "&callback=?", function(result) {
      console.log(result);
    });
  }
};
function backToTop() {
  //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.h-to-top').fadeIn();
		} else {
			$('.h-to-top').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.h-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
}
