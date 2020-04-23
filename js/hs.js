(function($) {
    $('#article').find('.content-article').each(function() {
        $(this).find('img').each(function() {
            if ($(this).parent().prop('tagName') !== 'A' && this.className !== "buy") {
                $(this).wrap(`<a  class="highslide-image" ></a>`)
                $(this).parent().wrap(`<p class="gal-image"></p>`)
                $(this).parent().parent('.gal-image').wrap(`<div class="gal-image-container"></div>`)
                $(this).attr('width', 650);
                // $(this).attr('title', '点击放大');
                $(this).attr('alt', '');
            }
        })
    })
})($)