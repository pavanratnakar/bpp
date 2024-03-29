YUI.add('bpp-mute', function(Y){
    // include this module if you want to mute logs. For example, in production. 
    var apis = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "trace", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd", "count", "exception", "table"];

    if(!window.console){
        window.console = {};
    }
    var identity = function(value){ return value; };

    Y.each(apis, function(api, i){
        console[api] = identity;
    });

    Y.log = identity;

}, '@VERSION@', {requires:['oop']});