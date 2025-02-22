/* INÍCIO AJUSTES SLICK CARROSSEL PRINCIPAL */

$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        prevArrow: `<span class="material-symbols-outlined slick-arrow prev">arrow_back_ios</span>`,
        nextArrow: `<span class="material-symbols-outlined slick-arrow next">arrow_forward_ios</span>`,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

/* FIM AJUSTES SLICK CARROSSEL PRINCIPAL */

/* INÍCIO AJUSTES MUDANÇA DE COR DO MENU NO SCROLL */

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#top-bar').addClass('scrolled');
        } else {
            $('#top-bar').removeClass('scrolled');
        }
    });
});

/* FIM AJUSTES MUDANÇA DE COR DO MENU NO SCROLL */

/* INÍCIO ADICIONANDO CLASSE ATIVO NO MENU PARA A SESSÃO ATIVA QUANDO FAZ O SCROLL DA PÁGINA*/

// script.js
window.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos relevantes (header, sections e footer)
    const sections = document.querySelectorAll('header, section, footer');
    const links = document.querySelectorAll('.menu a'); // Seleciona todos os links do menu

    // Função para verificar qual seção está visível na tela
    function marcarAtivo() {
        let currentSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Verifica se qualquer parte da seção está visível na janela
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                currentSection = section.id;
            }
        });

        // Marca o link ativo com base na seção visível
        links.forEach(link => {
            link.classList.remove('ativo'); // Remove a classe 'ativo' de todos os links
            if (link.hash === `#${currentSection}`) {
                link.classList.add('ativo'); // Adiciona a classe 'ativo' ao link correspondente
            }
        });
    }

    // Adiciona evento de scroll para marcar o link conforme a posição da tela
    window.addEventListener('scroll', marcarAtivo);

    // Também marca ao carregar a página (caso já esteja em uma seção específica)
    marcarAtivo();
});


/* FIM ADICIONANDO CLASSE ATIVO NO MENU PARA A SESSÃO ATIVA QUANDO FAZ O SCROLL DA PÁGINA*/