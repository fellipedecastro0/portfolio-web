# team/web-dev · Portfólio

Portfólio acadêmico da equipe **Jhonathan Magalhães da Cruz** e **Fellipe de Castro**, alunos do **3º semestre de Engenharia de Software** no **CEUB**. O site reúne as quatro entregas da disciplina **Desenvolvimento Web**, com links diretos aos repositórios no GitHub e uma seção dedicada à correção pela professora.

**🌐 Portfólio online:** [courageous-palmier-ff0569.netlify.app](https://courageous-palmier-ff0569.netlify.app/)

**Professora:** Kadidja Valeria Reginaldo de Oliveira  
**Disciplina:** Desenvolvimento Web · CEUB · 2026.1

---

## Sobre o projeto

Este portfólio foi construído como **página única (SPA)** com estética de terminal/desenvolvedor. Ele centraliza os trabalhos da dupla, apresenta a equipe e oferece atalhos rápidos para avaliação acadêmica — cada projeto abre em nova aba com README, código e histórico de commits no GitHub.

O site é **bilíngue (PT/EN)**, suporta **tema claro/escuro** e inclui um painel de personalização visual (**Tweaks**) para ajustar cor de destaque, tipografia, layout e densidade.

---

## Funcionalidades

- **Hero interativo** com terminal simulado e estatísticas da equipe
- **Galeria de projetos** com busca por nome ou tecnologia
- **Três layouts de exibição:** grade, lista e mosaico
- **Modal de detalhes** por projeto (descrição, stack, link para repositório)
- **Seção da equipe** com fotos e perfis no GitHub
- **Seção "Correção"** — manifesto de entrega com links diretos para todos os repositórios
- **Internacionalização** PT / EN
- **Tema dark / light**
- **Painel Tweaks** — accent color, fontes mono/display, densidade, scanlines
- **Animações reveal-on-scroll** e efeitos visuais (grid de fundo, scanlines opcionais)
- **Acessibilidade básica** — foco visível, labels em controles, suporte a `Escape` no modal

---

## Projetos incluídos

| Projeto | Descrição | Repositório |
|---------|-----------|-------------|
| **Linha do Tempo da Web** | Timeline interativa das eras da web (Web 1.0 → web em tempo real) | [web-history-timeline](https://github.com/fellipedecastro0/web-history-timeline) |
| **JF Code** | Site-produto: captação de clientes com proposta, prazo, preço e protótipo | [jf_code](https://github.com/fellipedecastro0/jf_code) |
| **Mapa Conceitual de Protocolos Web** | Mapa interativo de HTTP, HTTPS, TCP/IP, DNS, WebSocket etc. | [Desenvolvimento-Web](https://github.com/fellipedecastro0/Desenvolvimento-Web) |
| **Engenharia Reversa · E-commerce** | Refatoração de UX e acessibilidade (WCAG) de um e-commerce real | [engenharia-reversa-desenvolvimento-web](https://github.com/Johnn216/engenharia-reversa-desenvolvimento-web) |

---

## Equipe

| Integrante | GitHub | Papel |
|------------|--------|-------|
| **Jhonathan Magalhães da Cruz** ([@Johnn216](https://github.com/Johnn216)) | Engenharia de Software · 3º semestre |
| **Fellipe de Castro** ([@fellipedecastro0](https://github.com/fellipedecastro0)) | Engenharia de Software · 3º semestre |

---
## Framework: React

A interface deste portfólio foi construída com **React 18**, a biblioteca JavaScript mantida pela Meta para criação de interfaces de usuário. A escolha do React permitiu organizar a página como um conjunto de **componentes reutilizáveis e declarativos**, em que cada parte da tela (barra de navegação, hero, galeria de projetos, modal, painel de tweaks) é uma função independente que descreve *o que* deve aparecer, deixando o React cuidar de *como* atualizar o DOM.

### Por que React?

- **Componentização** — a UI é dividida em peças pequenas e independentes (`TopBar`, `Hero`, `ProjectsSection`, `ProjectCard`, `ProjectModal`, `TeamSection`, `ReviewSection`, `TweaksPanel`), o que facilita manutenção e leitura.
- **Renderização declarativa** — descrevemos o estado desejado da interface e o React reconcilia o DOM automaticamente, evitando manipulação manual e propensa a erros.
- **Estado reativo com Hooks** — mudanças de idioma, tema, layout e personalização refletem na tela instantaneamente, sem recarregar a página.
- **Ecossistema e familiaridade** — React é um dos padrões mais adotados do mercado, o que agrega valor acadêmico e profissional ao projeto.

### Como o React é usado no projeto

| Recurso | Aplicação |
|---------|-----------|
| **React 18 (CDN)** | Carregado direto via `unpkg`, sem necessidade de instalação ou bundler |
| **JSX** | Sintaxe declarativa para descrever a UI, transpilada no navegador pelo **Babel Standalone** |
| **`ReactDOM.createRoot`** | API de renderização concorrente do React 18, montando o app no `<div id="app">` |
| **`useState`** | Gerenciamento de estado local (projeto aberto no modal, busca, controles de UI) |
| **`useEffect`** | Efeitos colaterais — aplicação de tokens de tema, *reveal-on-scroll* via `IntersectionObserver`, suporte a `Escape` no modal |
| **`useMemo`** | Filtragem e memorização da lista de projetos na busca, evitando recálculos desnecessários |
| **`useRef`** | Referências diretas a elementos para arrastar o painel e controlar sliders |
| **Hook customizado `useTweaks`** | Hook próprio que centraliza as preferências do usuário (cor, fonte, layout, densidade, tema, idioma) e as persiste no `localStorage` |
| **Props & composição** | Dados e callbacks fluem de cima para baixo (`str`, `lang`, `onOpen`, `onNav`…), e o `TweaksPanel` usa `children` para compor seus controles |

### Arquitetura de componentes
App (app.jsx)
├── TopBar → navegação, troca de idioma e tema
├── Hero → terminal simulado + estatísticas
├── ProjectsSection → busca + galeria (grade / lista / mosaico)
│ └── ProjectCard
├── TeamSection → integrantes da equipe
├── ReviewSection → manifesto de entrega e links
├── Footer
├── ProjectModal → detalhes do projeto (renderização condicional)
└── TweaksPanel → painel de personalização visual

> **Sem build:** diferente da maioria dos projetos React, este roda **sem bundler e sem `package.json`**. O React e o Babel são carregados via CDN e o JSX é transpilado em tempo de execução no navegador — basta servir os arquivos estaticamente. Essa abordagem mantém o projeto leve, portátil e fácil de hospedar (no caso, na Netlify).
## Stack tecnológica

| Camada | Tecnologias |
|--------|-------------|
| **UI** | React 18 (via CDN) |
| **Transpilação** | Babel Standalone (JSX no browser) |
| **Estilos** | CSS customizado com design tokens (`oklch`, variáveis CSS) |
| **Fontes** | Google Fonts — JetBrains Mono, Space Grotesk, Inter Tight, DM Sans, IBM Plex Mono, Fira Code |
| **Build** | Nenhum — projeto estático, sem bundler |

> Não há `package.json` nem processo de build. Basta servir os arquivos estaticamente.

---

## Uso de Inteligência Artificial

Este portfólio foi desenvolvido com apoio de ferramentas de IA como parte do fluxo de trabalho da equipe. O conteúdo, a estrutura e as decisões finais foram revisados e validados pelos autores.

### Ferramentas utilizadas

| Ferramenta | Uso no projeto |
|------------|----------------|
| **[Cursor](https://cursor.com/)** | IDE com assistente de IA integrado, usada para editar código, refatorar componentes, ajustar CSS, organizar arquivos e iterar rapidamente sobre layout e funcionalidades |
| **[Claude](https://claude.ai/)** (Anthropic) | Modelo de linguagem usado para apoio em estruturação do projeto, redação de textos (PT/EN), sugestões de UX, revisão de código e documentação |

### Como a IA foi aplicada

- **Estrutura e arquitetura** — sugestões de organização em componentes React (`app.jsx`, `components.jsx`, `tweaks-panel.jsx`)
- **Interface e estética** — apoio na construção da identidade visual terminal/dev, temas dark/light e painel de personalização
- **Internacionalização** — auxílio na redação e tradução dos textos PT/EN
- **Documentação** — elaboração e revisão deste README
- **Produtividade** — aceleração de tarefas repetitivas (CSS, markup JSX, ajustes de layout)

### Responsabilidade dos autores

A equipe declara que:

- Todo o **conteúdo acadêmico** (descrição dos projetos, contexto da disciplina, dados da equipe) foi conferido pelos autores
- Os **links para repositórios** e informações da professora/disciplina foram validados manualmente
- O código foi **revisado, testado e ajustado** antes da entrega
- A IA foi usada como **ferramenta de apoio**, não como substituto do trabalho ou do aprendizado

---

## Estrutura do repositório
