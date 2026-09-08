"use client"

import { useState, type CSSProperties } from "react"

import { ColorPicker } from "@/components/generated/color-picker"
import s from "./landing.module.css"

const installCommand = "npx shadcn@latest add https://convertfa.st/r/color-picker.json"

export function ColorPickerDemo() {
  const [color, setColor] = useState("#7C3AED")

  return (
    <div className={s.demoCard}>
      <div className={s.demoToolbar}>
        <span>Live example</span>
        <span className={s.liveDot}>Interactive</span>
      </div>
      <div className={s.demoCanvas} style={{ "--demo-color": color } as CSSProperties}>
        <div className={s.settingsPanel}>
          <div>
            <span className={s.fieldLabel}>Brand accent</span>
            <p>Used for buttons, links, and focus rings.</p>
          </div>
          <ColorPicker value={color} onValueChange={setColor} aria-label="Choose the demo accent color" />
        </div>
        <div className={s.previewCard}>
          <span className={s.previewEyebrow}>Weekly report</span>
          <strong>12,480</strong>
          <p>Visitors in the last 7 days</p>
          <div className={s.previewTrack}><span /></div>
          <button type="button">View report</button>
        </div>
      </div>
      <div className={s.demoValue}>
        <span>Current value</span>
        <code>{color}</code>
      </div>
    </div>
  )
}

export function CopyInstallButton() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle")

  async function copy() {
    try {
      await navigator.clipboard.writeText(installCommand)
      setState("copied")
    } catch {
      setState("error")
    }
  }

  return (
    <>
      <button type="button" className={s.copyButton} onClick={copy}>
        {state === "copied" ? "Copied" : "Copy"}
      </button>
      <span className={s.srOnly} role="status">
        {state === "copied" ? "Install command copied." : state === "error" ? "Copy failed. Select the command manually." : ""}
      </span>
    </>
  )
}
