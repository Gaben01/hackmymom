var loginView = {
    sendLoginInfo : function(postData){
        console.log("ciao");
        var requestUrl = urlBuilder.buildUrl("user/login",formReader.getFormData(postData));
        var config = new configRequest(requestUrl, "post")
        restService.request(config);
    }
}