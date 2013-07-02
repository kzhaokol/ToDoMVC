//This is the config file for RequireJS to load all modules
requirejs.config({
    baseUrl : '',
    paths : {
        'backbone' : 'libraries/backbone/backbone-min',
        'backbone.babysitter' : 'libraries/marionette/backbone.babysitter',
        'backbone.marionette' : 'libraries/marionette/backbone.marionette.min',
        'backbone.wreqr' : 'libraries/marionette/backbone.wreqr',
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
        'backbone.babysitter' : {
            deps : [ 'backbone' ]
        },
        'backbone.marionette' : {
            deps : [ 'backbone',
                    'backbone.babysitter',
                    'backbone.wreqr',
                    'json',
                    'jQuery',
                    'underscore' ]
        },
        'backbone.wreqr' : {
            deps : [ 'backbone' ]
        },
        'bootstrap' : {
            deps : [ 'jQuery' ]
        },
        'jQuery' : {
            exports : '$'
        },
        'json' : {
            exports : 'json2'
        },

        'underscore' : {
            exports : '_'
        }
    }
});

requirejs([ 'source/main' ], function(Main) {
    return;
});