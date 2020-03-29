/* Accordion */

$(".accordion").append('<div class="plus"><i class="vertical"></i><i></i></div>'); // adds plus icon

$(".accordion").click(function () {
    var id = ($(this).attr("id")).replace("accordion-", "");

    if (!($(this).hasClass("expanded"))) {
        $("." + id).css("display", "block");
        $(this).find(".vertical").css("display", "none");
        $(this).addClass("expanded");
    } else {
        $("." + id).css("display", "none");
        $(this).find(".vertical").css("display", "block");
        $(this).removeClass("expanded");
    }
})


/* Tabs */

$(".tab").click(function () {
    // change the tab bar state
    $(".tab").removeClass("selected");
    $(this).addClass("selected");

    // change the content
    var id = $(this).attr("id");
    $(".tab-content").css("display", "none");
    $("." + id).css("display", "block");

    // move the underline
    var tabs = $(".tab");
    var index = $(this).index();
    var leftPos = 0;

    for (i = 0; i < index; i++) {
        leftPos += ($(tabs[i]).width() + 40)
    }

    $(".underline").animate({
        left: leftPos,
        width: $(this).width()
    }, 150);
})


/* credits box */

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


/* for window resize */
var width = $(window).width(),
    height = $(window).height();

$(window).resize(function () {
    if ($(window).height() == height) {
        if ($(window).width() != width) {
            // Only action on screen width change
            if ($(this).width() > 540) {
                $($(".tab-content")[0]).css("display", "block");
            } else {
                $($(".tab-content")).css("display", "none");
            }
        }
    }
});
