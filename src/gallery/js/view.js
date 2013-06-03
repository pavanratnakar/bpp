/**
 * @module bpp-gallery-view
 * @requires
*/
YUI.add('bpp-gallery-view',function(Y){

    var GalleryView = function(config){
        GalleryView.superclass.constructor.apply(this, arguments);
    };

    GalleryView.ATTRS = {
        container: null,
        list: null,
        active : null,
        overlay : {
            valueFn: function(){
                return new Y.Overlay({
                    zIndex: Y.bpp.config('overlay.zIndex'),
                    centered: true,
                    y: 0
                });
            }
        }
    };

    GalleryView.NAME = 'galleryView';
    GalleryView.NS = 'gallery';

    Y.extend(GalleryView, Y.View, {
        eventListeners: [],
        template: Y.bpp.Gallery.templates.base,
        // Specify delegated DOM events to attach to the srpl-business container.
        events: {
            '.bpp-close': {
                'click': '_closeClick'
            }
        },
        /**
        * @method initEvents
        * @return {void}
        */
        initEvents : function(){
            var globalListeners = Y.on({
                'bpp::keydown:escape': function(e){
                    this.close();
                },
                'bpp:resize': function(e){
                    //this.syncUI();
                }
            });
            this.eventListeners.push(globalListeners);
        },
        /**
        * @method listEvents
        * @return {void}
        */
        listEvents: function(){
            var t = this,
                order = [],
                temp = 0;

            t.get('list').on('add',function(e){
                if (temp === 0) {
                    order = Y.bpp.util.generateRandomSumArray(1,Y.bpp.config('gallery.gridTypes').length,5);
                }
                var img = new Image();
                img.onload = function(){
                    t.get('container').removeClass('bpp-loading');
                    t.get('container').one('#photo-box-'+e.model.get('id'))
                        .addClass('show');
                    t.syncUI();
                };
                img.src = e.model.get('thumb');
                t.get('container').one('.bpp-gallery').append(Y.bpp.Gallery.templates.photo_box({
                    'id' : e.model.get('id'),
                    'type' : Y.bpp.config('gallery.gridTypes')[order[temp]-1],
                    'alt' : e.model.get('href'),
                    'src' : e.model.get('thumb'),
                    'href' : e.model.get('href'),
                    'desc' : e.model.get('title')
                }));
                temp++;
                if (temp === order.length) {
                    temp = 0;
                }
            });
        },
        /**
        * @method syncUI
        * @return {void}
        */
        syncUI: function(){
            if (this.get('active')) {
                this.get('overlay').setAttrs({
                    width: Y.one('body').get('offsetWidth')-(2*Y.bpp.config('overlay.offset')),
                    y: Y.bpp.config('overlay.offset')
                });
            }
        },
        /**
        * The initializer function will run when a view is instantiated
        * @method initializer
        * params {hash} config
        * @return {void}
        */
        initializer: function(config){
            this.listEvents();
            this.initEvents();
            this.set('container',this.get('overlay').get('boundingBox'));
            this.get('container').addClass('bpp-overlay bpp-gallery-overlay');
            this.get('container').setContent(this.template());
        },
        /**
        * @method render
        * @return {void}
        */
        render: function(){
            this.set('active',true);
            Y.bpp.util.showFader();
            this.get('container')
                .show()
                .addClass('bpp-loading');
            this.syncUI();
            this.get('overlay').show();
            this.get('overlay').render();
        },
        /**
        * close not found div
        * @method close
        * @return {void}
        */
        close  : function(){
            if (this.get('active')) {
                Y.bpp.util.hideFader();
                this.set('active',false);
                this.get('container').hide();
                this.get('overlay').hide();
            }
        },
        /**
        * @method destructor
        * @return {void}
        */
        destructor : function(){},
        /**
        * @method clear
        * @return {void}
        */
        clear : function(){},

        // -- Event Handlers -------------------------------------------------------

        /**
        * handle close
        * @method _closeClick
        * @params {e} e
        * @return {void}
        */
        _closeClick : function(e){
            e = e || {};
            this.close();
            return false;
        }
    });

    Y.namespace('bpp.Gallery');
    Y.bpp.Gallery.View = GalleryView;

}, '@VERSION@',{
    requires:[
        'view',
        'overlay',
        'bpp-gallery-css',
        'bpp-gallery-templates',
        'bpp-config'
    ]
});