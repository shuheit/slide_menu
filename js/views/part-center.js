var app = app || {};

app.PartViewCenter = Backbone.View.extend({
	tagName: 'div',
	className: 'partContainer partContainer-center',
	template: $('#partTemplate').html(),

	events: {
		'change': 'change'
	},

	initialize: function() {
		this.change();
	},

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	},

	change: function() {
		Backbone.pubSub.trigger( 'partChanged', this );
	}

});