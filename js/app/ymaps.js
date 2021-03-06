$(document).ready(function () {
    var mapBlock = document.getElementById('map');

    if (mapBlock) {
        ymaps.ready(init);
        var map,
            Placemark;

        function init() {
            map = new ymaps.Map("map", {
                center: [53.92507307064044, 27.60454599999995],
                zoom: 17
            });

            map.behaviors.disable('scrollZoom');
            if ($(this).width() < 1200) {
                map.behaviors.disable('drag');
            }

            Placemark = new ymaps.Placemark([53.92507307064044, 27.60454599999995], {
                hintContent: 'Pontida',
                balloonContent: 'Pontida'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'wp-content/themes/pontida/img/placemark.png',
                iconImageSize: [18, 24],
                iconImageOffset: [-9, -24]
            });

            map.geoObjects.add(Placemark);
        }
    }
});
