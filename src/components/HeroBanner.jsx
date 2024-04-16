import Container from '@component/Container'
import HeroPattern from './HeroPattern'
import HeroGradient from './HeroGradient'
import BrandLogo from './BrandLogo'
import HeroComponentsPreview from './HeroComponentsPreview'
import HeroFeatures from './HeroFeatures'
import Link from 'next/link'
import HeroBadge from './HeroBadge'

export default function HeroBanner({ children, subtitle, title }) {
  return (
    <section className="bg-slate-900">
      <Container classNames="py-8 lg:py-12">
        <div className="relative isolate overflow-hidden lg:mb-40">
          <HeroPattern />
          <HeroGradient />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:flex lg:px-3 lg:py-32 xl:px-6">
            <div className="max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-lg lg:pt-8 xl:max-w-xl">
              <BrandLogo withText={false} size={'16'} />
              <h1 className="mt-6 bg-gradient-to-r from-gray-200/60 via-gray-200 to-gray-200/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                Get Any Info.
                No Censorship.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-xl md:leading-10">
                SchemeAI is the product you need if you need a Generative Pre-Trained Uncensored Transformer
              </p>
            </div>
            <div className="mx-auto ml-0 mt-16 grid w-full max-w-4xl auto-cols-max auto-rows-max grid-cols-2 gap-x-2 gap-y-4 lg:-mt-10 lg:ml-4 lg:grid-cols-2 xl:ml-32 xl:grid-cols-1">
              <HeroComponentsPreview />
            </div>
          </div>
        </div>
        <HeroFeatures />
      </Container>
    </section>
  )
}
