/**
 * Review Model
 * @module bpp-review-model
*/
YUI.add('bpp-review-model', function(Y){
    var Review = function(){
        Review.superclass.constructor.apply(this, arguments);
    };

    // Attributes and static properties for bpp-review model which we are consuming
    Review.ATTRS = {};
    Review.NAME = 'review';

    Y.extend(Review, Y.Model,{
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

    Y.namespace('bpp.Review');
    Y.bpp.Review.Model = Review;

},'@VERSION@',{requires:['model']});