(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');

Hyphenator.config({
  displaytogglebox : false,
  minwordlength : 8,
});

Hyphenator.run();
$(document).ready(function(){
  $('.snippet .collapse').first().addClass('in');

  $('#nav-wrapper').height($("#nav").height());

  $('#nav').affix({
    offset: { top: $('#nav').offset().top }
  });
});

