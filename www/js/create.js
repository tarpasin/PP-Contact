$(document).on("ready",function(){
    $(".btnCreate").on("click", function(){
        $.ajax({
            type: "POST",
            url: "http://www.nqmdev.com:8080/ppcontact/ppcontact.asmx/CreateGroup",
            data: {
                groupName: "3",
                userID: "123",
            }, // the data in JSON format.  Note it is *not* a JSON object, is is a literal string in JSON format
            dataType: "json", // the data type we want back.  The data will come  back in JSON format
            success: function(data) {
                alert("SUCCESS");
            },
            error: function(data) {
                alert(JSON.stringify(data));
            }
        });
    });
});



