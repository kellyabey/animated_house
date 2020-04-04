$(document).ready(function () {
    $("button").click(function () {
        $(".window")
            .animate({
                width: "40px"
            })
            .animate({
                height: "40px"
            })
            .animate({
                marginRight: "600px"
            })
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("#door")
            .animate({
                width: "toggle"
            });
    });
});

$(document).ready(function () {
    $("button").click(function () {
        $("#chim")
            .animate({
                height: "toggle"
            });
    });
});
