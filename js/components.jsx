// components.jsx — Portfolio components (terminal/dev aesthetic)

const { useState, useEffect, useRef, useMemo } = React;

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────

const TEAM = [
  {
    id: "jhonathan",
    name: "Jhonathan Magalhães da Cruz",
    handle: "Johnn216",
    role: { pt: "Engenharia de Software · 3º semestre", en: "Software Engineering · 3rd semester" },
    github: "https://github.com/Johnn216",
    initials: "JM",
    photo: "assets/team/jhonathan.png",
  },
  {
    id: "fellipe",
    name: "Fellipe de Castro",
    handle: "fellipedecastro0",
    role: { pt: "Engenharia de Software · 3º semestre", en: "Software Engineering · 3rd semester" },
    github: "https://github.com/fellipedecastro0",
    initials: "FC",
    photo: "assets/team/fellipe.png",
  },
];

const PROFESSOR = {
  name: "Kadidja Valeria Reginaldo de Oliveira",
  course: { pt: "Desenvolvimento Web · CEUB", en: "Web Development · CEUB" },
};

const PROJECTS = [
  {
    id: "timeline",
    slug: "web-history-timeline",
    name: { pt: "Linha do Tempo da Web", en: "Web History Timeline" },
    tagline: {
      pt: "Timeline interativa e responsiva das eras da web.",
      en: "Interactive, responsive timeline through the eras of the web.",
    },
    description: {
      pt: "Linha do tempo interativa construída em TypeScript que percorre as eras da web — da Web 1.0 estática à web em tempo real. Responsiva, com transições, marcos clicáveis e leitura cronológica.",
      en: "Interactive timeline built in TypeScript walking through the eras of the web — from static Web 1.0 to real-time web. Responsive, animated, with clickable milestones and a chronological reading flow.",
    },
    repo: "https://github.com/fellipedecastro0/web-history-timeline",
    tags: ["TypeScript", "React", "Responsivo"],
    type: { pt: "Timeline interativa", en: "Interactive timeline" },
    collab: false,
    weight: "primary",
    year: "2026",
    image: "assets/projects/web-history-timeline.png",
  },
  {
    id: "jfcode",
    slug: "jf_code",
    name: "JF Code",
    tagline: {
      pt: "Site-produto: melhoria de processo comercial fim-a-fim.",
      en: "Product site: end-to-end commercial process improvement.",
    },
    description: {
      pt: "Projeto-produto que reescreve o processo de captação de clientes para uma empresa de desenvolvimento web. O cliente envia um documento de requisitos; o sistema responde com proposta, prazo, preço e um protótipo de alta fidelidade. Inclui jornada do cliente, identidade visual e materiais comerciais.",
      en: "Product project that rewrites the client-acquisition pipeline for a web-dev company. The client uploads a requirements doc; the system replies with proposal, deadline, pricing, and a high-fidelity prototype. Includes customer journey, visual identity, and commercial assets.",
    },
    repo: "https://github.com/fellipedecastro0/jf_code",
    tags: ["HTML/CSS", "JavaScript", "Tailwind", "Produto"],
    type: { pt: "Projeto-produto", en: "Product project" },
    collab: true,
    weight: "primary",
    year: "2026",
    image: "assets/projects/jfcode.png",
  },
  {
    id: "protocols",
    slug: "Desenvolvimento-Web",
    name: { pt: "Mapa Conceitual de Protocolos Web", en: "Web Protocols Concept Map" },
    tagline: {
      pt: "Mapa funcional dos protocolos que sustentam a web.",
      en: "A functional map of the protocols that power the web.",
    },
    description: {
      pt: "Mapa conceitual interativo dos protocolos da web (HTTP, HTTPS, TCP/IP, DNS, WebSocket, etc). Não é apenas ilustrativo — cada nó demonstra na prática como o protocolo se comporta, aproximando teoria e uso real.",
      en: "Interactive concept map of web protocols (HTTP, HTTPS, TCP/IP, DNS, WebSocket, etc). Not just illustrative — each node demonstrates how the protocol behaves in practice, bridging theory and real-world use.",
    },
    repo: "https://github.com/fellipedecastro0/Desenvolvimento-Web",
    tags: ["HTML/CSS", "JavaScript", "Conceito"],
    type: { pt: "Mapa interativo", en: "Interactive map" },
    collab: false,
    weight: "secondary",
    year: "2026",
    image: "assets/projects/mapa-conceitual.png",
  },
  {
    id: "reverse",
    slug: "engenharia-reversa",
    name: { pt: "Engenharia Reversa · E-commerce", en: "Reverse Engineering · E-commerce" },
    tagline: {
      pt: "Refatoração lógica e de acessibilidade de um e-commerce real.",
      en: "Logic and accessibility refactor of a real e-commerce site.",
    },
    description: {
      pt: "Selecionamos um e-commerce com problemas lógicos e de acessibilidade e aplicamos engenharia reversa: mapeamos a estrutura, identificamos falhas e propomos uma versão melhorada — com correções de UX, navegação assistiva e padrões WCAG.",
      en: "We picked an e-commerce with logical and accessibility issues and reverse-engineered it: mapped the structure, surfaced flaws, and shipped an improved version — UX fixes, assistive navigation, WCAG patterns.",
    },
    repo: "https://github.com/Johnn216/engenharia-reversa-desenvolvimento-web",
    tags: ["HTML/CSS", "Acessibilidade", "UX"],
    type: { pt: "Engenharia reversa", en: "Reverse engineering" },
    collab: false,
    weight: "secondary",
    year: "2026",
    image: "assets/projects/engenharia-reversa.png",
  },
];

