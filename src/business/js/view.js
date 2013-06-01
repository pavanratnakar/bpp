/**
 * @module bpp-business-view
 * @requires
*/
YUI.add('bpp-business-view',function(Y){

    var BusinessView = function(config){
        BusinessView.superclass.constructor.apply(this, arguments);
    };

    BusinessView.ATTRS = {
        container : null,
        reviewView : {
            valueFn: function(){
                return new Y.bpp.Review.View({
                    container : this.get('container').one(Y.bpp.config('containers.review'))
                });
            }
        }
    };

    BusinessView.NAME = 'businessView';
    BusinessView.NS = 'business';

    Y.extend(BusinessView, Y.View, {
        eventListeners : [],
        // Specify delegated DOM events to attach to the srpl-business container.
        events:{
            '.bpp-more':{
                'click': '_moreClick'
            },
            '.bpp-less':{
                'click': '_lessClick'
            },
            '.bpp-more-details':{
                'click': '_moreDetailsClick'
            },
            '.bpp-see-all':{
                'click': '_seeAllClick'
            }
        },
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){},
        /**
        * @method renderDescription
        * @return {void}
        */
        renderDescription: function(){
            if (this.get('container').one('.bpp-description')) {
                var descriptionNode = this.get('container').one('.bpp-description h3');
                descriptionNode.setContent(
                    Y.bpp.util.stringTruncator(descriptionNode.getContent(),Y.bpp.config('business.descriptionLimit'))
                );
            }
        },
        /**
        * @method renderDetails
        * @return {void}
        */
        renderDetails: function(){
            if (this.get('container').one('.bpp-detail')) {
                Y.bpp.util.domTruncator(
                    this.get('container').one('.bpp-detail'),
                    '.bpp-sub-module',
                    Y.bpp.config('business.detailLimit')
                );
                if (this.get('container').one('.bpp-detail-hours')) {
                    Y.bpp.util.seeAll(
                        this.get('container').one('.bpp-detail-hours'),
                        '.bpp-detail-day-hours',
                        Y.bpp.config('business.dayHoursLimit')
                    );
                }
            }
        },
        /**
        * @method render
        * @return {void}
        */
        render: function(){
            this.renderDescription();
            this.renderDetails();
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
        clear : function(){},

        // -- Event Handlers -------------------------------------------------------

        /**
        * @method _moreClick
        * @params {e} e
        * @return {void}
        */
        _moreClick: function(e){
            var target = e.currentTarget;

            e.preventDefault();
            target.hide().previous().hide();
            target.next().show();
            this.fire('resize');
        },
        /**
        * @method _moreClick
        * @params {e} e
        * @return {void}
        */
        _lessClick: function(e){
            var target = e.currentTarget;

            e.preventDefault();
            target.get('parentNode').hide().previous().show().previous().show();
            this.fire('resize');
        },
        /**
        * @method _moreDetailsClick
        * @params {e} e
        * @return {void}
        */
        _moreDetailsClick: function(e){
            var target = e.currentTarget;

            e.preventDefault();
            Y.bpp.util.domTruncator(
                target.ancestor('.bpp-detail'),
                '.bpp-sub-module',
                Y.bpp.config('business.detailLimit'),
                target.hasClass('bpp-view-more') ? 'more' : 'hide'
            );
            this.fire('resize');
        },
        /**
        * @method _seeAllClick
        * @params {e} e
        * @return {void}
        */
        _seeAllClick: function(e){
            var target = e.currentTarget;

            e.preventDefault();
            target.get('parentNode').all('p').removeClass('bpp-hide');
            target.addClass('bpp-hide');
            this.fire('resize');
        }
    });

    Y.namespace('bpp.Business');
    Y.bpp.Business.View = BusinessView;

}, '@VERSION@',{
    requires:[
        'view',
        'bpp-review-view'
    ]
});