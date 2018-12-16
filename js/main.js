/**
 * @file: main.js
 * @author: Gabriele Francia
 * @version: 0.0.0
 * This file contains an IIFE to collect all the written code inside a locale scope
 **/

(function () {
    $(document).ready(function () {
        $(".login__container__form").on("submit",loginController.setUpLogin);
        $(".__info__header").click(function(){
            $(this).parent().children(".__info__container").slideToggle("slow");
        })
    });
})();