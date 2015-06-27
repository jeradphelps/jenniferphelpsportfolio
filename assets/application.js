// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//



$(document).ready(function(){
  /*
    This fixes a chrome bug.  Take the following scenario:
    Load the page.  Everything is awesome.  Scroll down like an inch.
    reload the page.  Part of the photo section looks cut off.  WTF?
    the background-attachment propery already has this value by default, 
    but for some reason resetting on doc ready will fix the image.
  */
  $('.photo-section').css('background-attachment', 'inherit');
});





