var loginController = {
    setUpLogin: function(event){
        event.preventDefault();
        var validation = formReader.validateForm($(this));
        if(validation){
            loginView.sendLoginInfo($(this));
        }else{
            $(this).after($("<p class='error'>").text("email o password sbagliata"))
        }
    }
}