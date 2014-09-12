var app = app || {};

$(function() {
  var parts = [
    { image: 'img/brow.svg', name: 'blowL' },
    { image: 'img/brow.svg', name: 'blowR' },
    { image: 'img/eye.svg', name: 'eyeL' },
    { image: 'img/eye.svg', name: 'eyeR' },
    { image: 'img/nose.svg', name: 'nose' },
    { image: 'img/mouth.svg', name: 'mouth' }
  ];

  Backbone.pubSub = _.extend({}, Backbone.Events);
  new app.PartsView( parts );
  new app.MainView( parts[2]) ;
});