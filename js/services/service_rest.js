/**
 * @file: rest_service.js
 * @author: Gabriele Francia
 * @version: 0.0.0
 * This file contains an Object that holds all the methods to get data from API.
 **/
/**
 * @namespace restService
 */
var restService = {
    /**
     * It uses jquery to make an ajax request,
     * the request retrieves a json which will be passed to the callback function. 
     * If the request succeed a copy of the retrieved data will be sent to a jsonblob.
     * If the request fails.
     * @memberof restService
     * @method getData 
     * @param 
     */
    request: function (config) {
        $.ajax({
            context: this,
            type: config.type,
            url: config.url,
            success: function () {
                config.successCallback();
            },
            error: function () {
                config.failCallback();
            }
        });
    }
}