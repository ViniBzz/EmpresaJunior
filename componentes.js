async function carregarComponentes() {
  const includes = document.querySelectorAll("[data-include]");

  for (const elemento of includes) {
    const arquivo = elemento.getAttribute("data-include");

    try {
      const resposta = await fetch(arquivo);

      if (!resposta.ok) {
        throw new Error(`Erro ao carregar ${arquivo}`);
      }

      elemento.innerHTML = await resposta.text();
    } catch (erro) {
      console.error(erro);
      elemento.innerHTML = `<!-- Erro ao carregar ${arquivo} -->`;
    }
  }

  ativarMenuMobile();
  marcarPaginaAtual();
  ativarHeaderScroll();
}

function ativarMenuMobile() {
  const menuBtn = document.getElementById("menu-btn") || document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const links = nav.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

function marcarPaginaAtual() {
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
  const hashAtual = window.location.hash || "#inicio";

  const links = document.querySelectorAll(".nav a");

  links.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");
    if (!href) return;

    const urlLink = new URL(href, window.location.href);
    const paginaLink = urlLink.pathname.split("/").pop() || "index.html";
    const hashLink = urlLink.hash;

    const estaNaHome = paginaAtual === "index.html" || paginaAtual === "";
    const linkVaiParaHome = paginaLink === "index.html" || paginaLink === "";

    if (estaNaHome && linkVaiParaHome) {
      if (hashLink === hashAtual) {
        link.classList.add("active");
      }

      return;
    }

    if (!estaNaHome && paginaLink === paginaAtual) {
      link.classList.add("active");
    }
  });
}

function ativarHeaderScroll() {
  const header = document.getElementById("siteHeader") || document.querySelector(".site-header");

  if (!header) return;

  function atualizarHeader() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  atualizarHeader();
  window.addEventListener("scroll", atualizarHeader);
}

window.addEventListener("hashchange", marcarPaginaAtual);
document.addEventListener("DOMContentLoaded", carregarComponentes);