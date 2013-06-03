/**
 * @module bpp-photo-model-list
 * @requires model-list,bpp-photo-model
*/
YUI.add('bpp-photo-model-list', function(Y){

    var PhotoList = function(){
        PhotoList.superclass.constructor.apply(this, arguments);
    };

    Y.extend(PhotoList, Y.ModelList, {
        // This tells the list that it will hold instances of the Gakkery Model class.
        model : Y.bpp.Photo.Model
    });

    Y.namespace('bpp.Photo.List');
    Y.bpp.Photo.Model.List = PhotoList;

},'@VERSION@',{requires:['model-list', 'bpp-photo-model']});