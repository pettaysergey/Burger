$(function() {
    $('#order-form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '/js/mail.php',
            type: 'POST',
            data: formData,
            success: function(data) {

                var popup = data.status ? '#success' : '#error';

                $.fancybox.open({
                    src: popup
                })

            }
        })
    })

    $('.status-error__close, .status-success__close').on('click', function(e){
    e.preventDefault();
    $.fancybox.close();
})
})

