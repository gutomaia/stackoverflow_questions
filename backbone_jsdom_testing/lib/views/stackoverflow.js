define([
    'jquery',
    'backbone',
    'underscore',
    'text!../templates/stackoverflow_view.html'],

    function($, Backbone, _, SidebarTemplate){

    var StackOverFlowView = Backbone.View.extend({
        initialize: function(options){
        },
        render: function(){
            var template = _.template(StackOverFlowViewTemplate);
            this.$el.html(template({options:this.options}));
        }
    });

    return StackOverFlowView;
});
