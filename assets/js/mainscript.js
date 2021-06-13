/* Owl Carousel call */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        stagePadding: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    /* Collapse Navbar */
    
    $('.menu-bar_icon').click(function(){
        $('.main-menu').toggleClass('active');
    });

    /* Zoom image edit*/

    $(".thumb_photo").click(function(e) {
        e.preventDefault();
        let dataImg = $(this).find("img").attr("src");
        let mainImg = $(".main_photo img");
        mainImg.attr("src", dataImg);
        mainImg.attr("data-zoom-image", dataImg);
    });
    
    /* Dropdown product items */
    
    $(".categorylist_title").click(function(){
        let taggleState = $(".category_list").css("display");
        $(".category_list").slideToggle(500, () => {
            if (taggleState == "block") {
                $(this).find("i").attr("class", "fas fa-plus");
            } else {
                $(this).find("i").attr("class", "fas fa-minus")
            }
        });               
    });
    
    /* AOS call */
    AOS.init();
});