$(document).ready(function() {
    $(".tabs-title").click(function () {
        activateTab (this);
    });

    function activateTab(elem) {
        $(elem).addClass("active").siblings().removeClass("active");

        const currentTabIndex = $(elem).index();

        $(".tabs-content li").removeClass("active").eq(currentTabIndex).addClass("active");
    }
});