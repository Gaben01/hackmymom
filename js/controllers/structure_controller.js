/**
 * @file: structure_controller.js
 * @author: Gabriele Francia
 * @version: 0.0.0

 **/
var structureController = {
    giveInfoSection : function(){
        return $("<div class='__info__container__section'></div>");
    },
    giveOneBattery : function(){
        return $("<label class='container'></label>").append(
            $("<input type='radio' name='radio'>"),
            $("<span class='checkmark'></span>")
        );
    },
    giveInfoHeader : function(){
        return $("<div class='__info__header'></div>").append(
            $("<i class='fas fa-arrow-circle-down'></i>"));
    },
    giveBattery : function(){
        var battery = [];
        for (var i = 0; i < 5; i++){
            battery.push(this.giveOneBattery());
        }
        return battery;
    }
}