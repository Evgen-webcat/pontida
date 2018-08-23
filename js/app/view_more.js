$(document).ready(function () {
    $('#view_more_button').click(function (event) {
        event.preventDefault();
        $(this).css('display', 'none');
        $('.spin').css('display', 'block');
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page': current_page
        };
        $.ajax({
            url: ajaxurl,
            data: data,
            type: 'POST',
            success: function (data) {
                if (data) {
                    $('.spin').css('display', 'none');
                    $('#view_more_button').css('display', 'block'); // вставляем новые посты
                    $('.button-conteiner').append(data);
                    current_page++; // увеличиваем номер страницы на единицу
                    if (current_page == max_pages) $("#view_more_button").remove(); // если последняя страница, удаляем кнопку
                } else {
                    $('#view_more_button').remove(); // если мы дошли до последней страницы постов, скроем кнопку
                }
            }
        });
    });
});
