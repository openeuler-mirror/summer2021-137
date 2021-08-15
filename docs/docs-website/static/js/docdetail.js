$(function($) {
    var isEvaluate = false;
    var urlArr = (window.location.pathname).split("/");
    var isAdd1 = $("#markdown>ul").first().find("li").children().is("ul");
    var isAdd4 = $("#markdown>ul").first().find("li").children().is("p");
    var isAdd2 = $("#markdown>ul").first().find("li").children().is("a");
    var isAdd3 = $("#markdown>.table-of-contents").first().find("ul");
    var  evaluateParams = {
        name: '',
        path: '',
        lang: '',
        version: '',
        stars: 0
    }
    evaluateParams.lang = lang;
    var versionStr = urlArr[3].split("_");
    versionStr = versionStr.join(" ");
    var sourceLast = urlArr[6].replace("html","md");
    var sourceHref = "https://gitee.com/openeuler/docs/tree/stable2-" + urlArr[3] + "/docs/" + lang + "/docs/" + urlArr[5] + "/" + sourceLast;
    $("#source").attr("href",sourceHref);
    if (evaluateParams.lang === "en") {
        $("#version-select>span").text("Version: " + versionStr);
   }
   else if (evaluateParams.lang === "zh") {
        $("#version-select>span").text("版本: " + versionStr); 
   }
   else $("#version-select>span").text("version: " + versionStr);
    $("#h5-menu-top .select-box").find("span").text(versionStr);
    $("#version-select").click(function (e) {
        if($(this).find(".option").css('display') === 'none') {
            $(this).find(".option").show();    
        } else {
            $(this).find(".option").hide();
        }
        
        $(document).one("click", function(){
            $("#version-select .option").hide();
        });
        e.stopPropagation();
    });

    $("#h5-menu .h5-menu").click(function (e) {
        $("#menu-box").show();
        $("#content .docscontainer").css("height","0");
        $("#page").hide();
    });
    $("#h5-menu-top .icon-close").click(function (e) {
        $("#menu-box").hide();
        $("#content .docscontainer").css("height","auto");
        $("#page").show();
    });

    $("#h5-menu-top .h5-search").find(".search-btn").click(function (e) {
        keyword = $("#h5-menu-top .h5-search").find("input").val();
        window.location.href = '/' + lang + '/search.html?keyword=' + keyword;
    });

    $("#h5-menu-top .select-box").click(function (e) {
        if($(this).find(".option").css('display') === 'none') {
            $(this).find(".option").show();    
        } else {
            $(this).find(".option").hide();
        }
        $(document).one("click", function(){
            $(this).find(".option").hide();
        });
        e.stopPropagation();
    });
    if(isAdd1 && isAdd2 && !isAdd4) {
        let linkEle = $("#markdown>ul").first().clone();
        $("#title-evaluate>.title").append(linkEle);
    }else if(isAdd3) {
        $("#title-evaluate>.title").append(isAdd3);
    }
    $("#title-evaluate>.title").find("li").find("a").click(function (e) {
        $("#title-evaluate>.title").find("li").find("a").removeClass("active");
        $(this).addClass("active");
    });
    $("#title-evaluate .evaluate").find("i").click(function (e) {
        if(isEvaluate) {
            return false;
        }else {
            let arr = urlArr[6].split(".");
            let number = $(this).attr("key");
            evaluateParams.name = decodeURI(arr[0]);
            evaluateParams.path = urlArr[4] + '/' + urlArr[5] + '/' + urlArr[6];
            evaluateParams.version = urlArr[3];
            evaluateParams.stars = number;
            $.ajax({
                type: "POST",
                url: '/docs-search/docs/reviews',
                data: JSON.stringify(evaluateParams),
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                headers: {
                    Authorization: 'Basic b3BlbmV1bGVyc2VydmVyOm9wZW5ldWxlcnNlcnZlckAxMjM0'
                },
                success: function (data) {
                    $("#title-evaluate .evaluate").find("i").slice(0,number).addClass("active");
                    isEvaluate = true;
                },
                error: function (data) {
                    console.log(data);
                },
            });
        }
    }).mouseover(function () {
        $(this).find("div").show();
    }).mouseleave(function () {
        $("#title-evaluate .evaluate").find("i").find("div").hide();
    });

    getTreeLink();
    
});

function getTreeLink() {
    setTimeout(function (){
        let openEle = $("#docstreeview .jstree-container-ul").find(".jstree-open");
        for(let i = 0;i < openEle.length;i++) {
            if(i < openEle.length - 1) {
                let span = "<i></i>"
                $(".link-container>.docs-a").append($("#docstreeview .jstree-container-ul").find(".jstree-open").eq(i).find("a").first().clone()).append(span);
            }else {
                let text = $("#docstreeview .jstree-container-ul").find(".jstree-open").eq(i).find("a").first().text();
                let span = "<span>" + text + "</span>"
                $(".link-container>.docs-a").append(span);
            }
        }
    },500);
}
