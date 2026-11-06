import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    year: "2023",
    name: "Maison Cusi",
    theme: "cusi",
    brief:
      "A renowned high-end jewelry boutique located in the heart of Milan's Fashion District, specializing in bespoke handcrafted pieces using rare gemstones and exclusive materials. The website has been designed to highlight the jewelry, using simplicity and elegance to create a refined user experience. The focus is on showcasing each piece with high-quality imagery and an intuitive layout, allowing the craftsmanship and beauty of the jewelry to stand out.",
    tools: "React, Stripe, Strapi, Styled Component",
    links: [
      { label: "Website", href: "https://cusiecommerce.netlify.app/" },
      {
        label: "GitHub",
        href: "https://github.com/MatteoAndreoli1994/cusi-jewellery",
      },
    ],
    images: [
      {
        src: "/images/maison-cusi-home.png",
        width: 1350,
        height: 3503,
        alt: "Maison Cusi jewelry boutique website homepage",
      },
      {
        src: "/images/maison-cusi-jewelry.jpg",
        width: 3024,
        height: 7450,
        alt: "Maison Cusi jewelry collection page",
      },
      {
        src: "/images/maison-cusi-details.png",
        width: 3024,
        height: 4026,
        alt: "Maison Cusi product detail page",
      },
      {
        src: "/images/maison-cusi-appointment.png",
        width: 3024,
        height: 6714,
        alt: "Maison Cusi appointment booking page",
      },
    ],
  },
  {
    year: "2023",
    name: "GBCC",
    theme: "gbcc",
    brief:
      "Game Boyz Color Club (GBCC) is an NFT collection of 2,222 unique digital collectibles on the Binance Smart Chain. Each NFT provides holders with access to a vibrant community and exclusive features, including games, reward systems, and early access to future projects and collections within the GBCC ecosystem. Designed to provide a dynamic and rewarding experience, GBCC stands out as a creative and engaging Web3 initiative.",
    tools: "React, Solidity, ether.js, Styled Component",
    links: [
      { label: "Website", href: "https://www.gameboyzcolorclub.com/" },
      {
        label: "GitHub",
        href: "https://github.com/MatteoAndreoli1994/GBCC-Website",
      },
    ],
    images: [
      {
        src: "/images/gbcc-home.jpg",
        width: 2116,
        height: 2300,
        alt: "Game Boyz Color Club website",
      },
      {
        src: "/images/gbcc-detail.jpg",
        width: 2116,
        height: 1195,
        alt: "Game Boyz Color Club project detail",
      },
    ],
  },
  {
    year: "2026",
    name: "Radura",
    theme: "radura",
    brief:
      "The official website of the band Radura, built around the release of their album Acque. The music comes first: a built-in player lets visitors listen to the record, alongside live dates, photography and the story of the band. The design follows the band's visual world, with a stark black and white layout and the album's river artwork, leaving plenty of room for the images and the sound.",
    tools: "Next.js, TypeScript, Tailwind CSS, Playwright",
    links: [
      { label: "Website", href: "https://raduraband.com/" },
      {
        label: "GitHub",
        href: "https://github.com/MatteoAndreoli1994/RADURA",
      },
    ],
    images: [
      {
        src: "/images/radura-home.jpg",
        width: 2200,
        height: 1203,
        alt: "Radura website homepage with the Acque album artwork",
      },
      {
        src: "/images/radura-live.jpg",
        width: 2200,
        height: 1215,
        alt: "Radura live photography gallery",
      },
      {
        src: "/images/radura-about.jpg",
        width: 2200,
        height: 1210,
        alt: "Radura about page with band story, contacts and newsletter",
      },
    ],
  },
  {
    year: "2026",
    name: "SIQ",
    theme: "siq",
    phones: true,
    brief:
      "SIQ is a decentralized marketplace and social network for NFT traders, built as a Progressive Web App that installs on your phone like a native app. Traders swap NFTs peer-to-peer in atomic swap rooms with built-in chat, without ever giving up custody of their assets. They can also create NFTs and collections, explore what's on-chain and follow each other through a social feed of listings and transfers. Currently in development.",
    tools: "Next.js, Tailwind CSS, Firebase, DigitalOcean, Redis",
    links: [{ label: "Website", href: "https://siq-protocol.com/" }],
    images: [
      {
        src: "/images/siq-app.jpg",
        width: 1536,
        height: 1516,
        alt: "SIQ app on a phone showing the Discover page",
      },
      {
        src: "/images/siq-feed.jpg",
        width: 789,
        height: 1600,
        alt: "SIQ social feed with NFT listings and transfers",
      },
      {
        src: "/images/siq-profile.jpg",
        width: 782,
        height: 1600,
        alt: "SIQ profile page with NFT collections",
      },
      {
        src: "/images/siq-collection.jpg",
        width: 792,
        height: 1600,
        alt: "SIQ collection page with stats and listed NFTs",
      },
    ],
  },
];

const experience = [
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL / PostgreSQL",
  "Solidity",
];

const linkIcons = {
  Website: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.7 3.9 5.9 3.9 9.5s-1.3 6.8-3.9 9.5c-2.6-2.7-3.9-5.9-3.9-9.5s1.3-6.8 3.9-9.5Z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
};

