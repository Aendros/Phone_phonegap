(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.button-begin').click(function() {
            $(".hello-app").remove();
            $("main").load('ajax/register_login.html');

        });
        $(document).on('click', '#reg_me', function() {
            $("#registerOlog").remove();
            $("main").load('ajax/registro.html');
        });
        $(document).on('click', '#log_me', function() {
            alert('ok');
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space