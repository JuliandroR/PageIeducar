jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 705) {
       $("#ieducar").css("color", "rgb(74, 22, 196)");
      } else {
        $("#ieducar").css("color", "aliceblue");
      }
    });
  });

  $("#doc").click(function(){
    console.log("entro");
    
    jQuery.ajax({
      url: "https://api.brunocasas.me",
      type: "post",
      crossDomain: false,
      data: {},
      success: function(response){
        console.log("foi");
        
        let url = "https://docs.google.com/document/d/1WUMRnCLqHm8svP9RJep-Vaqpf-hM1lEcOVFjgiEdYWc/edit?usp=sharing"

        window.location.href = url;
        window.location.assign(url);
      }
      })
  })

  



const alertError = () => {
  alert(
    `Olá!
Por Motivos de Força maior, a opção de chat do suporte encontra-se temporariamente indisponível.
Resultando assim no oferecimento do suporte apenas por meio do preenchimento do formulário ou via Hangouts!
\nAtenciosamente Equipe de Suporte i-Educar`)
}

alertError()