$(document).ready(function () {
    $('li.hoverwork').click(function () {
        $('html, body').animate({
            scrollTop: $("div.myworkanchor").offset().top
        }, 1000)
    })
});