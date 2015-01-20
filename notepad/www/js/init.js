(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.button-begin').click(function(){
    	$(".hello-app").remove();
    	$("main").load("register.html");
    }
    	);

  }); // end of document ready
})(jQuery); // end of jQuery name space