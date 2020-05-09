/**
 * Uber API
 * Move your app forward with the Uber API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Product from './Product';

/**
 * The ProductList model module.
 * @module interface/model/ProductList
 * @version 1.0.0
 */
class ProductList {
    /**
     * Constructs a new <code>ProductList</code>.
     * @alias module:interface/model/ProductList
     */
    constructor() { 
        
        ProductList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:interface/model/ProductList} obj Optional instance to populate.
     * @return {module:interface/model/ProductList} The populated <code>ProductList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductList();

            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [Product]);
            }
        }
        return obj;
    }


}

/**
 * Contains the list of products
 * @member {Array.<module:interface/model/Product>} products
 */
ProductList.prototype['products'] = undefined;






export default ProductList;

