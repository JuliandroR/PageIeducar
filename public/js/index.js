var $doc = $('html, body');
$('.item-menu').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
    return false;
});