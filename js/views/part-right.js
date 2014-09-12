var app = app || {};

app.PartViewRight = Backbone.View.extend({
	tagName: 'div',
	className: 'partContainer partContainer-right',
	template: $('#partTemplate').html(),

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	}
});