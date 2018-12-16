/**
 * @file: loginView.js
 * @author: Gabriele Francia
 * @version: 0.0.0
 * This file contains an IIFE to collect all the written code inside a locale scope
 **/

var loginView = {
    sendLoginInfo : function(postData){
        var requestUrl = urlBuilder.buildUrl("user/login",formReader.getFormData(postData));
        var config = new configRequest(requestUrl, "post")
        restService.request(config);
    }
}