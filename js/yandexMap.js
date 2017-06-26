// Яндекс карта
 ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map("map", {
                center: [48.473810, 135.059021],
                zoom: 13,
            }); 
            myMap.behaviors.disable('scrollZoom');
            myPlacemark = new ymaps.Placemark([48.474067, 135.065544], {
            hintContent: 'Хлебомясь',
            balloonContent: 'ул.Муравьева-Амурского, д.5'
             }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [60, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

              myPlacemark1 = new ymaps.Placemark([48.478565, 135.052718], {
              hintContent: 'Хлебомясь',
                balloonContent: 'ул.Комсомольская, д.122'
                 }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [60, 60],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
                 });

             
            myMap.geoObjects
        .add(myPlacemark);
        }