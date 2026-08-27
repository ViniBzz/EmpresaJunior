# UNASP Empresa Júnior — organização do front-end

Projeto estático em HTML, CSS e JavaScript.

## Estrutura

```text
unasp-empresa-junior/
├── index.html
├── servicos.html
├── localizacao.html
├── equipe.html
├── components/
│   ├── header.html
│   ├── footer.html
│   └── whatsapp.html
└── assets/
    ├── css/
    │   ├── core/
    │   │   ├── variables.css   # cores, tamanhos e fonte
    │   │   └── base.css        # reset e estilos compartilhados
    │   ├── components/
    │   │   ├── header.css
    │   │   ├── buttons.css
    │   │   ├── footer.css
    │   │   └── whatsapp.css
    │   └── pages/
    │       ├── home.css
    │       ├── servicos.css
    │       └── localizacao.css
    ├── js/
    │   ├── components.js       # carrega componentes e controla o menu
    │   └── home.js             # comportamento exclusivo da home
    └── img/
```

## Onde editar

- Alteração visual global: `assets/css/core/`
- Cabeçalho, botões, rodapé ou WhatsApp: `assets/css/components/`
- Algo que existe só em uma página: `assets/css/pages/<pagina>.css`
- Galeria e apresentação da equipe: `equipe.html` + `assets/css/pages/equipe.css`
- Fotos da equipe: `assets/img/equipe/`
- Menu e carregamento de componentes: `assets/js/components.js`
- Formulário da home: `assets/js/home.js`
- Conteúdo reutilizado em todas as páginas: `components/`

> Os componentes HTML usam `fetch()`. Para testar localmente, abra o projeto com Live Server ou outro servidor HTTP; não abra apenas o arquivo pelo protocolo `file://`.
