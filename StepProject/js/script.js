$(document).ready(function () {

    /* Tabs services block */

    $("#servicesTab .tab-item").click( function () {
        changeTabContent(this);
    });

    function changeTabContent(elem) {
        $(elem).addClass("active").siblings().removeClass("active");

        const currentTabIndex = $(elem).index();

        $("#servicesTab .tabs-content-item").removeClass("active").eq(currentTabIndex).addClass("active");
    }

    /* Gallery filter Our amazing works block */

    $(".gallery-item").hide().slice(0, 12).show();

    $(".load-more-btn").click(function () {
        const imgCategoryItem = $(".filter-item.active").data("filter");
        $(`.gallery-item${imgCategoryItem}:hidden`).slice(0, 12).show();

        if ($(`.gallery-item${imgCategoryItem}:hidden`).length > 0) {
            $(".load-more-btn").show();
        }
        else {
            $(".load-more-btn").hide();
        }
    });

    /* Click event on the filter item */

    $(".filter-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        $(".gallery-item").hide();

        const imgCategoryItem = $(".filter-item.active").data("filter");

        $(`.gallery-item${imgCategoryItem}:hidden`).slice(0, 12).show();

        if ($(`.gallery-item${imgCategoryItem}:hidden`).length > 0) {
            $(".load-more-btn").show();
        }
        else {
            $(".load-more-btn").hide();
        }
    });

    /* Awesome slider What people say about theHAM block */

    $(".comment-item").hide();
    $(".comment-item").eq(0).show();

    $(".preview-img").hide().slice(0, 4).show();

    $(".preview-img").click( function () {
        changeComment(this);
    });

    function changeComment (elem) {
        $(".preview-img:visible").removeClass("active-comment");
        $(elem).addClass("active-comment");

        const currentComment = $(elem).index();
        $(".comment-item").hide();
        $(".comment-item").eq(currentComment - 1).show();
    }

    $(".fa-chevron-left").click(function () {
        let activePreview = $(`.preview-img.active-comment`);

        if (activePreview.index() !== 1 && activePreview.index() > 4) {
            activePreview.removeClass("active-comment").prev().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index() - 2).slideDown();
        }
        else if (activePreview.index() !== 1 && $(`.preview-img.active-comment:visible`).index() <= 4) {
            $(".preview-img").eq(activePreview.index() - 5 ).hide();
            activePreview.removeClass("active-comment").prev().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index() - 2).slideDown();
        }
    });

    $(".fa-chevron-right").click(function () {
        let activePreview = $(`.preview-img.active-comment`);

        if (activePreview.index() !== 7 && $(`.preview-img.active-comment:visible`).index() < 4) {
            activePreview.removeClass("active-comment").next().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index()).slideDown();
        }
        else if (activePreview.index() !== 7 && $(`.preview-img.active-comment:visible`).index() >= 4) {
            $(".preview-img").eq(activePreview.index() - 4 ).hide();
            activePreview.removeClass("active-comment").next().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index()).slideDown();
        }
    });

    /* Best images block */

    $(".best-images .grid-item").hide().slice(0, 12).show();

    var msnry = new Masonry( '.grid', {
        itemSelector: ".grid-item",
        columnWidth: 10,
        gutter: 40
    });

    $(".best-images .load-more-btn").click(function () {
        $(`.grid-item:hidden`).slice(0, 12).show();

        var msnry = new Masonry( '.grid', {
            itemSelector: ".grid-item",
            columnWidth: 10,
            gutter: 40
        });

        if ($(`.grid-item:hidden`).length > 0) {
            $(".load-more-btn").show();
        }
        else {
            $(".load-more-btn").hide();
        }
    });

});