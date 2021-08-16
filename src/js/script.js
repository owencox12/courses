$(document).ready(function(){
    $(".header__burger").on("click", function(){
        $(".header__burger_list").toggleClass("header__burger_list_active")
        $(".header__burger").toggleClass("header__burger_active")
    })
});