$(window).on('load', function () {
    var metas = $('meta');
    var url = encodeURIComponent(window.location.href);
    var description = '';
    metas.each(function() {
        if ($(this).attr('property') === 'og:description') {
            description = $(this).attr('content');
        }
    });
    $('#facebookShare').click(function() {
        $(this).attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
    })
    //$('#fbShare').attr('href', 'https://www.facebook.com/sharer/sharer.php?u='+url);
    $('#tweetShare').click(function () {
        $(this).attr('href', 'https://twitter.com/share?text=' + url);
    })
});