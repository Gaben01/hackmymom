/**
 * @file: main.js
 * @author: Gabriele Francia
 * @version: 3.0
 * This file contains an IIFE to collect all the written code inside a locale scope
 **/

(function () {
    $(document).ready(function () {
        $(".login__container__form").on("submit",loginController.setUpLogin);
    });
})();