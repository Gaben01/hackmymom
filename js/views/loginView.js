var loginView = {
    sendLoginInfo : function(event){
        event.preventDefault();
        var requestUrl = urlBuilder.buildUrl("user/login",formReader.getFormData());
        var config = new configRequest(requestUrl, "post")
        restService.request(config);
    }
}