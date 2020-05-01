'use strict'




let idOfnextItems;
$(document).ready(function () {

    document.getElementById("initialScript").addEventListener("click", executescript, false);

    document.getElementById("poeitems").addEventListener("click", function () {
        getPoeItemsId().done(function (result){
            idOfnextItems = result.next_change_id;
            console.log("all good now" + idOfnextItems);
        }).fail(function () {
            console.log("An error occured sometihng is rip")
        })
    }, false);


    document.getElementById("nextPoeItems").addEventListener("click", function () {
        debugger;
        xd(idOfnextItems);
    }, false);
  


});



