const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

// Nextra ships compiled Tailwind 4 CSS. Only run our Tailwind 3 compiler on
// source stylesheets that contain Tailwind directives, leaving that CSS intact.
module.exports = () => ({
  postcssPlugin: 'convertfast-tailwind',
  async Once(root, { result }) {
    let needsCompilation = false
    root.walkAtRules((rule) => {
      if (rule.name === 'tailwind' || rule.name === 'apply') needsCompilation = true
    })
    if (needsCompilation) {
      const compiled = await postcss([tailwindcss()]).process(root, result.opts)
      result.messages.push(...compiled.messages)
      // Keep Tailwind 3 preflight below Nextra utilities in the CSS cascade.
      const layer = postcss.atRule({ name: 'layer', params: 'convertfast' })
      layer.append(root.nodes)
      root.removeAll()
      root.append(layer)
    }
  },
})
module.exports.postcss = true
