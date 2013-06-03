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
        },
        socialView : {
            valueFn: function(){
                return new Y.bpp.Social.View({
                    container : this.get('container').one(Y.bpp.config('containers.social'))
                });
            }
        },
        sponsoredView : {
            valueFn: function(){
                return new Y.bpp.Social.View({
                    container : this.get('container').one(Y.bpp.config('containers.sponsored'))
                });
            }
        },
        photoList : null,
        galleryView : null
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
            },
            '.bpp-show-gallery':{
                'click': '_showGallery'
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
        * @method renderGallery
        * @return {void}
        */
        renderGallery: function(){
            var t = this;

            if (!this.get('list')) {
                this.set('list',new Y.bpp.Photo.Model.List());
            }
            if (!this.get('galleryView')) {
                this.set('galleryView',new Y.bpp.Gallery.View({
                    'list' : this.get('list')
                }));
            }
            // HACK FOR NOW
            var q = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={apiKey}&privacy_filter={privacyFilter}&safe_search={safe_search}&text={text}&per_page={perPage}&accuracy={accuracy}&sort={sort}&format=json',
                query = Y.Lang.sub(q,{
                    'apiKey' : 'febe9ecc58779b03d17ec7c0828eca68',
                    'text' : 'earth',
                    'privacyFilter' : 1,
                    'safe_search' : 1,
                    'perPage' : 50,
                    'accuracy' : 10,
                    'sort' : 'interestingness-desc'
                });

            Y.bpp.jsonp(encodeURI(query),{
                on:{
                    success:function(res){
                        Y.each(res.photos.photo,function(p,i){
                            t.get('list').add({
                                'thumb':'http://farm'+ p.farm +'.staticflickr.com/'+ p.server +'/'+ p.id +'_'+ p.secret +'_z.jpg',
                                'href' : 'http://farm'+ p.farm +'.staticflickr.com/'+ p.server +'/'+ p.id +'_'+ p.secret +'-n.jpg',
                                'title' : p.title,
                                'id' : p.id
                            });
                        });
                    },
                    failure:function(err){},
                    timeout:function(err){}
                }
            },{
                callbackName: 'jsoncallback',
                // checking caching
                cacheWhen: function(data){
                    if (data.stat && data.stat === "ok") {
                        return true;
                    } else {
                        return false;
                    }
                }
            });
            this.get('galleryView').render();
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
        },
        /**
        * @method _showGallery
        * @params {e} e
        * @return {void}
        */
        _showGallery: function(e){
            var target = e.currentTarget;

            e.preventDefault();
            this.renderGallery();
        }
    });

    Y.namespace('bpp.Business');
    Y.bpp.Business.View = BusinessView;

}, '@VERSION@',{
    requires:[
        'view',
        'bpp-review-view',
        'bpp-social-view',
        'bpp-sponsored-view',
        'bpp-gallery-view',
        'bpp-util',
        'bpp-photo-model-list',
        'bpp-jsonp'
    ]
});