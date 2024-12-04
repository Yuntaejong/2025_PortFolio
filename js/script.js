$(function(){
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //options here
            autoScrolling:true,
            scrollHorizontally: true
        });
    
        // Example of how to use fullpage.js methods
        $.fn.fullpage.setAllowScrolling(false);
    });
});