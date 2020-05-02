'use strict'




let idOfnextItems = 0;
let nextPoeItemsButton = false;
let numberOfReturnedStashes = -1;

let handleInfiniteLoop = true;



$(document).ready(function () {

    document.getElementById("initialScript").addEventListener("click", executescript, false);
    // buttons
    let buttonGetPoeList = document.getElementById("poeitems");
    let buttonGetNextItems = document.getElementById("nextPoeItems");
    let buttonChaosOrbs = document.getElementById("chaosOrbCount");

    // labels
    let labelOfChaos = document.getElementById("countOfChaosOrbs");

    // disabling buttons
    buttonGetNextItems.disabled = true;

    buttonGetPoeList.addEventListener("click", function () {
        getPoeItemsId().done(function (result) {
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
        }
    }, false);

    labelOfChaos.innerHTML = chaosOrbCOunt;

    chaosOrbCountUpdate.registerListener(function (chaosOrbCOunt) {
        labelOfChaos.innerHTML = chaosOrbCOunt;
    });


    buttonChaosOrbs.addEventListener("click", function () {
        getChaosOrbs(getChaosOrbs, -1); // ajax
    }, false);
});