function resolveImage(src) {
  if (!src) return null;
  if (typeof window !== "undefined" && window.__resources?.[src]) {
    return window.__resources[src];
  }
  if (src.startsWith("assets/") || src.startsWith("http")) return src;
  return null;
}

// ─────────────────────────────────────────────────────────────────
// I18N
// ─────────────────────────────────────────────────────────────────

const STR = {
  pt: {
    nav: { work: "trabalhos", team: "equipe", review: "correção" },
    hero_kicker: "// portfólio da equipe",
    hero_title_a: "Desenvolvimento",
    hero_title_b: "Web",
    hero_sub: "Quatro entregas de uma matéria de Engenharia de Software no CEUB. Tudo versionado no GitHub e organizado aqui para correção e consulta.",
    cta_work: "ver trabalhos",
    cta_review: "abrir para correção",
    stat_projects: "projetos",
    stat_repos: "repositórios",
    stat_semester: "semestre",
    stat_members: "integrantes",
    sec_work_kicker: "$ ls ./projects",
    sec_work_title: "Trabalhos entregues",
    sec_work_sub: "Cada card abre um README rápido com contexto, escopo e link direto para o repositório.",
    search_placeholder: "buscar por nome ou tecnologia…",
    no_results: "Nenhum projeto encontrado.",
    sec_team_kicker: "$ whoami",
    sec_team_title: "A equipe",
    sec_team_sub: "Dois alunos do terceiro semestre de Engenharia de Software no CEUB. Os trabalhos foram feitos majoritariamente em dupla — um deles em colaboração com outros colegas.",
    sec_review_kicker: "$ sudo review --professor",
    sec_review_title: "Acesso rápido para correção",
    sec_review_sub: "Atalho direto aos repositórios. Cada projeto abre em uma aba nova com README, código e histórico de commits prontos para avaliação.",
    review_for: "Para",
    open_all: "abrir todos os repositórios",
    open_repo: "abrir repositório",
    view_code: "ver código",
    visit_repo: "visitar no GitHub",
    role_label: "papel",
    type_label: "tipo",
    year_label: "ano",
    tech_label: "tecnologias",
    collab_label: "colaboração",
    collab_value: "feito com outros colegas",
    duo_value: "feito em dupla",
    close: "fechar",
    footer_made: "feito por",
    footer_rights: "Todos os direitos reservados aos autores. Conteúdo entregue para fins acadêmicos.",
    lang_label: "idioma",
    theme_label: "tema",
  },
  en: {
    nav: { work: "work", team: "team", review: "review" },
    hero_kicker: "// team portfolio",
    hero_title_a: "Web",
    hero_title_b: "Development",
    hero_sub: "Four deliverables from a Software Engineering course at CEUB. Everything version-controlled on GitHub and organized here for grading and reference.",
    cta_work: "see work",
    cta_review: "open for review",
    stat_projects: "projects",
    stat_repos: "repositories",
    stat_semester: "semester",
    stat_members: "members",
    sec_work_kicker: "$ ls ./projects",
    sec_work_title: "Delivered work",
    sec_work_sub: "Each card opens a quick README with context, scope, and a direct link to the repository.",
    search_placeholder: "search by name or technology…",
    no_results: "No projects found.",
    sec_team_kicker: "$ whoami",
    sec_team_title: "The team",
    sec_team_sub: "Two third-semester Software Engineering students at CEUB. Projects were mostly done as a pair — one of them in collaboration with other classmates.",
    sec_review_kicker: "$ sudo review --professor",
    sec_review_title: "Quick access for grading",
    sec_review_sub: "Shortcut to every repository. Each project opens in a new tab with README, source and commit history ready for review.",
    review_for: "For",
    open_all: "open all repositories",
    open_repo: "open repository",
    view_code: "view code",
    visit_repo: "visit on GitHub",
    role_label: "role",
    type_label: "type",
    year_label: "year",
    tech_label: "stack",
    collab_label: "collab",
    collab_value: "made with other classmates",
    duo_value: "made as a pair",
    close: "close",
    footer_made: "made by",
    footer_rights: "All rights reserved to the authors. Delivered for academic purposes.",
    lang_label: "language",
    theme_label: "theme",
  },
};

