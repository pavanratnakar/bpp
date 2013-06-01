/**
 * @module bpp-review-model
 * @requires model-list,bpp-review-model
*/
YUI.add('bpp-review-model-list', function(Y){

    var ReviewModelList = function(){
        ReviewModelList.superclass.constructor.apply(this, arguments);
    };

    Y.extend(ReviewModelList, Y.ModelList, {
        // This tells the list that it will hold instances of the Review Model class.
        model : Y.bpp.Review.Model
    });

    Y.namespace('bpp.Review.List');
    Y.bpp.Review.Model.List = ReviewModelList;

},'@VERSION@',{requires:['model-list', 'bpp-review-model']});