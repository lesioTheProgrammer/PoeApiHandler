'use strict'


//If the number of stashes returned is zero, you get back the same change ID you passed
//    in (a hint to keep trying until the endpoint has some tabs for you).



let nextItemsId = 0;
let chaosOrbCOunt = 0;
let stashTabCount = -1;



function getPoeItemsId(idOfnextItems) {
   return  $.ajax({
        url: "https://api.pathofexile.com/public-stash-tabs",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // cross site allow
       },
       data: {
           id: idOfnextItems
       },
       
       success: function (element) {
           $("#tablefriendsname tr").remove(); // swap to detach() when reusing the previous data
            nextItemsId = element.next_change_id; // string
            let arrayOfStashes = element.stashes;
            $.each(arrayOfStashes, function (index, item) {
                if (item.accountName != null) {
                $("#tablefriendsname").append("<tr><td>" + item.accountName + "</td></tr>");
                }
            });
        },
        error: function (xhr) {
            console.log("Theres an error")
        }
   });

};


function getChaosOrbs(idOfnextItems, stashTabCount) {
    if (stashTabCount == 0)
        return;

     $.ajax({
        url: "https://api.pathofexile.com/public-stash-tabs",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // cross site allow
        },
        data: {
            id: idOfnextItems
         },
         complete: function () {
             setTimeout(getChaosOrbs, 1000, nextItemsId, stashTabCount)
         },
         async: true,
         success: function (element) {
            nextItemsId = element.next_change_id; // string
            let arrayOfStashes = element.stashes;
            let stashesLength = arrayOfStashes.length;

            stashTabCount = stashesLength;
            if (arrayOfStashes.length != 0) {
                $.each(arrayOfStashes, function (index, stash) {
                    let stashItems = stash.items;
                    if (stashItems.length != 0) {
                        $.each(stashItems, function (index, singleItem) {
                            if (singleItem.extended.category == "currency" && 
                                singleItem.extended.baseType == "Chaos Orb") {
                                let itemStackSize = singleItem.stackSize;
                                chaosOrbCOunt += itemStackSize;
                                chaosOrbCountUpdate.a = chaosOrbCOunt;
                            }
                        });  
                    }
                });
             }
        },
         error: function (xhr) {
            console.log("Theres an error")
         },
         
    });

};





let chaosOrbCountUpdate = {
    aInternal: 10,
    aListener: function (val) { },
    set a(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get a() {
        return this.aInternal;
    },
    registerListener: function (listener) {
        this.aListener = listener;
    }
}

