define([
	'jquery',
    './views/stackoverflow.js',
    ], function($, StackOverFlowView) {

    new StackOverFlowView({el:$('#app')[0]});
});
