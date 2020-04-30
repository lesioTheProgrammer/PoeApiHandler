'use strict'





function getPoeItemsId() {
    $.ajax({
        url: "https://api.pathofexile.com/public-stash-tabs",
        type: 'GET',
        dataType: 'json',
        
        success: function (element) {
            debugger;
            console.log(element.id)
        },
        error: function (xhr) {
            debugger;
        }
    });
}





