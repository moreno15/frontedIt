$(document).ready(main);

var contador = 1;
var lastScrollTop = 0;

function main() {

    paginacion();
    // $('#selecteditable').editableSelect({ effects: 'slide' });
    fncTagInput();
    /*    var alto = window.innerHeight - 100;
        $(".wrapper .content-wrapper ").css("height", alto + "px !important");
        $(".wrapper .content-wrapper ").css("overflow-y", "scroll !important");
     */


    //scroll


}
// en detalle curso

$(window).scroll(function(event) {
    var st = $(this).scrollTop();

    if (st > 400) {

        if (screen.width > 1134) {
            $(".content-learning .info-price iframe ").css("position", "fixed");
            $(".content-learning .info-price iframe ").css("top", "38%");
            $(".content-learning .info-price iframe ").css("left", "70%");
            $(".content-learning .info-price iframe ").css("width", "350px");
            $(".content-learning .info-price iframe ").css("height", "500px");
        }

        if (screen.width < 1134) {
            $(".content-learning .info-price iframe  ").css("position", "fixed");
            $(".content-learning .info-price iframe ").css("top", "38%");
            $(".content-learning .info-price iframe ").css("left", "60%");
            $(".content-learning .info-price iframe ").css("width", "350px");
            $(".content-learning .info-price iframe ").css("height", "500px");
        }

        if (screen.width < 862) {
            $(".content-learning  .info-price iframe  ").css("position", "fixed");
            $(".content-learning .info-price iframe ").css("top", "38%");
            $(".content-learning .info-price iframe ").css("left", "50%");
            $(".content-learning .info-price iframe ").css("width", "350px");
            $(".content-learning .info-price iframe ").css("height", "500px");
        }

        if (screen.width < 768) {
            $(".content-learning .info-price iframe  ").css("position", "absolute");
            $(".content-learning .info-price iframe ").css("top", "0");
            $(".content-learning .info-price iframe ").css("left", "0");
            $(".content-learning .info-price iframe ").css("width", "100%");
            $(".content-learning .info-price iframe ").css("height", "100%");

        }

        $(".content-learning .info-price iframe ").css("-webkit-transition", " width .5s, height .5s "); //width .5s, height .5s
        // $(".content-learning .info-price iframe ").css("z-index", "7000");


    } else {
        if (st < 400) {

            $(".content-learning .info-price iframe ").css("position", "absolute");
            $(".content-learning .info-price iframe ").css("top", "0");
            $(".content-learning .info-price iframe ").css("left", "0");
            $(".content-learning .info-price iframe ").css("width", "100%");
            $(".content-learning .info-price iframe ").css("height", "100%");
            $(".content-learning .info-price iframe ").css("z-index", "0");
        }




    }
    lastScrollTop = st;
});

function sumenu(submenu) {
    $('.' + submenu + ' .children').slideToggle();
}

function menuList(event) {

    if (contador == 1) {
        $('nav').animate({
            left: '0'
        });
        contador = 0;
    } else {
        contador = 1;
        $('nav').animate({
            left: '-100%'
        });
    }
}



/*=============================================
Función de paginación curso
=============================================*/

function paginacion() {

    var target = $('.pagina');

    if (target.length > 0) {

        target.each(function() {

            var el = $(this), // capturamos recorrido
                totalPages = el.data("total-pages"),
                currentPage = el.data("current-page"),
                urlPage = el.data("url-page");

            el.twbsPagination({ // la accion de paginacion de plugin

                totalPages: totalPages,
                startPage: currentPage,
                visiblePages: 3, // nº de pagina ver
                first: '<i class="fa fa-angle-double-left"></i>',
                last: '<i class="fa fa-angle-double-right"></i>',
                prev: '<i class="fa fa-angle-left"></i>',
                next: '<i class="fa fa-angle-right"></i>'

            }).on("page", function(evt, page) {
                console.log(page);
                if (urlPage.includes("?", 1)) {

                    if (urlPage.search('pg') < 0) {
                        urlPage = urlPage + "&pg=" + page;
                    } else {
                        urlPage = urlPage.replace("pg=" + currentPage, "pg=" + page);;
                    }

                    //urlPage = urlPage.replace("?pg=" + currentPage, "?pg=" + page);
                    //console.log(urlPage);
                    window.location = urlPage + "#showcase";

                } else {
                    window.location = urlPage + "?pg=" + page + "#showcase";
                }


            })

        })

    }


}





/*=============================================
Función para validar formulario
=============================================*/

