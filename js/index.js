$("li.hoverwork").click(function() {
    $('html, body').animate({
        scrollTop: $("div.myworkanchor").offset().top
    }, 2000);
});