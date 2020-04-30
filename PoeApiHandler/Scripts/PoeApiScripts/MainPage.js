'use strict'





function getPoeItemsId() {
    $.ajax({
        url: "https://api.pathofexile.com/public-stash-tabs",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' // cross site allow
        },
        
        success: function (element) {
            debugger;
            var yourTableHTML = "";
            let arrayOfStashes = element.stashes;

            $.each(arrayOfStashes, function (index, item) {
                if (item.accountName != null) {
                $("#tablefriendsname").append("<tr><td>" + item.accountName + "</td></tr>");
                }
            });
        },
        error: function (xhr) {
        }
    });
}





