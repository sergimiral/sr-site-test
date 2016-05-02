
$( document ).ready(function() {
  console.log('(つ☯ᗜ☯)つ');
});

// -------------------------------------------------------------
// Accordion for the FAQ page
// -------------------------------------------------------------

if( jQuery(".toggle .toggle-title").hasClass('active') ){
		jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
	}
	jQuery(".toggle .toggle-title").click(function(){
		if( jQuery(this).hasClass('active') ){
			jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
		}
		else{	jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
		}
	});


  // -------------------------------------------------------------
  // Getting some contents from versioncheck.json
  // -------------------------------------------------------------

  $(document).ready(function() {
    var jsonURL = location.host + '/versioncheck.json';
    $.getJSON(jsonURL, function(json) {
      // Getting the contents and displaying them in releasenotes.html
      $(".domain").html(json.domain);
      $(".currentVersion").html(json.currentVersion);
      $(".releaseNotesURL").html(json.releaseNotesURL);
      // Get the downloadURL from json and add it as hrefs
      $(".downloadFromWebsiteURL").prop("href", json.downloadFromWebsiteURL);
    });
  });




//
//  slideInHeroVideo
//

var vid = document.getElementById("slideInHeroVideo");
vid.oncanplaythrough = function() {
  $('.hero-video-wrapper').removeClass('hidden');
};


// -------------------------------------------------------------
// # Lazy load function by http://ressio.github.io/lazy-load-xt
// -------------------------------------------------------------

 $(function(){
    $.lazyLoadXT.scrollContainer = '.horizontal-container';
     $.extend($.lazyLoadXT, {
       edgeY:  +0,
       edgeX: +0
     });
 });
