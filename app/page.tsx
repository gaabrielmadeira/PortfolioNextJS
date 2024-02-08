import { HeroSection } from './pages/home/heroSection'
import { HighLightProjects } from './pages/home/highLightProjects'
import { KnowTechs } from './pages/home/knowTechs'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighLightProjects />
    </>
  )
}
