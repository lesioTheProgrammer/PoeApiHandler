'use strict'



let nextItemsId = 0;

function getPoeItemsId() {
   return  $.ajax({
        url: "https://api.pathofexile.com/public-stash-tabs",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // cross site allow
        },
        success: function (element) {
            nextItemsId = element.next_change_id; // string
            let arrayOfStashes = element.stashes;
            console.log(nextItemsId + " id one");
            $.each(arrayOfStashes, function (index, item) {
                if (item.accountName != null) {
                $("#tablefriendsname").append("<tr><td>" + item.accountName + "</td></tr>");
                }
            });
            return nextItemsId; // return next id 
        },
        error: function (xhr) {
            console.log("Theres an error")
        }
   });

};


function xd(nextItemsId) {
    debugger;
    let xdd = nextItemsId;
}

//function getNextPoeItems(nextItemsId) {
//    $.ajax({
//        url: "https://api.pathofexile.com/public-stash-tabs",
//        type: 'GET',
//        dataType: 'json',
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded' // cross site allow
//        },
//        data: {
//            // tutaj updejt id co klik
//            id = nextItemsId
//        },

//        success: function (element) {
//            debugger;
//            nextItemsId = element.next_change_id;
//            let arrayOfStashes = element.stashes;
//            console.log(nextItemsId + " id second");

//            $.each(arrayOfStashes, function (index, item) {
//                if (item.accountName != null) {
//                    $("#tablefriendsname").append("<tr><td>" + item.accountName + "</td></tr>");
//                }
//            });
//        },
//        error: function (xhr) {
//        }
//    });
//}



