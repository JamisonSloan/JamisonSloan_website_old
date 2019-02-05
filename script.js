$(".tab").click(function () {
    // change the tab bar state
    $(".tab").removeClass("selected");
    $(this).addClass("selected");

    // change the content
    var id = $(this).attr("id");
    $(".tab-content").css("display", "none");
    $("." + id).css("display", "block");
})

// credits box
$("#credits").click(function () {
    if ($('.credit-box').css('display') == 'none') {
        $(".credit-box").css("display", "block");
    } else {
        $(".credit-box").css("display", "none");
    };
});

$("#close").click(function () {
    $(".credit-box").css("display", "none");
})
