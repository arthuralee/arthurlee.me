var app = {};

app.resizeTimer = null;
app.windowResize = function() {
  var viewportHeight = $(window).height();

  if (viewportHeight < 600) viewportHeight = 600;

  $('.viewport-height').css({
    height: viewportHeight + 1 + 'px'
  });
};

/* ========================
      Location manager
=========================== */
app.locManager = {};
app.locManager.locs = {
  'yvr': 'Vancouver, Canada',
  'pit': 'Pittsburgh, PA',
  'nyc': 'New York, NY',
  'hkg': 'Hong Kong',
  'sfo': 'San Francisco Bay Area, CA'
};
app.locManager.setLocation = function(loc) {
  $('.loc-banner').css('background-image', 'url(img/' + loc + '.jpg)');
  $('#loc-desc').html(app.locManager.locs[loc]);
};

/* ========================
      Navigator
=========================== */
app.navigator = {};
app.navigator.navigate = function(section, offset) {
  offset = offset ? offset : 0;
  $('html, body').animate({
    scrollTop: $(section).offset().top - offset
  }, 500);
};

/* ========================
      Events
=========================== */
$(document).ready(function() {
  app.locManager.currentLoc = 'yvr';
  app.locManager.setLocation(app.locManager.currentLoc);
  app.windowResize();
});

$(window).resize(function() {
  clearTimeout(app.resizeTimer);
  app.resizeTimer = setTimeout(app.windowResize, 50);
});

$('a').click(function(e) {
  var href = $(this).attr('href');
  if (href[0] !== '#') return;
  
  e.preventDefault();
  app.navigator.navigate(href);
  window.location.hash = href;
});

function windowHeight() {
  return $(window).height();
}

$('.navbar').affix({
  offset: {
    top: windowHeight,
    bottom: $('footer').height()
  }
});

/* ========================
      Buttons
=========================== */
app.buttons = {
  'down': function() {
    app.navigator.navigate('content');
  }
};

for (btn in app.buttons) {
  $('.jsbtn-' + btn).click(function(e) {
    e.preventDefault();
    app.buttons[btn](e); 
  });
}