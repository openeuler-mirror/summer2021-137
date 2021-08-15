// 展开二级菜单
function getList(val) {
    switch (val) {
        case "menu":
            $("#nav").slideToggle("slow");
            break;
        default:
            //$(".menu_list").slideUp("slow");
            $(val).slideToggle("slow");
            break;
    }
    $('#mask').css({
        "display": "block"
    });
}

// 关闭二级菜单
function hideNav() {
    $("#nav").slideUp("slow");
    $(".menu_list").slideUp("slow");
    $('#mask').css({
        "display": "none"
    });
}

// 二级菜单每项点击后并将其隐藏
$('#nav .list').each(function () {
    $(this).on("click", function () {
        hideNav();
    })
})


// 监听滚动条 当大于 50的时候 关闭二级菜单
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        hideNav();
    }
});
