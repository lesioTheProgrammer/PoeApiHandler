'use strict'



let nextItemsId = 0;

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
           $('tablefriendsname > tbody').empty();
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







