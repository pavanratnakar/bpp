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
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){
            config = config || {};
            Y.log('BPP : INIT');
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
        'bpp-map-view'
    ]
});