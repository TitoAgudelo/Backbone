var ControllerPerson = Backbone.Router.extend({
	
	routes: {
		'': 'index' 
	},

	index: function () {
		new personView();
	}
});

$(document).ready(function() {
	new ControllerPerson();
	Backbone.history.start();
});