function validateJS(event, type) {

    /*=============================================
    Validamos texto
    =============================================*/

    if (type == "text") {

        var pattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("No use números ni caracteres especiales");

            event.target.value = "";

            return;

        }

    }

    /*=============================================
    Validamos email
    =============================================*/

    if (type == "email") {

        var pattern = /^[^0-9][.a-zA-Z0-9_]+([.][.a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("El correo electrónico está mal escrito");

            event.target.value = "";

            return;

        }

    }

    /*=============================================
    Validamos contraseña
    =============================================*/

    if (type == "password") {

        var pattern = /^[#\\=\\$\\;\\*\\_\\?\\¿\\!\\¡\\:\\.\\,\\0-9a-zA-Z]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("La contraseña está mal escrita");

            event.target.value = "";

            return;

        }

    }


    /*=============================================
    Validamos teléfono
    =============================================*/

    if (type == "phone") {

        var pattern = /^[-\\(\\)\\0-9 ]{1,}$/;

        if (!pattern.test(event.target.value)) {
            $(event.target).parent().addClass("was-validated");
            $(event.target).parent().children(".invalid-feedback").html("El telefono está mal escrito");

            event.target.value = "";

            return;

        }

    }
    /*=============================================
    Validamos ruc
    =============================================*/

    if (type == "ruc") {

        var pattern = /^[-\\(\\)\\0-9 ]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("El ruc está mal escrito");

            event.target.value = "";

            return;

        }

    }

    /*=============================================
    Validamos dni
    =============================================*/

    if (type == "dni") {

        var pattern = /^[-\\(\\)\\0-9 ]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("El número dni está mal escrito");

            event.target.value = "";

            return;

        }

    }

    /*=============================================
    Validamos number
    =============================================*/

    if (type == "numbers") {

        var pattern = /^[.-\\(\\)\\0-9]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("El numero esta mal escrito");

            event.target.value = "";

            return;

        }

    }

    /*=============================================
    Validamos párrafos
    =============================================*/

    if (type == "paragraphs") {

        var pattern = /^[-\\(\\)\\=\\%\\&\\$\\;\\_\\*\\"\\#\\?\\¿\\!\\¡\\:\\,\\.\\0-9a-zA-ZñÑáéíóúÁÉÍÓÚ ]{1,}$/;

        if (!pattern.test(event.target.value)) {

            $(event.target).parent().addClass("was-validated");

            $(event.target).parent().children(".invalid-feedback").html("La entrada está mal escrita");

            event.target.value = "";

            return;

        }

    }

}




/*=============================================
Tags Input
=============================================*/

function fncTagInput() {

    var target = $('.tags-input');

    if (target.length > 0) {

        $(target).tagsinput();
    }

}



function validateImageJS(event, input) {

    var image = event.target.files[0];

    /*=============================================
    Validamos el formato
    =============================================*/

    if (image["type"] !== "image/jpeg" && image["type"] !== "image/png") {

        fncSweetAlert("error", "The image must be in JPG or PNG format", null)

        return;
    }

    /*=============================================
    Validamos el tamaño
    =============================================*/
    else if (image["size"] > 2000000) {

        fncSweetAlert("error", "Image must not weigh more than 2MB", null)

        return;

    }

    /*=============================================
    Mostramos la imagen temporal
    =============================================*/
    else {

        var data = new FileReader();
        data.readAsDataURL(image);

        $(data).on("load", function(event) {

            var path = event.target.result;

            $("." + input).attr("src", path);

            document
                .getElementById(input)
                .innerHTML = image.name;

        });


    }

}

function validateDataRepeat(event, type) {




    if (type == "email") {

        var table = "users";
        var linkTo = "email_usuario";
        var select = "email_usuario,metodo_usuario";


    }

    if (type == "categoria") {

        var table = "categoria";
        var linkTo = "nombre_categoria";
        var select = "nombre_categoria";

    }
    if (type == "subcategoria") {
        var table = "subcategoria";
        var linkTo = "nombre_subcategoria";
        var select = "nombre_subcategoria";

    }

    if (type == "curso") {

        var table = "curso";
        var linkTo = "nombre_curso";
        var select = "nombre_curso";

    }

    var settings = {
        "url": "http://192.168.100.5:4500/api/" + table + "?equalTo=" + event.target.value + "&linkTo=" + linkTo + "&select=" + select,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).fail(function(response) {

        if (response.responseJSON.status == 404) {

            if (type == "email") {

                validateJS(event, "email");

            }
            if (type == "categoria") {

                validateJS(event, "text&number");
                createUrl(event, "url_categoria");


            }
            if (type == "subcategoria") {

                validateJS(event, "text&number");
                createUrl(event, "url_subcategoria");


            }

            if (type == "curso") {

                validateJS(event, "text&number");
                createUrl(event, "url_curso");

            }
        }

    })

    /*=============================================
    Cuando la petición de AJAX devuelve coincidencia
    =============================================*/


    $.ajax(settings).done(function(response) {


        if (response.status == 200) {

            $(event.target).parent().addClass("was-validated");

            if (type == "email") {
                $(event.target).parent().children(".invalid-feedback").html("El correo ya se encuentra registrado " + response.results[0].method_user);
            }

            if (type == "empresa" || type == "categoria" || type == "subcategoria" || type == "categoria") {
                $(event.target).parent().children(".invalid-feedback").html("La " + type + " ya se encuentra registrado");
            }
            if (type == "ruc") {
                $(event.target).parent().children(".invalid-feedback").html("El " + type + " ya se encuentra registrado");
            }

            event.target.value = "";

            return;

        }

    });

}

function createUrl(event, input) {

    var value = event.target.value;

    value = value.toLowerCase();
    value = value.replace(/[ ]/g, "-");
    value = value.replace(/[á]/g, "a");
    value = value.replace(/[é]/g, "e");
    value = value.replace(/[í]/g, "i");
    value = value.replace(/[ó]/g, "o");
    value = value.replace(/[ú]/g, "u");
    value = value.replace(/[ñ]/g, "n");

    $('[name="' + input + '"]').val(value);

}

function changeOffer(type) {

    if (type.target.value == "Discount") {

        $(".tipo_oferta_cursotext").html("Porcentaje %:");

    }

    if (type.target.value == "Fixed") {

        $(".tipo_oferta_cursotext").html("Precio S/:");

    }

}