/**
 * @file It's a JavaScript file used in the summit page.
 */

$('.community-day li').click(function () {
    $('.community-day li').removeClass('active');
    $(this).addClass('active');
    if ($('.first-day').hasClass('active')) {
        $('.first-summit').css('display', 'block');
        $('.secend-summit').css('display', 'none');
    } else if ($('.secend-day').hasClass('active')) {
        $('.first-summit').css('display', 'none');
        $('.secend-summit').css('display', 'block');
    }
});