const formularioContato = document.getElementById('contact-form');

if (formularioContato) {
  formularioContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formularioContato);
    const nome = String(dados.get('nome') || '').trim();
    const email = String(dados.get('email') || '').trim();
    const assunto = String(dados.get('assunto') || '').trim();
    const mensagem = String(dados.get('mensagem') || '').trim();

    const texto = `Olá! Meu nome é ${nome}.\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    window.open(
      `https://wa.me/551921188450?text=${mensagemFormatada}`,
      '_blank',
      'noopener,noreferrer'
    );
  });
}
