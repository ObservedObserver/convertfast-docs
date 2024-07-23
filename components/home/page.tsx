import { HeroSection } from './hero-section'
import { FeatureSection } from './feature-section'
import { CTA } from './cta'
import { FAQ } from './faq'
import { PricingSection } from './pricing'

function LandingPage() {
  return (
    <>
      <HeroSection />
			<FeatureSection />
			<CTA />
			<FAQ />
			<PricingSection />
    </>
  )
}

export default LandingPage