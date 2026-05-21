// app.jsx — root

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "lime",
  "fontMono": "JetBrains Mono",
  "fontDisplay": "Space Grotesk",
  "layout": "grid",
  "density": "regular",
  "scanlines": true,
  "language": "pt",
  "theme": "dark"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  lime:    { hue: 130, accent: "oklch(0.82 0.20 130)", accentDeep: "oklch(0.55 0.18 130)" },
  cyan:    { hue: 200, accent: "oklch(0.80 0.16 200)", accentDeep: "oklch(0.55 0.15 200)" },
  amber:   { hue:  70, accent: "oklch(0.85 0.18  70)", accentDeep: "oklch(0.58 0.16  70)" },
  magenta: { hue: 340, accent: "oklch(0.78 0.20 340)", accentDeep: "oklch(0.55 0.18 340)" },
  violet:  { hue: 290, accent: "oklch(0.78 0.18 290)", accentDeep: "oklch(0.55 0.17 290)" },
};

const FONT_MONO_OPTIONS = ["JetBrains Mono", "IBM Plex Mono", "Fira Code", "Geist Mono"];
const FONT_DISPLAY_OPTIONS = ["Space Grotesk", "Inter Tight", "Geist", "DM Sans"];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modalProject, setModalProject] = useState(null);

  const lang = t.language;
  const theme = t.theme;
  const str = STR[lang];

  // Apply theme + tokens to root
  useEffect(() => {
    const root = document.documentElement;
    const preset = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS.lime;
    root.style.setProperty("--accent", preset.accent);
    root.style.setProperty("--accent-deep", preset.accentDeep);
    root.style.setProperty("--accent-hue", preset.hue);
    root.style.setProperty("--font-mono", `'${t.fontMono}', ui-monospace, monospace`);
    root.style.setProperty("--font-display", `'${t.fontDisplay}', ui-sans-serif, system-ui`);
    root.dataset.theme = theme;
    root.dataset.density = t.density;
    root.dataset.scanlines = t.scanlines ? "on" : "off";
  }, [t, theme]);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  const onNav = (key) => {
    const map = { work: "#work", team: "#team", review: "#review" };
    const target = document.querySelector(map[key]);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="root">
      <div className="scanlines" aria-hidden="true"></div>
      <div className="bg-grid" aria-hidden="true"></div>

      <TopBar
        lang={lang} setLang={(v) => setTweak("language", v)}
        theme={theme} setTheme={(v) => setTweak("theme", v)}
        str={str}
        onNav={onNav}
      />

      <main>
        <Hero
          str={str} lang={lang}
          onWork={() => onNav("work")}
          onReview={() => onNav("review")}
        />
        <ProjectsSection
          str={str} lang={lang}
          layout={t.layout}
          onOpen={(p) => setModalProject(p)}
        />
        <TeamSection str={str} lang={lang} />
        <ReviewSection str={str} lang={lang} />
      </main>

      <Footer str={str} lang={lang} />

      {modalProject && (
        <ProjectModal
          project={modalProject}
          lang={lang}
          str={str}
          onClose={() => setModalProject(null)}
        />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === "pt" ? "Idioma & Tema" : "Language & Theme"} />
        <TweakRadio
          label={str.lang_label}
          value={lang}
          options={["pt", "en"]}
          onChange={(v) => setTweak("language", v)}
        />
        <TweakRadio
          label={str.theme_label}
          value={theme}
          options={["dark", "light"]}
          onChange={(v) => setTweak("theme", v)}
        />

        <TweakSection label={lang === "pt" ? "Cor" : "Color"} />
        <TweakColor
          label={lang === "pt" ? "destaque" : "accent"}
          value={ACCENT_PRESETS[t.accent].accent}
          options={Object.values(ACCENT_PRESETS).map((p) => p.accent)}
          onChange={(v) => {
            const key = Object.keys(ACCENT_PRESETS).find(
              (k) => ACCENT_PRESETS[k].accent === v
            );
            if (key) setTweak("accent", key);
          }}
        />

        <TweakSection label={lang === "pt" ? "Tipografia" : "Typography"} />
        <TweakSelect
          label="mono"
          value={t.fontMono}
          options={FONT_MONO_OPTIONS}
          onChange={(v) => setTweak("fontMono", v)}
        />
        <TweakSelect
          label="display"
          value={t.fontDisplay}
          options={FONT_DISPLAY_OPTIONS}
          onChange={(v) => setTweak("fontDisplay", v)}
        />

        <TweakSection label={lang === "pt" ? "Layout" : "Layout"} />
        <TweakRadio
          label={lang === "pt" ? "grade" : "grid"}
          value={t.layout}
          options={["grid", "list", "mosaic"]}
          onChange={(v) => setTweak("layout", v)}
        />
        <TweakRadio
          label={lang === "pt" ? "densidade" : "density"}
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakToggle
          label="scanlines"
          value={t.scanlines}
          onChange={(v) => setTweak("scanlines", v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
