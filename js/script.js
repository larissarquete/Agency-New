//JQuery fará com que ao clicar nas 3 barrinhas de menu mobile,
// seja aberto o mesmo

//MENU
$(document).ready(function() {        

    $('#nav-toggle').click(function(e) {
        e.preventDefault();             
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
                                        
    });

    //CARROUSEL PRINCIPAL
    $('#carousel-principal').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        nav: true,
        navSpeed: 200,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 700,
        autoplay: true,
        autoplaySpeed: 500,
        responsiveRefreshRate: 10
    });

    //CAROUSEL TESTEMUNHAS
    $('#carousel-testemunhas').owlCarousel({
        items: 1,
        loop: true,
        margin: 40,
        nav: false,
        navSpeed: 700,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 700,
        autoplay: true,
        autoplaySpeed: 700,
        responsiveRefreshRate: 10,
        responsive:{
            960:{
                items: 2,
            },
            1280:{
                items: 2,
                nav: true
            }
        }
    });

    // PORTFOLIO
    $('.portfolio-nav li a').click(function(e){
        //ATIVAÇÃO DOS DAS TAGS (NOMES) 
        e.preventDefault(); 
        $('.portfolio-nav li a').removeClass('active'); 
        $(this).addClass('active');

        //ATIVAÇÃO DAS IMAGENS - CLICK NAS TAGS
        $('.portfolio').removeClass('visible'); 
        if(this.id == "all"){
            $('.portfolio').addClass('visible');
        } else{
            $('.portfolio.' + this.id).addClass('visible'); 
        }
    });

     //VARIAVEIS - SCROLL
     var nav = $('.header-nav'), 
     navHeight = nav.outerHeight(),
     sections = $('.section');

    // SCROLL
    $(window).on('scroll', function(){
         var sTop = $(this).scrollTop();

        // fixando header -------
        if(sTop > navHeight){
            $('.header').addClass('fixed');
        } else{
            $('.header').removeClass('fixed');
        }

        //marcando menu scroll --------
        if(sTop == 0){
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');
     
        } else{
            sections.each(function(){
                var top = $(this).offset().top - navHeight;
 
                if(sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#'  + $(this).attr('id') +  '"]').addClass('active');
                }
            });
         }
     
     
    });

    //NAVEGAÇÃO
    nav.find('a').on('click', function(e){
        e.preventDefault();

        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');

        var target = $(this).attr('href');
     
        if(target  == "#home"){
            $('html, body').animate({scrollTop: 0}, 500);
        } else{
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 500);
        }
     });

    //BACK-TOP  
    $('.back-top').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
             scrollTop: 0
        }, 500);
    });

});




/* **************COMENTÁRIOS SOBRE O CÓDIGO **************
LINHA 5: iniciando o JQuery

lINHA 7: captura o click 3 barras menu mobile

LINHA 8: previne o evento de redirecionamento ao efetuar o clique

LINHA 9: toggleClass inclui classe active e verifica novamente(clicar 1x e clicar de novo, há uma verif.) se tem a classe., se tiver ela tira.

LINHA 16: pegando toda a altura (height) da  barra de navegação

LINHA 18: quando acontecer o scroll da página, será executado o que tiver na função

LINHA 34: entrou dentro da "nav" pesquisou o "a" e remove a classe, isso tudo SE a variavel "sTop" for maior ou igual a variável top

LINHA 55: colcoando uma animação pra quando clicar em home subir devagar até ela

LINHA 57: colcoando uma animação pra quando clicar em qualquer outra seção

LINHA 58: remove, com o clique, a classe active de todos os itens que estiverem com ela na parte das tags do portfolio

LINHA 59: adiciona classe active, novamente, dessa vez só quando houver o clique

LINHA 63: condição criada para que ao clicar na tag "todos" novamente, apareça todas imagens

LINHA 64: adicionando novamente a classe a todos os blocos

*/