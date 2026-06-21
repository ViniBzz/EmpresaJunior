const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const linksMenu = document.querySelectorAll(".nav a");

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

const botaoEnviar = document.querySelector(".form-contato .btn");

if (botaoEnviar) {
  botaoEnviar.addEventListener("click", () => {
    const nome = document.querySelector('input[placeholder="Seu nome"]').value.trim();
    const email = document.querySelector('input[placeholder="Seu email"]').value.trim();
    const assunto = document.querySelector('input[placeholder="Assunto"]').value.trim();
    const mensagem = document.querySelector("textarea").value.trim();

    const texto = `Olá! Meu nome é ${nome}.
Email: ${email}
Assunto: ${assunto}
Mensagem: ${mensagem}`;

    const mensagemFormatada = encodeURIComponent(texto);

    window.open(
      `https://wa.me/551921188450?text=${mensagemFormatada}`,
      "_blank"
    );
  });
}