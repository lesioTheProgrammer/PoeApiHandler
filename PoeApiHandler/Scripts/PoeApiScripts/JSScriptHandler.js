'use strict'




let idOfnextItems;
let nextPoeItemsButton = false;



$(document).ready(function () {

    document.getElementById("initialScript").addEventListener("click", executescript, false);

    let buttonGetPoeList = document.getElementById("poeitems");
    let buttonGetNextItems = document.getElementById("nextPoeItems");

    buttonGetNextItems.disabled = true;

    buttonGetPoeList.addEventListener("click", function () {
        getPoeItemsId().done(function (result){
            idOfnextItems = result.next_change_id;
            // buttons
            nextPoeItemsButton = true;
            buttonGetNextItems.disabled = false;
            buttonGetPoeList.disabled = true;
            // buttons end
        }).fail(function () {
            console.log("An error occured sometihng is wrong")
        })
    }, false);


    buttonGetNextItems.addEventListener("click", function () {
        if (nextPoeItemsButton) {
            getPoeItemsId(idOfnextItems).done(function (result) {
                idOfnextItems = result.next_change_id;
            }).fail(function () {
                console.log("An error occured sometihng is wrong")
            })
        }}, false);
    
});



