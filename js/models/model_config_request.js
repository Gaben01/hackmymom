/**
 * @file: model_config_request.js
 * @author: Gabriele Francia
 * @version: 0.0.0
 * This file contains a contsructor acting as model for requests parameters
 **/
var configRequest = function (url = null, type = null, succesCallback = null, failCallback = null) {
    this.succesCallback = succesCallback;
    this.failCallback = failCallback;
    this.type = type;
    this.url = url;
}