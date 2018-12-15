/**
 * @file: request.js
 * @author: Gabriele FRancia
 * @version: 0.0.0
 * This file contains an object which holds a method to make a specific request to the "restService" object .
 **/

/**
* it makes the requests to the object "restService".
* @namespace request
*/
var requests = {
    /**
     * to request the avaiable data and pass them to another function
     * after they get filtered
     * @memberof request
     * @method getStationData 
     * @param {object} - callback function
     */
    getData: function () {
        var requestUrl = urlBuilder.buildUrl();
        var config = new configRequest();
        restService.getRequest(config);
    }
}