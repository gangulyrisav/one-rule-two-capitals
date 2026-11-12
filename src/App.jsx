import { useEffect } from "react";
import { META, RULE, BRANCH, INDEPENDENCE, ORDERS, COUNT, MAY1985, AFTER, END, STORYMAP_URL } from "./data";
import { useReveal, useYearInView, useScrollProgress } from "./useReveal";

const fmt = (n) => n.toLocaleString("en-US");

// Italicizes case names; everything else is plain text.
function Rich({ text }) {
  return text.split(/(Brown v\. Miller)/).map((p, i) => (p === "Brown v. Miller" ? <em key={i}>{p}</em> : p));
}

const Cite = ({ c }) => <span className="cite">{c}</span>;

function Entry({ e }) {
  return (
    <li className="entry" data-reveal>
      <p>
        <Rich text={e.text} /> <Cite c={e.cite} />
      </p>
    </li>
  );
}

function Cell({ side, c }) {
  return (
    <div className="cell">
      <p className="cell-side">{side}</p>
      {c.quote ? (
        <blockquote>
          <p className="q">{c.quote}</p>
          <footer>
            {c.who} <Cite c={c.cite} />
          </footer>
        </blockquote>
      ) : (
        <p>
          <Rich text={c.text} /> <Cite c={c.cite} />
        </p>
      )}
    </div>
  );
}

function CountGraphic() {
  const pct = (v) => `${(v / COUNT.max) * 100}%`;
  const tickLabel = (t) => (t === 0 ? "0" : t >= 1e6 ? `${t / 1e6} million` : fmt(t));
  return (
    <figure className="count" data-reveal>
      <div className="count-axis" aria-hidden="true">
        {COUNT.ticks.map((t) => (
          <span key={t} className="count-tick-label" style={{ left: pct(t) }}>
            {tickLabel(t)}
          </span>
        ))}
      </div>
      {COUNT.rows.map((r) => (
        <div className="count-row" key={r.year}>
          <div className="count-year">{r.year}</div>
          <div className="count-track" aria-hidden="true">
            {COUNT.ticks.map((t) => (
              <span key={t} className="count-grid" style={{ left: pct(t) }} />
            ))}
            {r.marks.map((m, i) => {
              if (m.kind === "bar-open") return <span key={i} className="m-bar" style={{ width: pct(m.to) }} />;
              if (m.kind === "band")
                return <span key={i} className="m-band" style={{ left: pct(m.from), width: pct(m.to - m.from) }} />;
              if (m.kind === "tick") return <span key={i} className="m-tick" style={{ left: pct(m.at) }} />;
              if (m.kind === "arrow") return <span key={i} className="m-arrow" style={{ left: pct(m.at) }} />;
              return null;
            })}
          </div>
          <ul className="count-legend">
            {r.marks.map((m, i) => (
              <li key={i} className={`lg lg-${m.kind}`}>
                <span className="sw" aria-hidden="true" />
                {m.label}
              </li>
            ))}
          </ul>
          <p className="count-cite">
            <Cite c={r.cite} />
          </p>
        </div>
      ))}
      <figcaption className="sr-only">{COUNT.textEquivalent}</figcaption>
    </figure>
  );
}

