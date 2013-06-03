/**
 * Review Model
 * @module bpp-photo-model
*/
YUI.add('bpp-photo-model', function(Y){
    var Photo = function(){
        Photo.superclass.constructor.apply(this, arguments);
    };

    // Attributes and static properties for bpp-gallery model which we are consuming
    Photo.ATTRS = {
        id : '',
        type : '',
        alt : '',
        src : '',
        href : '',
        desc : ''
    };
    Photo.NAME = 'photo';

    Y.extend(Photo, Y.Model,{
        /**
        * @method initializer
        * @return {void}
        */
        initializer: function(e){}
    },{
        /**
        * statics
        * @method validate
        * @return {void}
        */
        validate:function(){}
    });

    Y.namespace('bpp.Photo');
    Y.bpp.Photo.Model = Photo;

},'@VERSION@',{requires:['model']});