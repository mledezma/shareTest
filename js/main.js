$(window).on('load', function () {
    var metas = $('meta');
    var url = encodeURIComponent(window.location.href);
    var description = '';
    metas.each(function() {
        if ($(this).attr('property') === 'og:description') {
            description = $(this).attr('content');
        }
    });
    $('#fbShare').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+url);
    $('#tweetShare').attr('href', 'https://twitter.com/share?text='+url);
});