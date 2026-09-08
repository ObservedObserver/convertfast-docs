import Link from "next/link";
import { Header, CopyCommand, TemplatePreview } from "./interactions";
import { ArrowIcon, Mark } from "./icons";
import s from "./marketing.module.css";

const sections = [
  "Hero",
  "Logo cloud",
  "Features",
  "Social proof",
  "Call to action",
  "FAQ",
  "Pricing",
];

export default function MarketingHome() {
  return (
    <div className={s.site}>
      <a className={s.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={s.container}>
        <Header />
      </div>
      <main id="main-content">
        <section
          className={`${s.hero} ${s.container}`}
          aria-labelledby="hero-heading"
        >
          <div className={s.heroCopy}>
            <a
              className={s.releasePill}
              href="https://www.npmjs.com/package/convertfast-ui"
            >
              <span className={s.statusDot} />
              v0.2.1 is here
              <span className={s.releaseDivider} />
              Next.js 14–16 <span aria-hidden="true">↗</span>
            </a>
            <h1 id="hero-heading">
              Your next landing page.
              <br />
              <em>Already started.</em>
            </h1>
            <p className={s.heroDescription}>
              Add an editable landing page to your Next.js project. ConvertFast
              puts React sections and shadcn/ui components straight into your
              codebase.
            </p>
            <div className={s.heroActions}>
              <Link className={s.primaryButton} href="/docs/installation">
                Build your first page <ArrowIcon />
              </Link>
              <a className={s.textLink} href="#templates">
                Explore the templates <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={s.heroFootnote}>
              Open source. MIT licensed. The code is yours.
            </p>
          </div>
          <div className={s.heroVisual}>
            <div className={s.visualHeader}>
              <span className={s.windowDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>your-next-project</span>
              <span className={s.visualLanguage}>TSX</span>
            </div>
            <div className={s.terminal}>
              <span className={s.terminalLabel}>01 / in your terminal</span>
              <CopyCommand compact command="npx convertfast-ui@latest init" />
              <p>
                <span aria-hidden="true">✓</span> Detect your Next.js version
                and router
              </p>
              <p>
                <span aria-hidden="true">✓</span> Use your shadcn configuration
              </p>
              <div className={s.terminalRule} />
              <code className={s.createCommand}>
                <span aria-hidden="true">$ </span>npx convertfast-ui@latest page
                create launch
                <br />
                <span className={s.commandIndent}>--template editorial</span>
              </code>
            </div>
            <div className={s.filePreview}>
              <div className={s.filePreviewLabel}>
                <span>02 / in your codebase</span>
                <span>app/launch/page.tsx</span>
              </div>
              <div className={s.codeAndBlocks}>
                <pre aria-label="Generated React component example">
                  <code>
                    <span className={s.codePurple}>
                      export default function
                    </span>
                    {" Page() {\n  return (\n    <>\n      "}
                    <span className={s.codeGreen}>&lt;HeroSection /&gt;</span>
                    {"\n      "}
                    <span className={s.codeGreen}>
                      &lt;FeatureSection /&gt;
                    </span>
                    {"\n      "}
                    <span className={s.codeMuted}>
                      {"{/* more sections */}"}
                    </span>
                    {"\n    </>\n  )\n}"}
                  </code>
                </pre>
                <div className={s.miniPage} aria-hidden="true">
                  <div className={s.miniNav}>
                    <i />
                    <span />
                    <span />
                  </div>
                  <div className={s.miniHero}>
                    <b />
                    <b />
                    <span />
                    <i />
                  </div>
                  <div className={s.miniCards}>
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className={s.miniFooter} />
                </div>
              </div>
            </div>
            <span className={s.visualNote}>
              A head start, down to the source.
            </span>
          </div>
        </section>

        <div className={s.compatibility}>
          <div className={s.container}>
            <span className={s.compatibilityLabel}>FITS YOUR STACK</span>
            <span>
              Next.js <b>14 / 15 / 16</b>
            </span>
            <span>App + Pages Router</span>
            <span>
              Tailwind <b>3 + 4</b>
            </span>
            <span>shadcn/ui</span>
            <span>TypeScript</span>
          </div>
        </div>

        <section
          className={`${s.section} ${s.container}`}
          id="templates"
          aria-labelledby="templates-heading"
        >
          <div className={s.sectionHeading}>
            <div>
              <p className={s.eyebrow}>
                <span>01</span> / THE TEMPLATES
              </p>
              <h2 id="templates-heading">
                Start with structure.
                <br />
                <em>Make it your own.</em>
              </h2>
            </div>
            <div className={s.sectionIntro}>
              <p>
                Two styles. Seven sections in each. Use a full landing page, or
                add the one block your project needs.
              </p>
              <Link className={s.textLink} href="/examples">
                View all examples <ArrowIcon />
              </Link>
            </div>
          </div>
          <TemplatePreview />
          <div className={s.sectionList} aria-label="Included section types">
            {sections.map((section, index) => (
              <span key={section}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                {section}
              </span>
            ))}
          </div>
        </section>

        <section
          className={s.workflowSection}
          aria-labelledby="workflow-heading"
        >
          <div className={s.container}>
            <div className={s.sectionHeading}>
              <div>
                <p className={s.eyebrow}>
                  <span>02</span> / THE WORKFLOW
                </p>
                <h2 id="workflow-heading">
                  From your terminal
                  <br />
                  to your next commit.
                </h2>
              </div>
              <p className={s.sectionIntro}>
                Start inside a Next.js project with shadcn/ui configured.
                ConvertFast detects the setup and writes the files where they
                belong.
              </p>
            </div>
            <div className={s.steps}>
              <article>
                <span className={s.stepNumber}>01</span>
                <h3>Connect your project.</h3>
                <p>
                  Initialize once. Detect the installed Next.js version, router,
                  and component aliases.
                </p>
                <CopyCommand command="npx convertfast-ui@latest init" />
              </article>
              <article>
                <span className={s.stepNumber}>02</span>
                <h3>Give your page a route.</h3>
                <p>
                  Create a page at <code>/launch</code>. Choose the default or
                  editorial template.
                </p>
                <CopyCommand command="npx convertfast-ui@latest page create launch --template editorial" />
              </article>
              <article>
                <span className={s.stepNumber}>03</span>
                <h3>Edit the actual components.</h3>
                <p>
                  Replace the sample content, adjust the sections, and commit
                  the code with the rest of your app.
                </p>
                <Link className={s.stepDocLink} href="/docs/cli">
                  Read the CLI reference <ArrowIcon />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section
          className={`${s.ownershipSection} ${s.container}`}
          aria-labelledby="ownership-heading"
        >
          <div>
            <p className={s.eyebrow}>
              <span>03</span> / YOUR CODEBASE
            </p>
            <h2 id="ownership-heading">
              Keep working
              <br />
              the way you work.
            </h2>
            <p className={s.ownershipIntro}>
              The output is React and TypeScript. Open the files in your editor,
              review a diff, and change what you need.
            </p>
            <Link
              className={s.textLink}
              href="https://github.com/ObservedObserver/convertfast-ui"
            >
              Explore the source <ArrowIcon />
            </Link>
          </div>
          <div className={s.ownershipDetails}>
            <article>
              <span aria-hidden="true">{"{ }"}</span>
              <div>
                <h3>Components you can change</h3>
                <p>
                  Page sections live in your project. Update the markup,
                  Tailwind classes, and shadcn/ui components directly.
                </p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">↳</span>
              <div>
                <h3>A page, or just a block</h3>
                <p>
                  Generate a full page with <code>page create</code>, or install
                  a section with <code>block add hero-section</code>.
                </p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">&gt;_</span>
              <div>
                <h3>Works with your coding agent</h3>
                <p>
                  Let an agent run the CLI and edit the generated files. Follow
                  the documented workflow and review its changes.
                </p>
                <Link className={s.textLink} href="/docs/skills">
                  Read the agent workflow <ArrowIcon />
                </Link>
              </div>
            </article>
            <article>
              <span aria-hidden="true">©</span>
              <div>
                <h3>MIT licensed</h3>
                <p>
                  Use the package and templates in personal or commercial
                  projects under the MIT license. Keep the required license
                  notice.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={s.faqSection} aria-labelledby="faq-heading">
          <div className={`${s.container} ${s.faqLayout}`}>
            <div>
              <p className={s.eyebrow}>A FEW DETAILS</p>
              <h2 id="faq-heading">
                Before you
                <br />
                start building.
              </h2>
              <Link className={s.textLink} href="/docs/installation">
                Read the documentation <ArrowIcon />
              </Link>
            </div>
            <div className={s.faqs}>
              <details>
                <summary>
                  What do I need before running the CLI?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  A TypeScript Next.js project with shadcn/ui initialized and a
                  supported Node.js version. Next.js 14, 15, and 16, both
                  routers, and Tailwind CSS 3 and 4 are covered. The{" "}
                  <Link href="/docs/installation">installation guide</Link>{" "}
                  lists the setup commands and runtime requirements.
                </p>
              </details>
              <details>
                <summary>
                  Is ConvertFast free to use?<span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. The CLI and templates are open source under the MIT
                  license. You can use and modify them for commercial projects.
                  You cover your own hosting and any services you add.
                </p>
              </details>
              <details>
                <summary>
                  Does it generate my copy with AI?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  The CLI generates pages from bundled templates. It does not
                  write personalized copy or call an AI model. You can use your
                  own coding agent to customize the generated files with the{" "}
                  <Link href="/docs/skills">agent workflow</Link>.
                </p>
              </details>
              <details>
                <summary>
                  Can I add a section to an existing site?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. Use <code>block add</code> to install a single section
                  through shadcn. Use <code>page add</code> to add a section to
                  a ConvertFast page. See the{" "}
                  <Link href="/docs/cli">CLI reference</Link> for the available
                  options.
                </p>
              </details>
              <details>
                <summary>
                  What should I change before publishing?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Replace sample branding, copy, testimonials, pricing, and
                  links with your own content. Add page metadata and check the
                  layout, accessibility, and interactions for your project.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section
          className={`${s.finalCta} ${s.container}`}
          aria-labelledby="start-heading"
        >
          <span className={s.ctaMark} aria-hidden="true">
            <Mark />
          </span>
          <p className={s.eyebrow}>MAKE SOMETHING OF IT</p>
          <h2 id="start-heading">
            A good place to start.
            <br />
            <em>Your place to take it.</em>
          </h2>
          <Link className={s.primaryButton} href="/docs/installation">
            Get started with ConvertFast <ArrowIcon />
          </Link>
          <p>One CLI. Your next landing page.</p>
        </section>
      </main>
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerBrand}>
            <Link href="/" className={s.brand}>
              <Mark />
              <span>ConvertFast.</span>
            </Link>
            <p>Editable landing pages for Next.js.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/docs/installation">Documentation</Link>
            <Link href="/examples">Examples</Link>
            <Link href="/blog">Journal</Link>
            <a href="https://github.com/ObservedObserver/convertfast-ui">
              GitHub ↗
            </a>
            <a href="https://www.npmjs.com/package/convertfast-ui">npm ↗</a>
          </nav>
          <div className={s.footerBottom}>
            <span>Built in the open.</span>
            <a href="https://github.com/ObservedObserver/convertfast-ui/blob/main/LICENSE">
              MIT license
            </a>
            <span>© {new Date().getFullYear()} ConvertFast</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
