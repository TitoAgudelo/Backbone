var Person = Backbone.Model.extend({
    
});

var Persons = Backbone.Collection.extend({       
    model: Person,
    url: 'http://api.dribbble.com/shots/21603',

    initialize: function () {
    	this.fetch({
    		url: this.url,
    		type: 'POST',
    		contentType:'application/json', 
    		success: function(model) {
    			console.log(model);
    		}
    	});
    }
});