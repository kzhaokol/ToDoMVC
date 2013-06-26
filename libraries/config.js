//This is the config file for RequireJS to load all modules
requirejs.config({
    baseUrl : '',
    paths : {
        'backbone' : 'libraries/backbone/backbone-min',
        'bootstrap' : '/libraries/bootstrap/js/bootstrap.min',
        'jQuery' : 'libraries/jquery/jquery-2.0.2.min',
        'json' : 'libraries/json2/json2',
        'underscore' : 'libraries/underscore/underscore-min'
    },
    shim : {
        'backbone' : {
            deps : [ 'json', 'jQuery', 'underscore' ],
            exports : 'Backbone'
        },
        'bootstrap' : {
            deps : [ 'jQuery' ]
        },
        'jQuery' : {
            exports : '$'
        },
        'underscore' : {
            exports : '_'
        }
    }
});

requirejs([ 'source/main' ], function(Main) {
    return;
});