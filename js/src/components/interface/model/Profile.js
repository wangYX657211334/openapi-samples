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

/**
 * The Profile model module.
 * @module interface/model/Profile
 * @version 1.0.0
 */
class Profile {
    /**
     * Constructs a new <code>Profile</code>.
     * @alias module:interface/model/Profile
     */
    constructor() { 
        
        Profile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Profile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:interface/model/Profile} obj Optional instance to populate.
     * @return {module:interface/model/Profile} The populated <code>Profile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Profile();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('picture')) {
                obj['picture'] = ApiClient.convertToType(data['picture'], 'String');
            }
            if (data.hasOwnProperty('promo_code')) {
                obj['promo_code'] = ApiClient.convertToType(data['promo_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * First name of the Uber user.
 * @member {String} first_name
 */
Profile.prototype['first_name'] = undefined;

/**
 * Last name of the Uber user.
 * @member {String} last_name
 */
Profile.prototype['last_name'] = undefined;

/**
 * Email address of the Uber user
 * @member {String} email
 */
Profile.prototype['email'] = undefined;

/**
 * Image URL of the Uber user.
 * @member {String} picture
 */
Profile.prototype['picture'] = undefined;

/**
 * Promo code of the Uber user.
 * @member {String} promo_code
 */
Profile.prototype['promo_code'] = undefined;






export default Profile;

