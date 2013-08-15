personView = Backbone.View.extend({
    el: "#list-user",

    initialize: function(){
        this.collection = new Persons ();
        //this.colection.on('reset', this.render, this);
    },

    events: {
    	'click #button-list': 'listUsers'

    },

    render: function () {
    	console.log(this.collection);
    },

    listUsers: function () {
    	
    }
});