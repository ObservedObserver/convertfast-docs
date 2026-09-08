import ColorPickerLanding from '@/components/color-picker/landing'
import { buildPageMetadata, serializeJsonLd } from '@/lib/seo'
import { SITE_URL } from '@/site.config'

const title = 'shadcn Color Picker Component'
const description = 'Install an accessible shadcn color picker for React with one command. Try the live demo, then add hex input, alpha support, presets, and TypeScript source.'

export const metadata = buildPageMetadata({ title, description, path: '/shadcn-color-picker' })

export default function ShadcnColorPickerPage() {
  const url = `${SITE_URL}/shadcn-color-picker`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        name: 'ConvertFast shadcn Color Picker',
        description,
        url,
        codeRepository: 'https://github.com/ObservedObserver/convertfast-ui',
        programmingLanguage: ['TypeScript', 'React'],
        runtimePlatform: 'Next.js',
        license: 'https://opensource.org/license/mit',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does shadcn/ui include a color picker?',
            acceptedAnswer: { '@type': 'Answer', text: 'The shadcn/ui component catalog does not currently include a color picker. This registry component follows the same copy-the-source model and uses shadcn button and popover components.' },
          },
          {
            '@type': 'Question',
            name: 'Can I use the color picker as a controlled component?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pass value and onValueChange, or use defaultValue for an uncontrolled color picker.' },
          },
          {
            '@type': 'Question',
            name: 'Does it support transparent colors?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Set showAlpha to use eight-digit hex colors and display an alpha control.' },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
      <ColorPickerLanding />
    </>
  )
}
