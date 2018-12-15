/**
 * @file:service_url_builder.js
 * @author: Gabriele Francia
 * @version: 0.0.0
 * This file contains a contsructor acting as model for requests parameters
 **/
/**
 * @namespace urlBuilder
 */
var urlBuilder = {
    baseUrl: "137.117.136.48",
    addKeys: function (keys) {
        return keys;
    },
    addEndPoint: function (endPoint) {
        return "/" + endPoint + "/";
    },
    addQuery: function (query) {
        return "?" + query;
    },
    addExtra: function (extra) {
        return extra;
    },
    buildUrl: function (endPoint = "", query = "", extra = "", keys = "") {
        return this.baseUrl + 
        this.addKeys(keys) + 
        this.addEndPoint(endPoint) + 
        this.addQuery(query) + 
        this.addExtra(extra);
    }
}