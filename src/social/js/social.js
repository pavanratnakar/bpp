/**
 * @module bpp-social
 * @requires
*/
YUI.add('bpp-social-view',function(Y){
    "use strict";

    var SocialView = function(config){
        SocialView.superclass.constructor.apply(this, arguments);
    };

    SocialView.ATTRS = {
        container : null
    };

    SocialView.NAME = 'socialView';
    SocialView.NS = 'social';

    Y.extend(SocialView, Y.View, {
        eventListeners : [],
        template : '',
        // Specify delegated DOM events to attach to the bpp-business container.
        events:{
            '.bpp-social-actions button' : {
                'click' : '_showSocialType'
            }
        },
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){
            this.eventListeners = [];
            // TODO : HACK FOR NOW
            Y.log(this.get('container').getContent());
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
        clear : function(){},

        // -- Event Handlers -------------------------------------------------------

        /**
        * @method _showSocialType
        * @params {e} e
        * @return {void}
        */
        _showSocialType: function(e){
            Y.bpp.util.showTab(this.get('container'),e.currentTarget);
        }
    });

    Y.namespace('bpp.Social');
    Y.bpp.Social.View = SocialView;

}, '@VERSION@',{
    requires:[
        'view',
        'bpp-util',
        'bpp-social-css'
    ]
});