const localize = (v, lang) => (typeof v === "string" ? v : v[lang]);

// ─────────────────────────────────────────────────────────────────
// SMALL PRIMITIVES
// ─────────────────────────────────────────────────────────────────

function Caret() {
  return <span className="caret" aria-hidden="true">▊</span>;
}

function Glyph({ children }) {
  return <span className="glyph">{children}</span>;
}

function CommandLine({ text }) {
  return (
    <div className="cmdline">
      <span className="prompt">~/portfolio</span>
      <span className="prompt-sep">❯</span>
      <span className="cmdtext">{text}</span>
      <Caret />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// TOP BAR
// ─────────────────────────────────────────────────────────────────

function TopBar({ lang, setLang, theme, setTheme, str, onNav }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <span className="brand-dot d1"></span>
          <span className="brand-dot d2"></span>
          <span className="brand-dot d3"></span>
          <span className="brand-name">team/web-dev</span>
          <span className="brand-tag">v1.0.0</span>
        </div>
        <nav className="topnav">
          <button className="navbtn" onClick={() => onNav("work")}>./{str.nav.work}</button>
          <button className="navbtn" onClick={() => onNav("team")}>./{str.nav.team}</button>
          <button className="navbtn" onClick={() => onNav("review")}>./{str.nav.review}</button>
        </nav>
        <div className="topright">
          <div className="seg" role="group" aria-label={str.lang_label}>
            <button
              className={`seg-btn ${lang === "pt" ? "on" : ""}`}
              onClick={() => setLang("pt")}
            >PT</button>
            <button
              className={`seg-btn ${lang === "en" ? "on" : ""}`}
              onClick={() => setLang("en")}
            >EN</button>
          </div>
          <button
            className="themebtn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={str.theme_label}
          >
            <span className="themeicon">{theme === "dark" ? "◐" : "◑"}</span>
            <span className="themetxt">{theme === "dark" ? "dark" : "light"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────

function Hero({ str, lang, onWork, onReview }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid"></div>
      <div className="hero-inner reveal">
        <div className="kicker">{str.hero_kicker}</div>
        <h1 className="hero-title">
          <span className="title-a">{str.hero_title_a}</span>
          <span className="title-b">{str.hero_title_b}<span className="dot">.</span></span>
        </h1>
        <p className="hero-sub">{str.hero_sub}</p>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="meta-key">authors</span>
            <span className="meta-val">jhonathan, fellipe</span>
          </div>
          <div className="hero-meta-item">
            <span className="meta-key">course</span>
            <span className="meta-val">{localize(PROFESSOR.course, lang)}</span>
          </div>
          <div className="hero-meta-item">
            <span className="meta-key">prof</span>
            <span className="meta-val">k. v. r. de oliveira</span>
          </div>
        </div>

        <div className="hero-ctas">
          <button className="btn primary" onClick={onWork}>
            <span>{str.cta_work}</span>
            <span className="btn-arr">→</span>
          </button>
          <button className="btn ghost" onClick={onReview}>
            <span>{str.cta_review}</span>
            <span className="btn-arr">↗</span>
          </button>
        </div>

        <div className="hero-terminal">
          <div className="hero-terminal-bar">
            <span className="tb-dot r"></span>
            <span className="tb-dot y"></span>
            <span className="tb-dot g"></span>
            <span className="tb-title">~ / team / portfolio</span>
          </div>
          <div className="hero-terminal-body">
            <CommandLine text="cat ./about.md" />
            <div className="termline dim"># {lang === "pt" ? "Portfólio da equipe — Desenvolvimento Web" : "Team portfolio — Web Development"}</div>
            <div className="termline">{PROJECTS.length} {str.stat_projects}, 2 {str.stat_members}, 1 {str.stat_semester}.</div>
            <CommandLine text="git log --oneline" />
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="termline">
                <span className="hash">{(0xabc123 + i * 0x1f).toString(16).slice(0, 7)}</span>
                <span> </span>
                <span>{typeof p.name === "string" ? p.name : p.name[lang]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          <Stat k={PROJECTS.length.toString().padStart(2, "0")} v={str.stat_projects} />
          <Stat k={PROJECTS.length.toString().padStart(2, "0")} v={str.stat_repos} />
          <Stat k="03" v={str.stat_semester} />
          <Stat k="02" v={str.stat_members} />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="stat">
      <div className="stat-k">{k}</div>
      <div className="stat-v">{v}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────

function ProjectsSection({ str, lang, layout, onOpen }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    if (!q.trim()) return PROJECTS;
    const needle = q.toLowerCase();
    return PROJECTS.filter((p) => {
      const name = typeof p.name === "string" ? p.name : p.name[lang];
      return (
        name.toLowerCase().includes(needle) ||
        p.tags.some((t) => t.toLowerCase().includes(needle))
      );
    });
  }, [q, lang]);

  return (
    <section className="section" id="work">
      <SectionHeader kicker={str.sec_work_kicker} title={str.sec_work_title} sub={str.sec_work_sub} />

      <div className="search-row">
        <div className="search">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={str.search_placeholder}
          />
          {q && (
            <button className="search-clear" onClick={() => setQ("")}>×</button>
          )}
        </div>
        <div className="search-count">
          <span>{filtered.length.toString().padStart(2, "0")}</span>
          <span className="sep">/</span>
          <span>{PROJECTS.length.toString().padStart(2, "0")}</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty">
          <span className="empty-arrow">↳</span> {str.no_results}
        </div>
      ) : (
        <div className={`projects ${layout}`}>
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              lang={lang}
              str={str}
              onOpen={() => onOpen(p)}
              index={i}
              layout={layout}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, lang, str, onOpen, index, layout }) {
  const name = typeof project.name === "string" ? project.name : project.name[lang];
  const tagline = project.tagline[lang];
  const type = project.type[lang];
  const imgSrc = resolveImage(project.image);

  return (
    <article
      className={`card ${project.weight} reveal`}
      style={{ "--i": index }}
      onClick={onOpen}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }}
    >
      {imgSrc && (
        <div className="card-media">
          <img src={imgSrc} alt="" loading="lazy" />
        </div>
      )}
      <div className="card-top">
        <div className="card-id">
          <span className="card-idx">{(index + 1).toString().padStart(2, "0")}</span>
          <span className="card-slug">/{project.slug}</span>
        </div>
        <div className="card-year">{project.year}</div>
      </div>

      <div className="card-body">
        <div className="card-type">{type}</div>
        <h3 className="card-title">{name}</h3>
        <p className="card-tagline">{tagline}</p>
      </div>

      <div className="card-tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="card-foot">
        <div className="card-meta">
          {project.collab && (
            <span className="meta-pill">
              <span className="pill-dot"></span>
              {str.collab_value}
            </span>
          )}
        </div>
        <button
          className="card-cta"
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
        >
          README.md <span className="arr">→</span>
        </button>
      </div>

      <div className="card-glow"></div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────
// PROJECT MODAL
// ─────────────────────────────────────────────────────────────────

function ProjectModal({ project, lang, str, onClose }) {
  useEffect(() => {
    const onEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const name = typeof project.name === "string" ? project.name : project.name[lang];
  const imgSrc = resolveImage(project.image);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog">
        <div className="modal-bar">
          <span className="tb-dot r" onClick={onClose}></span>
          <span className="tb-dot y"></span>
          <span className="tb-dot g"></span>
          <span className="modal-bar-title">~ / projects / {project.slug} / README.md</span>
          <button className="modal-x" onClick={onClose} title={str.close}>×</button>
        </div>
        <div className="modal-body">
          {imgSrc && (
            <div className="modal-shot">
              <img src={imgSrc} alt="" />
            </div>
          )}
          <div className="modal-kicker">
            <span className="hash"># {(project.id).toUpperCase()}</span>
          </div>
          <h2 className="modal-title">{name}</h2>
          <p className="modal-tagline">{project.tagline[lang]}</p>

          <div className="modal-grid">
            <Field k={str.type_label} v={project.type[lang]} />
            <Field k={str.year_label} v={project.year} />
            <Field
              k={str.collab_label}
              v={project.collab ? str.collab_value : str.duo_value}
            />
            <Field k={str.tech_label} v={project.tags.join(" · ")} />
          </div>

          <div className="modal-divider">─────────────────────────────────────────────</div>

          <div className="modal-prose">
            <CommandLine text={`cat ${project.slug}/README.md`} />
            <p>{project.description[lang]}</p>
          </div>

          <div className="modal-actions">
            <a className="btn primary" href={project.repo} target="_blank" rel="noreferrer">
              <span>{str.visit_repo}</span>
              <span className="btn-arr">↗</span>
            </a>
            <button className="btn ghost" onClick={onClose}>
              <span>esc / {str.close}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ k, v }) {
  return (
    <div className="field">
      <div className="field-k">{k}</div>
      <div className="field-v">{v}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// TEAM
// ─────────────────────────────────────────────────────────────────

function TeamSection({ str, lang }) {
  return (
    <section className="section" id="team">
      <SectionHeader kicker={str.sec_team_kicker} title={str.sec_team_title} sub={str.sec_team_sub} />
      <div className="team">
        {TEAM.map((m, i) => (
          <article key={m.id} className="member reveal" style={{ "--i": i }}>
            <div className="member-id">0{i + 1}</div>
            <div className="avatar">
              {m.photo
                ? <img src={m.photo} alt={m.name} className="avatar-photo" />
                : (<><div className="avatar-grid"></div><span className="avatar-initials">{m.initials}</span></>)
              }
            </div>
            <div className="member-name">{m.name}</div>
            <div className="member-handle">@{m.handle}</div>
            <div className="member-role">{m.role[lang]}</div>
            <a className="member-cta" href={m.github} target="_blank" rel="noreferrer">
              github.com/{m.handle} <span className="arr">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// REVIEW (PROFESSOR ACCESS)
// ─────────────────────────────────────────────────────────────────

function ReviewSection({ str, lang }) {
  const today = new Date();
  const dateStr = today.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
    day: "2-digit", month: "short", year: "numeric"
  }).toUpperCase();
  const docId = `EVAL-${today.getFullYear()}.W${Math.ceil(((today - new Date(today.getFullYear(),0,1)) / 86400000 + 1) / 7)}`;

  // split professor name for typographic treatment
  const firstName = PROFESSOR.name.split(" ")[0];
  const rest = PROFESSOR.name.split(" ").slice(1).join(" ");

  return (
    <section className="section review" id="review">
      <SectionHeader kicker={str.sec_review_kicker} title={str.sec_review_title} sub={str.sec_review_sub} />

      <div className="manifest reveal">
        {/* document strip */}
        <div className="manifest-strip">
          <div className="strip-left">
            <span className="strip-square"></span>
            <span className="strip-label">MANIFEST</span>
            <span className="strip-sep">/</span>
            <span className="strip-val">{docId}</span>
          </div>
          <div className="strip-right">
            <span className="strip-pulse"></span>
            <span className="strip-status">{lang === "pt" ? "PRONTO PARA AVALIAÇÃO" : "READY FOR EVALUATION"}</span>
          </div>
        </div>

        {/* TO block — hero typography */}
        <div className="manifest-to">
          <div className="manifest-eyebrow">
            <span className="eyebrow-arrow">▸</span> {lang === "pt" ? "ENDEREÇADO A" : "ADDRESSED TO"}
          </div>
          <h3 className="manifest-name">
            <span className="m-first">{firstName.toUpperCase().split("").join(" ")}</span>
            <span className="m-rest">{rest}</span>
          </h3>
          <div className="manifest-meta">
            <span>{localize(PROFESSOR.course, lang)}</span>
            <span className="m-sep">●</span>
            <span>{lang === "pt" ? "3º semestre" : "3rd semester"}</span>
            <span className="m-sep">●</span>
            <span>2026.1</span>
          </div>
        </div>

        {/* dashed separator with count */}
        <div className="manifest-rule">
          <span className="rule-line"></span>
          <span className="rule-pill">
            {PROJECTS.length.toString().padStart(2, "0")} {lang === "pt" ? "entregas" : "entries"}
          </span>
          <span className="rule-line"></span>
        </div>

        {/* entries */}
        <ol className="manifest-list">
          {PROJECTS.map((p, i) => {
            const name = typeof p.name === "string" ? p.name : p.name[lang];
            return (
              <li key={p.id} className="m-row">
                <div className="m-check">
                  <span className="m-checkbox">✓</span>
                  <span className="m-num">{(i + 1).toString().padStart(2, "0")}</span>
                </div>
                <div className="m-info">
                  {resolveImage(p.image) && (
                    <div className="m-thumb">
                      <img src={resolveImage(p.image)} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="m-name">{name}</div>
                  <div className="m-path">
                    <span className="m-path-host">github.com</span>
                    <span>/</span>
                    <span className="m-path-rest">{p.repo.replace("https://github.com/", "")}</span>
                  </div>
                  <div className="m-tags">
                    {p.tags.map((t) => <span key={t} className="m-tag">{t}</span>)}
                  </div>
                </div>
                <a className="m-go" href={p.repo} target="_blank" rel="noreferrer" aria-label={str.open_repo}>
                  <span className="m-go-label">{lang === "pt" ? "ABRIR" : "OPEN"}</span>
                  <span className="m-go-arr">↗</span>
                </a>
                <div className="m-row-bg"></div>
              </li>
            );
          })}
        </ol>

        {/* signature block */}
        <div className="manifest-sign">
          <div className="sign-col">
            <div className="sign-k">{lang === "pt" ? "ASSINADO POR" : "SIGNED BY"}</div>
            <div className="sign-v">
              <a href="https://github.com/Johnn216" target="_blank" rel="noreferrer">Jhonathan M. da Cruz</a>
            </div>
            <div className="sign-v">
              <a href="https://github.com/fellipedecastro0" target="_blank" rel="noreferrer">Fellipe de Castro</a>
            </div>
          </div>
          <div className="sign-col">
            <div className="sign-k">{lang === "pt" ? "ENTREGUE EM" : "DELIVERED ON"}</div>
            <div className="sign-v sign-mono">{dateStr}</div>
          </div>
          <div className="sign-col sign-stamp">
            <div className="stamp">
              <div className="stamp-inner">
                <div className="stamp-l1">CEUB</div>
                <div className="stamp-l2">2026.1</div>
                <div className="stamp-l3">DELIVERED</div>
              </div>
            </div>
          </div>
        </div>

        {/* barcode-ish bottom strip */}
        <div className="manifest-foot">
          <div className="barcode" aria-hidden="true">
            {Array.from({ length: 64 }).map((_, i) => (
              <span key={i} style={{ width: `${1 + ((i * 7) % 4)}px`, opacity: 0.4 + ((i * 13) % 7) / 10 }}></span>
            ))}
          </div>
          <div className="manifest-hash">SHA · a1c2f3b · {dateStr.replace(/\s/g, "")}</div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION HEADER
// ─────────────────────────────────────────────────────────────────

function SectionHeader({ kicker, title, sub }) {
  return (
    <header className="section-head reveal">
      <div className="kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-sub">{sub}</p>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────

function Footer({ str, lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-line">
          <span className="footer-hash">©</span>
          <span>{year}</span>
          <span className="sep">·</span>
          <span>{str.footer_made}</span>
          <a href="https://github.com/Johnn216" target="_blank" rel="noreferrer">Jhonathan Magalhães da Cruz</a>
          <span className="sep">&</span>
          <a href="https://github.com/fellipedecastro0" target="_blank" rel="noreferrer">Fellipe de Castro</a>
        </div>
        <div className="footer-rights">{str.footer_rights}</div>
        <div className="footer-stamp">
          <span>// {localize(PROFESSOR.course, lang)}</span>
          <span className="sep">·</span>
          <span>prof. {PROFESSOR.name}</span>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────

Object.assign(window, {
  TopBar, Hero, ProjectsSection, ProjectModal, TeamSection, ReviewSection, Footer,
  PROJECTS, TEAM, PROFESSOR, STR, localize,
});
