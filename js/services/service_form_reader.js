var formReader = {
    validateForm: function(){
        var mailREGEX= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/gmi;
        var $email = $("input[name='email']").val();
        var $password = $("input[name='password']").val();
        var succes = false;
        if(mailREGEX.test($email)){
            if($password!=""){
                succes = true;
            }
        }
        return succes;
    },
    getFormData: function (formData) {
        return formData.serialize();
    }
}
