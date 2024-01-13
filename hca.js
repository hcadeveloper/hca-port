// JS PARA MOSTRAS O MENU
function mostrarMenu() {
    document.getElementById('links_mobile').style.display = 'flex';
}
function ocultarMenu() {
    document.getElementById('links_mobile').style.display = 'none';
}
// JS PARA FECHAR TELA DE ENTRAR
function mostrarTelaEntar() {
    document.getElementById('seccao_de_entarar_e_criar_conta').style.display = 'flex';
    document.getElementById('entrar_login').style.display = 'block';
    document.getElementById('login').style.display = 'none';

    document.getElementById('Nome_de_Usuario').value = '';
    document.getElementById('Senha').value = '';
    document.getElementById('Nome_Completo').value = '';
    document.getElementById('Novo_Nome_de_Usuario').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Nova_Senha').value = '';
    document.getElementById('Confirmar_Senha').value = '';
}
function fecharTelaEntar() {
    document.getElementById('seccao_de_entarar_e_criar_conta').style.display = 'none';
    document.getElementById('entrar_login').style.display = 'none';
}

// JS PARA FECHAR TELA DE CRIAR CONTA
function mostrarTelaCriarConta() {
    document.getElementById('seccao_de_entarar_e_criar_conta').style.display = 'flex';
    document.getElementById('login').style.display = 'block';
    document.getElementById('entrar_login').style.display = 'none';

    document.getElementById('Nome_de_Usuario').value = '';
    document.getElementById('Senha').value = '';
    document.getElementById('Nome_Completo').value = '';
    document.getElementById('Novo_Nome_de_Usuario').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Nova_Senha').value = '';
    document.getElementById('Confirmar_Senha').value = '';
}
function fecharTelaCriarConta() {
    document.getElementById('seccao_de_entarar_e_criar_conta').style.display = 'none';
    document.getElementById('login').style.display = 'none';
}

// JS PARA ANIMACAO DOS CONTEUDOS
document.addEventListener('DOMContentLoaded', function() {
    var entradaSuaveElement = document.querySelector('.entrada-suave');
  
    function handleVisibility() {
      var windowHeight = window.innerHeight;
      var elementTop = entradaSuaveElement.getBoundingClientRect().top;
  
      if (elementTop < windowHeight && entradaSuaveElement.style.visibility !== 'visible') {
        entradaSuaveElement.style.opacity = '1';
        entradaSuaveElement.style.transform = 'translateY(0)';
        entradaSuaveElement.style.visibility = 'visible'; /* Defina a visibilidade como 'visible' */
        window.removeEventListener('scroll', handleVisibility);
      }
    }
  
    window.addEventListener('scroll', handleVisibility);
    handleVisibility(); // Trigger the animation on page load
  });
  

