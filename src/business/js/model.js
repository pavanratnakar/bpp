/**
 * Business Model
 * @module bpp-business-model
*/
YUI.add('bpp-business-model', function(Y){
    var Business = function(){
        Business.superclass.constructor.apply(this, arguments);
    };

    // Attributes and static properties for bpp-business model which we are consuming
    Business.ATTRS = {
        "id": null,
        "lat" : {
            setter: function(value){
                if (typeof value === 'string'){
                    return parseFloat(value, 10);
                }
                return value;
            }
        },
        "lon" : {
            setter: function(value){
                if (typeof value === 'string'){
                    return parseFloat(value, 10);
                }
                return value;
            }
        }
    };
    Business.NAME = 'business';

    Y.extend(Business, Y.Model,{
        /**
        * The initializer function will run when a view is instantiated
        * Has a bunch of helper functions to convert the location to various formats
        * @method initializer
        * @return {void}
        */
        initializer: function(e){
            e = e || {};
            if (!e.id) {
                this.set('id',this.generateClientId());
            }
        },
        /**
        * @method geo
        * @return {geo} location geo object
        */
        geo: function(){
            return new Y.YMaps.GeoLocation({
                lat: this.get('lat'),
                lon: this.get('lon')
            });
        }
    },{
        /**
        * statics
        * @method validate
        * @return {void}
        */
        validate:function(){}
    });

    Y.namespace('bpp.Business');
    Y.bpp.Business.Model = Business;

},'@VERSION@',{requires:['model']});