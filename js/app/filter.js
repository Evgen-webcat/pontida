$(document).ready(function () {
    $('.filter_button').click(function (event) {
        event.preventDefault();
        var index = $(this).parent().index();
        $(this).toggleClass('filter_button_open');
        $('.filters_sub-menu').eq(index).slideToggle('fast');
    });
});
