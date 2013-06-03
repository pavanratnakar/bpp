/**
 * @module bpp-sponsored
 * @requires
*/
YUI.add('bpp-sponsored-view',function(Y){
    "use strict";

    var SponsoredView = function(config){
        SponsoredView.superclass.constructor.apply(this, arguments);
    };

    SponsoredView.ATTRS = {
        container : null
    };

    SponsoredView.NAME = 'sponsoredView';
    SponsoredView.NS = 'sponsored';

    Y.extend(SponsoredView, Y.View, {
        eventListeners : [],
        template : '',
        // Specify delegated DOM events to attach to the bpp-business container.
        events:{},
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){
            this.eventListeners = [];
        },
        /**
        * @method render
        * @return {void}
        */
        render: function(e){},
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

    Y.namespace('bpp.Sponsored');
    Y.bpp.Sponsored.View = SponsoredView;

}, '@VERSION@',{
    requires:[
        'view',
        'bpp-util',
        'bpp-sponsored-css'
    ]
});