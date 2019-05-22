jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            $("#ieducar").css("background-color", "rgb(74, 22, 196)");
        } else {
            $("#ieducar").css("background-color", "rgba(74, 22, 196, 0.01)");
        }
    });
});

jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() < 200) {
            $("#ieducar").css("background-color", "rgba(74, 22, 196, 0.01)");
        } else {
            $("#ieducar").css("background-color", "rgb(74, 22, 196)");
        }
    });
});


const alertError = () => {
    alert(
        `Olá!
Por Motivos de Força maior, a opção de chat do suporte encontra-se temporariamente indisponível.
Resultando assim no oferecimento do suporte apenas por meio do preenchimento do formulário ou via Hangouts!
\nAtenciosamente Equipe de Suporte i-Educar`)
}

alertError()