/**
 * @module bpp-app
 * @requires
*/
YUI.add('bpp-app-view',function(Y){
    "use strict";

    var AppView = function(config){
        AppView.superclass.constructor.apply(this, arguments);
    };

    AppView.ATTRS = {
        container : null,
        model : {
            setter: function(e){
                return new Y.bpp.Business.Model(e);
            }
        },
        businessView : {
            valueFn: function(){
                return new Y.bpp.Business.View({
                    container : this.get('container').one(Y.bpp.config('containers.business'))
                });
            }
        },
        map : {
            valueFn: function(){
                Y.YMaps.init({
                    appid: Y.bpp.config('ymaps.appid')
                });
                return new Y.bpp.Map({
                    'traffic' : false,
                    'height' : this.get('container').one('.bbp-hero-container').get('offsetHeight'),
                    'boundingBox' : this.get('container').one('.bpp-map'),
                    'center' : this.get('model').geo(),
                    'zoomLevel' : Y.bpp.config('ymaps.zoomThresholdLevel'),
                    'controls' : false,
                    'animatedTransitions' : Y.bpp.config('ymaps.animatedTransitions')
                });
            }
        }
    };

    AppView.NAME = 'appView';
    AppView.NS = 'app';

    Y.extend(AppView, Y.View, {
        eventListeners : [],
        /**
        * key events
        * @method keyEvents
        * @return {void}
        */
        keyEvents : function(){
            var keydownListener = Y.one('body').on('keydown', function(e){
                switch(e.keyCode) {
                    case 27: // escape key press
                        Y.fire('bpp::keydown:escape');
                    break;

                    default:
                      // do noting
                    break;
                }
            });

            this.eventListeners.push(keydownListener);
        },
        /**
         * initEvents
         * @return {void}
        */
        initEvents : function(){
            this.keyEvents();

            var windowresizeListener = Y.on('windowresize', function(){
                Y.fire('bpp:resize');
            },null);
            this.eventListeners.push(windowresizeListener);
        },
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){
            config = config || {};
            Y.log('BPP : INIT');
                // append myc fader
            if (!Y.one('#bpp-fader-container')) {
                Y.one('body').appendChild(Y.bpp.App.templates.fader());
            }
            this.initEvents();
        },
        /**
        * @method render
        * @return {void}
        */
        render: function(e){
            var t = this;

            t.get('businessView').render();
            t.get('map').render(function(){
                t.get('map').setControls({
                    'zoomControl' : Y.bpp.config('ymaps.zoomControl'),
                    'scale' : Y.bpp.config('ymaps.scale'),
                    'mouse' : Y.bpp.config('ymaps.mouse'),
                    'keyboard' : Y.bpp.config('ymaps.keyboard')
                });
                var marker = new Y.YMaps.Marker({
                    geoLocation: t.get('model').geo(),
                    label: '*',
                    detailViewContent: ' ',
                    hoverOverMarkerContent: ' '
                });
                t.get('map').draw(marker);
            });
        },
        /**
        * @method destructor
        * @return {void}
        */
        destructor : function(){
            this.eventListeners = Y.bpp.util._destructor(this.eventListeners);
        },
        /**
        * @method clear
        * @return {void}
        */
        clear : function(){}
    });

    Y.namespace('bpp.App');
    Y.bpp.App.View = AppView;

}, '@VERSION@',{
    requires:[
        'view',
        'bpp-config',
        'bpp-business-view',
        'bpp-business-model',
        'bpp-map-view',
        'bpp-app-templates'
    ]
});