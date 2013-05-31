YUI.add('bpp-config', function(Y){

    var config = {
        containers: {
            business : '.bpp-content'
        },
        ymaps: {
            appid: 'ymapsaura2',
            zoomLevel: 10,
            pan : false,
            zoom : true,
            scale : false,
            keyboard : false,
            mouse : false,
            mapTypeControl : false,
            zoomControl : true,
            traffic : false,
            zoomThresholdLevel : 16,
            animatedTransitions : true // default true. Override it if required
        },
        business:{
            descriptionLimit : 300,
            detailLimit : 2,
            hourLimit : 20
        }
    };

    Y.namespace('bpp');

    Y.bpp.config = function(key, _default){
        var val = Y.bpp.util.atPath(config, key);
        return (Y.Lang.isValue(val) ? val : _default);
    };

    Y.bpp.config.set = function(key, val){
        Y.bpp.util.setAtPath(config, key, val);
        return Y.bpp.config;
    };

    Y.bpp.config.paths = function(){
        var paths = Y.bpp.util.paths(config);
        return paths;
    };

    Y.bpp.config.set(window.srpl_config||{});

},'@VERSION@',{requires:['bpp-util', 'bpp-deferred']});