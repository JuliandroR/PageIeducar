jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 700) {
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
        `Boas Novas!!!
A opção de chat do suporte está de volta!
Agora é possível usar mais essa forma de contato :-)`)
}

alertError()