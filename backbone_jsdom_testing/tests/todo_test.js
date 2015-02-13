var assert = require('assert');
var fs = require('fs');

var index_html  = fs.readFileSync(__dirname + '/../static/index.html', 'utf-8');

var requirejs = require('requirejs');

var jsdom = require('jsdom');

// require('amdefine/intercept');

var jQuery = require('jquery');

exports.setUp = function(callback){
    var document = jsdom.jsdom(index_html);
    var window = document.parentWindow;
    jsdom.getVirtualConsole(window).sendTo(console);

    // var $ = jQuery.create(window);

    requirejs.config({ 
      baseUrl:  __dirname,
      nodeRequire: require,
      paths: {
          text: '../node_modules/requirejs-text/text'
      }
    });
    
    // this.App = requirejs('./../lib/analytics-app.js');
    requirejs([__dirname + '/../lib/views/stackoverflow.js'], function(bb){
        console.log(bb);
        callback();
    });
};



exports.test_aa = function(test){
    //new this.App({el:$('#app')[0]});
    // new this.App();
    test.done();
};
