$(document).ready(function () {
    $("#earthquake").click(function () {
        $("#img")
            .animate({
                marginLeft: "600px"
            }, "fast")
            .animate({
                marginRight: "500px"
            }, "fast")
            .animate({
                marginLeft: "600px"
            }, "fast")
            .animate({
                marginRight: "500px"
            }, "fast")
            .animate({
                marginLeft: "550px"
            }, "fast");
    });
});

$(document).ready(function () {
    $("#small").click(function () {
        $("#img").animate({
            top: "-=50px",
            left: "-=50px",
            width: "-=50px",
            height: "-=50px"
        });
    });
});
