var app = app || {};

app.MainView = Backbone.View.extend({
	el: '#main',
	template: $('#partTemplate').html(),

	events: {
	},

	initialize: function( initialPart ){
		Backbone.pubSub.on('partChanged', this.partChanged, this);
		this.part = initialPart;
		this.render();
	},

	render: function() {
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.part ) );
	},

	partChanged: function( obj ) {
		this.part = obj.model.toJSON();
		this.render();
	}

});