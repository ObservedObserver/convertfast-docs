import Link from "next/link"

import { ArrowIcon, Mark } from "@/components/marketing/icons"
import { ColorPickerDemo, CopyInstallButton } from "./demo"
import s from "./landing.module.css"

const installCommand = "npx shadcn@latest add https://convertfa.st/r/color-picker.json"

const usageCode = `"use client"

import { useState } from "react"
import { ColorPicker } from "@/components/color-picker"

export function BrandColorField() {
  const [color, setColor] = useState("#7C3AED")

  return (
    <ColorPicker
      value={color}
      onValueChange={setColor}
      name="brandColor"
    />
  )
}`

const apiRows = [
  ["value", "string", "Controlled hex color"],
  ["defaultValue", "string", "Initial uncontrolled value"],
  ["onValueChange", "(value: string) => void", "Runs when the selected color changes"],
  ["showAlpha", "boolean", "Adds alpha and returns #RRGGBBAA"],
  ["presets", "string[]", "Replaces the default preset swatches"],
  ["name", "string", "Adds a hidden form field"],
]

export default function ColorPickerLanding() {
  return (
    <div className={s.page}>
      <a className={s.skipLink} href="#main-content">Skip to content</a>
      <header className={s.header}>
        <Link href="/" className={s.brand} aria-label="ConvertFast home">
          <Mark />
          <span>ConvertFast<span className={s.brandDot}>.</span></span>
        </Link>
        <nav aria-label="Page navigation">
          <a href="#demo">Demo</a>
          <a href="#install">Install</a>
          <a href="#api">API</a>
        </nav>
        <a className={s.githubLink} href="https://github.com/ObservedObserver/convertfast-ui">GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className={s.hero} aria-labelledby="color-picker-heading">
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>OPEN SOURCE · SHADCN REGISTRY</p>
            <h1 id="color-picker-heading">A color picker<br />for <em>shadcn/ui.</em></h1>
            <p className={s.heroDescription}>A compact React color picker that fits a shadcn project. Install the source, change the Tailwind classes, and keep the component in your codebase.</p>
            <div className={s.heroActions}>
              <a className={s.primaryButton} href="#install">Install the component <ArrowIcon /></a>
              <a className={s.textLink} href="#demo">Try the live example <span aria-hidden="true">↓</span></a>
            </div>
            <div className={s.compatibility} aria-label="Component compatibility">
              <span>React</span><span>TypeScript</span><span>Tailwind CSS</span><span>MIT</span>
            </div>
          </div>
          <div id="demo"><ColorPickerDemo /></div>
        </section>

        <section className={s.installSection} id="install" aria-labelledby="install-heading">
          <div>
            <p className={s.eyebrow}>01 / INSTALL</p>
            <h2 id="install-heading">One command.<br />The source is yours.</h2>
            <p>The shadcn CLI adds the component, its popover and button dependencies, and <code>react-colorful</code>. It respects the aliases in your <code>components.json</code>.</p>
          </div>
          <div className={s.commandCard}>
            <span>Terminal</span>
            <div><code>{installCommand}</code><CopyInstallButton /></div>
            <p>Already using ConvertFast? <code>npx convertfast-ui@latest block add color-picker</code> works too.</p>
          </div>
        </section>

        <section className={s.usageSection} aria-labelledby="usage-heading">
          <div className={s.codeCard}>
            <div className={s.codeHeader}><span>components/brand-color-field.tsx</span><span>TSX</span></div>
            <pre><code>{usageCode}</code></pre>
          </div>
          <div className={s.usageCopy}>
            <p className={s.eyebrow}>02 / USE IT</p>
            <h2 id="usage-heading">Controlled when you need it. Simple when you do not.</h2>
            <p>Pass <code>value</code> and <code>onValueChange</code> to connect the picker to application state. For a settings form, pass <code>name</code> and the component adds a hidden input with the current hex value.</p>
            <ul>
              <li>Hex, shorthand hex, and eight-digit hex input</li>
              <li>Optional alpha channel with <code>showAlpha</code></li>
              <li>Custom preset colors</li>
              <li>Keyboard focus and labeled controls</li>
            </ul>
          </div>
        </section>

        <section className={s.apiSection} id="api" aria-labelledby="api-heading">
          <div className={s.sectionHeading}>
            <div><p className={s.eyebrow}>03 / API</p><h2 id="api-heading">The props you will actually use.</h2></div>
            <p>All color values normalize to uppercase hex. Invalid typed values reset to the last valid color when the field loses focus.</p>
          </div>
          <div className={s.tableWrap}>
            <table>
              <thead><tr><th>Prop</th><th>Type</th><th>What it does</th></tr></thead>
              <tbody>{apiRows.map(([prop, type, meaning]) => <tr key={prop}><td><code>{prop}</code></td><td><code>{type}</code></td><td>{meaning}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className={s.faqSection} aria-labelledby="faq-heading">
          <div><p className={s.eyebrow}>COMMON QUESTIONS</p><h2 id="faq-heading">About this shadcn color picker.</h2></div>
          <div className={s.faqs}>
            <details open><summary>Does shadcn/ui include a color picker?<span aria-hidden="true">+</span></summary><p>The official component catalog does not currently include one. This component follows the same source-owned approach and composes shadcn's Button and Popover.</p></details>
            <details><summary>Can I use it without alpha?<span aria-hidden="true">+</span></summary><p>Yes. Alpha is off by default, so the picker returns six-digit hex values. Set <code>showAlpha</code> when your UI needs transparency.</p></details>
            <details><summary>Can I change the design?<span aria-hidden="true">+</span></summary><p>Yes. The registry installs a TSX file into your project. Edit its Tailwind classes, preset list, labels, or API like any other local component.</p></details>
          </div>
        </section>

        <section className={s.finalCta}>
          <Mark />
          <p className={s.eyebrow}>READY TO USE</p>
          <h2>Add the missing piece<br />to your shadcn project.</h2>
          <a className={s.primaryButton} href="#install">Copy the install command <ArrowIcon /></a>
        </section>
      </main>

      <footer className={s.footer}>
        <Link href="/" className={s.brand}><Mark /><span>ConvertFast.</span></Link>
        <p>Open source React components for shadcn projects.</p>
        <nav aria-label="Footer navigation"><Link href="/docs/installation">Docs</Link><a href="https://github.com/ObservedObserver/convertfast-ui">GitHub</a><a href="https://www.npmjs.com/package/convertfast-ui">npm</a></nav>
      </footer>
    </div>
  )
}