export default function App() {
  useReveal();
  const year = useYearInView();
  const progress = useScrollProgress();

  // Deep links such as #h-orders work after the page has rendered.
  useEffect(() => {
    if (location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to the story
      </a>
      <div className="progress" style={{ transform: `scaleY(${progress})` }} aria-hidden="true" />
      <div className={`year-label${year ? " on" : ""}`} aria-hidden="true">
        {year}
      </div>

      <header className="sec black title" data-year="">
        <div className="wrap">
          <p className="kicker">{META.kicker}</p>
          <h1>{META.title}</h1>
          <p className="deck">{META.deck}</p>
          <p className="byline">{META.byline}</p>
          <p className="note">{META.note}</p>
        </div>
        <span className="scroll-cue" aria-hidden="true" />
      </header>

      <main id="main">
        <section className="sec white" data-year={RULE.year} aria-labelledby="h-rule">
          <div className="wrap">
            <p className="kicker">{RULE.kicker}</p>
            <h2 id="h-rule">{RULE.title}</h2>
            <ol className="timeline">
              {RULE.entries.map((e, i) => (
                <Entry key={i} e={e} />
              ))}
              <li className="entry" data-reveal>
                <p className="label">The conditions</p>
                <ul className="conditions">
                  {RULE.conditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <Cite c={RULE.conditionsCite} />
              </li>
              <Entry e={RULE.principle} />
            </ol>
          </div>
        </section>

        <section className="sec white branch-sec" data-year={BRANCH.year} aria-labelledby="h-branch">
          <div className="wrap">
            <p className="kicker">{BRANCH.kicker}</p>
            <h2 id="h-branch">{BRANCH.label}</h2>
            <ol className="timeline branch">
              {BRANCH.entries.map((e, i) => (
                <Entry key={i} e={e} />
              ))}
            </ol>
            <p className="branch-close" data-reveal>
              {BRANCH.close}
            </p>
          </div>
        </section>

        <section className="sec white" data-year={INDEPENDENCE.year} aria-labelledby="h-ind">
          <div className="wrap">
            <p className="kicker">{INDEPENDENCE.kicker}</p>
            <h2 id="h-ind">{INDEPENDENCE.title}</h2>
            <ol className="timeline">
              {INDEPENDENCE.entries.map((e, i) => (
                <Entry key={i} e={e} />
              ))}
            </ol>
          </div>
        </section>

        <section className="sec black" data-year={ORDERS.year} aria-labelledby="h-orders">
          <div className="wrap wide">
            <h2 id="h-orders" className="center big">
              {ORDERS.title}
            </h2>
            <div className="heads" aria-hidden="true">
              <span>{ORDERS.left}</span>
              <span className="vline" />
              <span>{ORDERS.right}</span>
            </div>
            {ORDERS.rows.map((r) => (
              <div className="row" key={r.label} data-reveal>
                <h3 className="row-label">{r.label}</h3>
                <div className="cells">
                  <Cell side={ORDERS.left} c={r.accra} />
                  <span className="vline" aria-hidden="true" />
                  <Cell side={ORDERS.right} c={r.lagos} />
                </div>
              </div>
            ))}
            <div className="difference" data-reveal>
              <h3>{ORDERS.difference.title}</h3>
              <p>
                {ORDERS.difference.text} <Cite c={ORDERS.difference.cite} />
              </p>
            </div>
          </div>
        </section>

        <section className="sec black" data-year={ORDERS.year} aria-labelledby="h-count">
          <div className="wrap wide">
            <h2 id="h-count" className="center">
              {COUNT.title}
            </h2>
            <CountGraphic />
          </div>
        </section>

        <section className="sec black" data-year={MAY1985.year} aria-labelledby="h-85">
          <div className="wrap">
            <p className="kicker">{MAY1985.kicker}</p>
            <h2 id="h-85">{MAY1985.title}</h2>
            <ol className="steps">
              {MAY1985.steps.map((s, i) => (
                <li key={i} data-reveal>
                  <span className="num">{s.n}</span>
                  <span className="what">
                    {s.text} <Cite c={s.cite} />
                  </span>
                </li>
              ))}
            </ol>
            <div className="after85">
              {MAY1985.after.map((a, i) => (
                <p key={i} data-reveal>
                  {a.text} <Cite c={a.cite} />
                </p>
              ))}
            </div>
            <p className="small-note">{MAY1985.note}</p>
          </div>
        </section>

        <section className="sec white" data-year={AFTER.year} aria-labelledby="h-after">
          <div className="wrap">
            <p className="kicker">{AFTER.kicker}</p>
            <h2 id="h-after">{AFTER.title}</h2>
            <ol className="timeline">
              {AFTER.entries.map((e, i) => (
                <Entry key={i} e={e} />
              ))}
            </ol>
          </div>
        </section>

        <section className="sec black end" data-year={AFTER.year} aria-label="Daly’s conclusion">
          <figure className="wrap end-quote" data-reveal>
            <blockquote>
              <p>{END.quote}</p>
            </blockquote>
            <figcaption>
              <Cite c={END.cite} />
            </figcaption>
          </figure>
        </section>

        <section className="sec white sources" data-year="" aria-labelledby="h-sources">
          <div className="wrap">
            <h2 id="h-sources">Sources</h2>
            {END.limits.map((l, i) => (
              <p key={i}>
                {l.text} <Cite c={l.cite} />
              </p>
            ))}
            <h3>Bibliography</h3>
            {END.bibliography.map((b) => (
              <p className="bib" key={b}>
                {b
                  .split(/(Past and Present|Journal of Social History)/)
                  .map((p, i) => (p === "Past and Present" || p === "Journal of Social History" ? <em key={i}>{p}</em> : p))}
              </p>
            ))}
            <p className="back">
              <a href={STORYMAP_URL}>Read the full story: Ghana Must Go (ArcGIS StoryMap)</a>
            </p>
            <p className="colophon">
              Companion piece to the StoryMap Ghana Must Go, HIST 077, Fall 2026. Built with React. Typefaces: Space Grotesk and
              IBM Plex Mono (SIL Open Font License), served from this site. No cookies, no tracking.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
