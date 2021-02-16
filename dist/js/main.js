$(document).ready(function () {
    $(".header-show").click(function () {
        $(".header-special").slideToggle();
    });
    $(".header-special__size a").click(function (e) {
        e.preventDefault();
        $("body").removeClass("normal large big");
        $("body").addClass($(this).data("class"));
        $(this).siblings("a").removeClass("active");
        $(this).addClass("active");
    });

    $(".header-special__color a").click(function (e) {
        e.preventDefault();
        $("body").removeClass("light dark");
        $("body").addClass($(this).data("class"));
        $(this).siblings("a").removeClass("active");
        $(this).addClass("active");
    });
});