function Header({ active }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a
          className="nav-link"
          href="/"
          aria-current={active === "home" ? "page" : undefined}
        >
          Home
        </a>
        <a
          className="nav-link"
          href="/works"
          aria-current={active === "works" ? "page" : undefined}
        >
          Works
        </a>
      </nav>
      <a className="brand" href="/" aria-label="Matteo Andreoli home">
        Matteo Andreoli
      </a>
      <a
        className="nav-link nav-contact"
        href="mailto:matteoandreoli094@gmail.com"
      >
        Contact
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
        <h2>Let&apos;s work together.</h2>
      </div>
      <a href="mailto:matteoandreoli094@gmail.com">
        matteoandreoli094@gmail.com <span aria-hidden="true">↗</span>
      </a>
    </footer>
  );
}

function ProjectImage({ image, loading = "lazy" }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
    />
  );
}

function Project({ project, index }) {
  const isMaisonCusi = index === 0;
  let sideImages = project.images.slice(0, 1);
  let fullWidthImages = project.images.slice(1);

  if (isMaisonCusi) {
    sideImages = project.images.slice(1, 3);
    fullWidthImages = project.images.slice(3);
  }

  return (
    <article id={project.theme} className={`project project-${project.theme}`}>
      <div className="project-heading">
        <p className="project-year">{project.year}</p>
        <h2>{project.name}</h2>
      </div>
      <div
        className={`project-layout project-layout-${index + 1}${
          project.phones ? " project-layout-phones" : ""
        }`}
      >
        <div className="project-left-column">
          <div className="project-info">
            <section>
              <h3>Brief</h3>
              <p>{project.brief}</p>
            </section>
            <section>
              <h3>Tools</h3>
              <p>{project.tools}</p>
            </section>
            <section>
              <h3>Role</h3>
              <div className="role-tags">
                <span>Developer</span>
                <span>Designer</span>
              </div>
            </section>
            <section>
              <h3>Links</h3>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="project-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} ${link.label}`}
                    title={link.label}
                  >
                    {linkIcons[link.label]}
                  </a>
                ))}
              </div>
            </section>
          </div>
          {isMaisonCusi && (
            <div className="project-left-gallery">
              <ProjectImage image={project.images[0]} />
            </div>
          )}
        </div>
        {sideImages.length > 0 && (
          <div className={`project-gallery project-gallery-${index + 1}`}>
            {sideImages.map((image, imageIndex) => (
              <ProjectImage
                key={image.src}
                image={image}
                loading={imageIndex === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        )}
        {fullWidthImages.length > 0 && (
          <div className="project-full-gallery">
            {fullWidthImages.map((image) => (
              <ProjectImage key={image.src} image={image} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function WorksNav() {
  const [active, setActive] = React.useState(projects[0].theme);

  React.useEffect(() => {
    // A zero-height band at mid-viewport: the project crossing it is the current one.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    projects.forEach((project) => {
      observer.observe(document.getElementById(project.theme));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`works-nav project-${active}`} aria-label="Projects">
      {projects.map((project) => (
        <a
          key={project.theme}
          href={`#${project.theme}`}
          aria-current={active === project.theme ? "true" : undefined}
        >
          <span>{project.name}</span>
        </a>
      ))}
    </nav>
  );
}

function WorksPage() {
  return (
    <>
      <Header active="works" />
      <WorksNav />
      <main className="works-page">
        {projects.map((project, index) => (
          <Project key={project.name} project={project} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header active="home" />
      <main className="home-page">
        <section className="home-hero">
          <div className="hero-meta">
            <span>DEVELOPER &amp; DESIGNER</span>
            <span>MILAN, ITALY</span>
          </div>
          <h1>
            I design and
            <br />
            build websites
            <br />
            <span>people enjoy.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I work on websites, online stores and web apps, from the first
              sketch to launch.
            </p>
          </div>
        </section>

        <section className="intro-section">
          <div className="section-label">
            <span>01</span>
            <span>A LITTLE ABOUT ME</span>
          </div>
          <div className="intro-copy">
            <h2>
              I&apos;m Matteo, a developer and designer who cares about how
              things work and how they make people feel.
            </h2>
            <p>
              After earning my Computer Science degree in 2021, I started at
              IBM as an automation systems engineer. Since 2023, I&apos;ve been
              building thoughtful digital experiences as a freelancer, with a
              focus on eCommerce, web applications and Web3.
            </p>
            <a className="text-link" href="/works">
              A few things I&apos;ve made <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="capabilities-section">
          <div className="section-label">
            <span>02</span>
            <span>WHAT I BRING</span>
          </div>
          <div className="capability-list">
            <article>
              <span className="capability-index">01</span>
              <div>
                <h3>Websites</h3>
                <p>
                  Modern, easy-to-use websites made for people and built to
                  perform.
                </p>
              </div>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
            <article>
              <span className="capability-index">02</span>
              <div>
                <h3>eCommerce</h3>
                <p>
                  Considered storefronts that give great products the digital
                  home they deserve.
                </p>
              </div>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
            <article>
              <span className="capability-index">03</span>
              <div>
                <h3>Apps &amp; dApps</h3>
                <p>
                  Useful, well-crafted applications — from the web to Web3.
                </p>
              </div>
              <span className="capability-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="stack-section">
          <div className="section-label">
            <span>03</span>
            <span>IN MY TOOLKIT</span>
          </div>
          <div className="stack-content">
            <h2>Good work comes from the right mix.</h2>
            <div className="stack-tags">
              {experience.map((item) => <span key={item}>{item}</span>)}
            </div>
            <p className="learning-note">
              Currently exploring <strong>Spline</strong> and <strong>Unity</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const isWorksPage =
  window.location.pathname === "/works" ||
  window.location.pathname === "/about";

document.documentElement.classList.toggle("theme-works", isWorksPage);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>{isWorksPage ? <WorksPage /> : <HomePage />}</React.StrictMode>,
);
