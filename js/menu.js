$(document).ready(function () {

    menuShow();
    construct();
});

var construct = function () {
    $('#menu').html(contentMenu);
    $('.navbar-brand').text("</ ArthurM >");
    $('.navbar').hide();

    // Deslize Scroll
    $(".nav li a, .navbar-header a").click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 'slow');
    });
};

var menuShow = function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.navbar').fadeIn(200);
        } else {
            $('.navbar').hide();
        }
    });
}

var valor;

$('[name=testt]').keyup(function () {
    if ($(this).val().length <= 250 && $(this).val().length > 0) {
        valor = $(this).val();
        $('.test h4').show().text("restantes: " + (250 - $(this).val().length).toString() + " caracteres");
    } else if ($(this).val().length > 250){
        $(this).val(valor.substr(0, 250));
    } else {
        $('.test h4').hide();
    }
});

var contentMenu = '<nav class="navbar navbar-default navbar-fixed-top">'
                    + '<div class="container">'
                        + '<!-- Brand and toggle get grouped for better mobile display -->'
                        + '<div class="navbar-header">'
                            + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'
                                + '<span class="sr-only">Toggle navigation</span>'
                                + '<span class="icon-bar"></span>'
                                + '<span class="icon-bar"></span>'
                                + '<span class="icon-bar"></span>'
                            + '</button>'
                            + '<a class="navbar-brand" href="#about"></a>'
                        + '</div>'
                        + '<!-- Collect the nav links, forms, and other content for toggling -->'
                        + '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'
                            + '<ul class="nav navbar-nav">'
                                + '<li>'
                                    + '<a href="#about">About <span class="sr-only">(current)</span></a>'
                                + '</li>'
                                + '<li>'
                                    + '<a href="#plans">Services</a>'
                                + '</li>'
                                + '<li>'
                                    + '<a href="#tecnologies">Technologies</a>'
                                + '</li>'
                                + '<li>'
                                    + '<a href="#contact">Contact</a>'
                                + '</li>'
                                + '<li>'
                                    + '<a href="#rodape">Social Networks</a>'
                                + '</li>'
                            + '</ul>'
                        + '</div>'
                        + '<!-- /.navbar-collapse -->'
                    + '</div>'
                    + '<!-- /.container-fluid -->'
                + '</nav>';