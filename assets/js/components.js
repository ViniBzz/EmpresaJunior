async function carregarComponente(elemento) {
  const arquivo = elemento.dataset.include;

  try {
    const resposta = await fetch(arquivo);

    if (!resposta.ok) {
      throw new Error(`Erro ao carregar ${arquivo}: HTTP ${resposta.status}`);
    }

    elemento.innerHTML = await resposta.text();
  } catch (erro) {
    console.error(erro);
    elemento.innerHTML = `<!-- Erro ao carregar ${arquivo} -->`;
  }
}

async function carregarComponentes() {
  const includes = [...document.querySelectorAll('[data-include]')];

  // Header, footer e WhatsApp são independentes, então podem carregar em paralelo.
  await Promise.all(includes.map(carregarComponente));

  ativarMenuMobile();
  marcarPaginaAtual();
  ativarHeaderScroll();
}

function ativarMenuMobile() {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');

  if (!menuBtn || !nav) return;

  const fecharMenu = () => {
    nav.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  };

  menuBtn.addEventListener('click', () => {
    const menuAberto = nav.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', String(menuAberto));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', fecharMenu);
  });
}

function marcarPaginaAtual() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const hashAtual = window.location.hash || '#inicio';

  document.querySelectorAll('.nav a').forEach((link) => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    const urlLink = new URL(href, window.location.href);
    const paginaLink = urlLink.pathname.split('/').pop() || 'index.html';
    const hashLink = urlLink.hash;

    const estaNaHome = paginaAtual === 'index.html' || paginaAtual === '';
    const linkVaiParaHome = paginaLink === 'index.html' || paginaLink === '';

    if (estaNaHome && linkVaiParaHome) {
      if (hashLink === hashAtual) link.classList.add('active');
      return;
    }

    if (!estaNaHome && paginaLink === paginaAtual) {
      link.classList.add('active');
    }
  });
}

function ativarHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const atualizarHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  atualizarHeader();
  window.addEventListener('scroll', atualizarHeader, { passive: true });
}

window.addEventListener('hashchange', marcarPaginaAtual);
document.addEventListener('DOMContentLoaded', carregarComponentes);
