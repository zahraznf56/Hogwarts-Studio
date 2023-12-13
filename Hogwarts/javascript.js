var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
var tombolRegist = $(".daftar")

function klikMenu () {
    tombolMenu.click (function () {
        menu.toggle ();
    });
    menu.click (function () {
        menu.toggle ();
    });
} 

//check lebar
$(window).resize(function(){
    var width = $(window).width();
    if(width > 989){
        menu.css("display","block");
        //display:block
    }else{
        menu.css("display","none");
    }
    klikMenu();
});

//efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll (function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

//efek login
var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register() {
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login () {
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

//login-form
var modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}













