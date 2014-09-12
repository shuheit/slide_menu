var app = app || {};

app.PartViewLeft = Backbone.View.extend({
	tagName: 'div',
	className: 'partContainer partContainer-left',
	template: $('#partTemplate').html(),

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	}
});