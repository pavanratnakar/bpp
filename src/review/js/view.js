/**
 * Create a new bpp-review view class that extends Y.View and renders the current
 * state of a bpp-review instance.
 * @module bpp-review-view
 * @requires
*/
YUI.add('bpp-review-view', function(Y){

    var ReviewView = function(){
        ReviewView.superclass.constructor.apply(this, arguments);
    };

    // Attributes and static properties for bpp-review View.
    ReviewView.ATTRS = {
        container : null,
        model : Y.bpp.Review.Model
    };

    Y.extend(ReviewView, Y.View, {
        eventListners : [],
        template: '',
        // Specify delegated DOM events to attach to the bpp-business container.
        events:{
            '.bpp-reviews-actions-type button' : {
                'click' : '_showReviewType'
            }
        },
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * @return {void}
        */
        initializer: function(config){
            this.eventListeners = [];
            // TODO : HACK FOR NOW
            Y.log(this.get('container').getContent());
        },
        /**
        * @method render
        * @return {boolean}
        */
        render: function(){},
        /**
        * @method clear
        * @return {void}
        */
        clear: function(){},
        /**
        * @method destructor
        * @return {void}
        */
        destructor: function(){
            this.eventListeners = Y.bpp.util._destructor(this.eventListeners);
        },

        // -- Event Handlers -------------------------------------------------------

        /**
        * @method _showReviewType
        * @params {e} e
        * @return {void}
        */
        _showReviewType: function(e){
            var target = e.currentTarget,
                index = target.get('parentNode').all('button').indexOf(target);

            target
                .addClass('active')
                .siblings()
                    .removeClass('active');

            this.get('container').all('.bpp-reviews').item(index)
                .removeClass('bpp-hide')
                .siblings()
                    .addClass('bpp-hide');
        }
    });

    Y.namespace('bpp.Review');
    Y.bpp.Review.View = ReviewView;
}, '@VERSION@',{
    requires:[
        'view',
        'bpp-review-model',
        'bpp-review-css',
        'bpp-util',
        'bpp-config'
    ]
});