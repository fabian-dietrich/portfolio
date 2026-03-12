import styles from './StyleGuide.module.css'

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}

function Annotation({ label, children, column }) {
  return (
    <div className={`${styles.annotated} ${column ? styles.column : ''}`}>
      {children}
      <span className={styles.annotation}>{label}</span>
    </div>
  )
}

function Swatch({ varName }) {
  return (
    <div className={styles.swatchWrap}>
      <div className={styles.swatch} style={{ background: `var(${varName})` }} />
      <code className={styles.swatchLabel}>{varName}</code>
    </div>
  )
}

function BorderSample({ label, style }) {
  return (
    <div className={styles.borderSample}>
      <div className={styles.borderBox} style={style} />
      <code className={styles.borderLabel}>{label}</code>
    </div>
  )
}

export default function StyleGuide() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Style Guide</h1>
        <p className={styles.pageSubtitle}>Design tokens, typography, and UI primitives — all sourced from <code>index.css</code></p>
      </header>

      <Section title="Typography">
        <div className={styles.typeStack}>
          <Annotation label="--font-display (Fraunces) · clamp(2rem, 4vw, 2.75rem) · font-weight: 400 · color: --color-accent · .hero .name" column>
            <h1 className={styles.tDisplay}>Fabian Dietrich</h1>
          </Annotation>
          <Annotation label="--font-display (Fraunces) · clamp(2rem, 4vw, 3rem) · font-weight: 400 · color: --color-accent · .contact .sectionTitle" column>
            <h2 className={styles.tDisplayAlt}>Work With Me</h2>
          </Annotation>
          <Annotation label="--font-mono (DM Mono) · clamp(0.85rem, 1.5vw, 1rem) · font-weight: 400 · letter-spacing: 0.04em · color: --color-text-secondary · .hero .title" column>
            <p className={styles.tMono}>Interface Designer &amp; Full-Stack Developer</p>
          </Annotation>
          <Annotation label="--font-body (Source Sans 3) · 0.85rem · font-weight: 700 · letter-spacing: 0.12em · uppercase · color: --color-text-secondary · .sectionTitle (ProjectGrid / Partners)" column>
            <p className={styles.tLabel}>Built &amp; Deployed</p>
          </Annotation>
          <Annotation label="--font-body · clamp(0.95rem, 1.5vw, 1.05rem) · line-height: 1.7 · max-width: 58ch · .hero .intro" column>
            <p className={styles.tIntro}>I design and build digital products from initial concept to deployed software. With a background in Interface Design and hands-on experience across the full development stack, I translate user needs into experiences that deliver.</p>
          </Annotation>
          <Annotation label="--font-body · 1.1rem · font-weight: 700 · color: --color-text-primary · .card .title" column>
            <p className={styles.tCardTitle}>Shifty</p>
          </Annotation>
          <Annotation label="--font-body · 0.9rem · font-weight: 600 · color: --color-accent · .card .tagline" column>
            <p className={styles.tTagline}>Staff scheduling that empowers your whole team</p>
          </Annotation>
          <Annotation label="--font-body · 0.95rem · line-height: 1.65 · color: --color-text-secondary · .card .description" column>
            <p className={styles.tDescription}>A straightforward scheduling tool for small businesses — admins assign shifts, employees claim slots and swap amongst themselves.</p>
          </Annotation>
          <Annotation label="--font-body · 1.05rem · font-weight: 600 · color: --color-text-primary · .partners .partner" column>
            <p className={styles.tPartner}>The New London Agency</p>
          </Annotation>
          <Annotation label="--font-body · 0.9rem · font-style: italic · color: --color-text-secondary · .partners .footnote" column>
            <p className={styles.tFootnote}>And other organisations navigating an increasingly digital reality.</p>
          </Annotation>
        </div>
      </Section>

      <Section title="Colours">
        <div className={styles.swatchGrid}>
          <div className={styles.swatchGroup}>
            <p className={styles.swatchGroupLabel}>Accent</p>
            <div className={styles.swatchRow}>
              <Swatch varName="--color-accent" />
              <Swatch varName="--color-accent-hover" />
              <Swatch varName="--color-accent-tint" />
            </div>
          </div>
          <div className={styles.swatchGroup}>
            <p className={styles.swatchGroupLabel}>Backgrounds</p>
            <div className={styles.swatchRow}>
              <Swatch varName="--color-bg" />
              <Swatch varName="--color-bg-card" />
              <Swatch varName="--color-bg-subtle" />
            </div>
          </div>
          <div className={styles.swatchGroup}>
            <p className={styles.swatchGroupLabel}>Text &amp; Border</p>
            <div className={styles.swatchRow}>
              <Swatch varName="--color-text-primary" />
              <Swatch varName="--color-text-secondary" />
              <Swatch varName="--color-border" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Borders &amp; Dividers">
        <div className={styles.borderRow}>
          <BorderSample label="1px solid var(--color-border) · section separators · .card default" style={{ border: '1px solid var(--color-border)' }} />
          <BorderSample label="1px solid var(--color-accent) · .card:hover border" style={{ border: '1px solid var(--color-accent)' }} />
          <BorderSample label="border-bottom: 1px solid --color-accent · .card .primaryLink" style={{ borderBottom: '1px solid var(--color-accent)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} />
          <BorderSample label="border-bottom: 2px solid --color-accent · .contact .link" style={{ borderBottom: '2px solid var(--color-accent)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }} />
        </div>
      </Section>

      <Section title="Border Radius">
        <div className={styles.borderRow}>
          <BorderSample label="border-radius: 3px · .tag" style={{ border: '1px solid var(--color-border)', borderRadius: '3px' }} />
          <BorderSample label="border-radius: 4px · .hero .cta" style={{ border: '1px solid var(--color-border)', borderRadius: '4px' }} />
          <BorderSample label="border-radius: 8px · .card" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }} />
        </div>
      </Section>

      <Section title="Interactive Elements">
        <div className={styles.interactiveRow}>
          <Annotation label=".hero .cta · bg: --color-accent · border-radius: 4px · 0.8rem · font-weight: 700 · letter-spacing: 0.08em · uppercase · hover → --color-accent-hover">
            <a href="#" className={styles.ctaButton} onClick={e => e.preventDefault()}>Work With Me</a>
          </Annotation>
          <Annotation label=".card .primaryLink · color: --color-accent · border-bottom: 1px · font-size: 0.85rem · font-weight: 700 · hover → --color-accent-hover">
            <a href="#" className={styles.primaryLink} onClick={e => e.preventDefault()}>View Project</a>
          </Annotation>
          <Annotation label=".card .secondaryLink · color: --color-text-secondary · font-size: 0.85rem · font-weight: 600 · hover → --color-text-primary">
            <a href="#" className={styles.secondaryLink} onClick={e => e.preventDefault()}>Live App ↗</a>
          </Annotation>
          <Annotation label=".contact .link · font-weight: 700 · letter-spacing: 0.05em · uppercase · border-bottom: 2px solid --color-accent · hover → color: --color-accent">
            <a href="#" className={styles.contactLink} onClick={e => e.preventDefault()}>Email</a>
          </Annotation>
        </div>
      </Section>

      <Section title="Tag Chips">
        <div className={styles.tagRow}>
          {['React', 'Node.js', 'MongoDB', 'TypeScript', 'PostgreSQL', 'Figma', 'Data Visualisation', 'UX Research'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.tagNote}><code>.tag · 0.68rem · font-weight: 700 · letter-spacing: 0.05em · uppercase · border: 1px solid --color-border · border-radius: 3px · color: --color-text-secondary · padding: 0.2rem 0.6rem</code></p>
      </Section>

      <Section title="Spacing Scale">
        <div className={styles.spacingStack}>
          {[
            { val: '0.4rem', label: 'tag gap' },
            { val: '0.5rem', label: 'card content gap (small)' },
            { val: '1.25rem', label: 'card padding / card grid gap' },
            { val: '1.5rem', label: 'contact links gap' },
            { val: '2rem', label: 'section horizontal padding' },
            { val: '2.5rem', label: 'hero intro margin-bottom / CTA margin-top' },
            { val: '3rem', label: 'grid section padding-top' },
            { val: '4rem', label: 'grid padding-bottom / hero padding-bottom' },
            { val: '5rem', label: 'hero / partners / contact padding-top' },
          ].map(({ val, label }) => (
            <div key={val} className={styles.spacingItem}>
              <div className={styles.spacingBar} style={{ width: `calc(${val} * 4)` }} />
              <code className={styles.spacingVal}>{val}</code>
              <span className={styles.spacingDesc}>{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Background Contexts">
        <div className={styles.bgRow}>
          <Annotation label="--color-bg · default page · body · .hero · .partners · .contact" column>
            <div className={styles.bgSample} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
              <p className={styles.bgSampleText}>Default</p>
            </div>
          </Annotation>
          <Annotation label="--color-bg-card · .card background · elevated surfaces" column>
            <div className={styles.bgSample} style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
              <p className={styles.bgSampleText}>Card</p>
            </div>
          </Annotation>
          <Annotation label="--color-bg-subtle · .grid:nth-of-type(even) · alternating section tint" column>
            <div className={styles.bgSample} style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}>
              <p className={styles.bgSampleText}>Subtle</p>
            </div>
          </Annotation>
        </div>
      </Section>

    </div>
  )
}
