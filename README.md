# team/web-dev · Portfólio

Portfólio acadêmico da equipe **Jhonathan Magalhães da Cruz** e **Fellipe de Castro**, alunos do **3º semestre de Engenharia de Software** no **CEUB**. O site reúne as quatro entregas da disciplina **Desenvolvimento Web**, com links diretos aos repositórios no GitHub e uma seção dedicada à correção pela professora.

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
- **Seção “Correção”** — manifesto de entrega com links diretos para todos os repositórios
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
