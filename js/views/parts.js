var app = app || {};

app.PartsView = Backbone.View.extend({
	el: '#menu',

	initialize: function( partArray ){
		this.collection = new app.Parts( partArray );
		this.render();
	},

	events: {
		'click .partContainer-left': 'moveToLeft',
		'click .partContainer-left-center': 'moveToLeft',
		'click .partContainer-right': 'moveToRight',
		'click .partContainer-right-center': 'moveToRight',
	},

	moveToLeft: function() {
		this.$el.empty();
		this.shiftCollection();
		this.render();
	},

	moveToRight: function() {
		this.$el.empty();
		this.unshiftCollection();
		this.render();
	},

	shiftCollection: function(){
		var clone = this.collection.clone();
		var first = clone.shift();
		clone.push(first);
		this.collection = clone;
	},

	unshiftCollection: function(){
		var clone = this.collection.clone();
		var last = clone.pop();
		clone.unshift(last);
		this.collection = clone;
	},

	render: function() {
		var i =0;
		this.collection.each(function( item ) {
			if(i==5) return;
			this.renderVege( item, i );
			i++;
		}, this );
	},

	renderVege: function( item, pos ) {
		var partView;
		switch(pos){
			case 0:
				partView = new app.PartViewLeft({ model: item });
				break;
			case 1:
				partView = new app.PartViewLeftCenter({ model: item });
				break;
			case 2:
				partView = new app.PartViewCenter({ model: item });
				break;
			case 3:
				partView = new app.PartViewRightCenter({ model: item });
				break;
			case 4:
				partView = new app.PartViewRight({ model: item });
				break;
		}
		this.$el.append( partView.render().el );
	},
	
});