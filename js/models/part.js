var app = app || {};

app.Part = Backbone.Model.extend({
	defaults: {
		image: 'img/undefined.svg',
		name: 'undefined'
	}
});