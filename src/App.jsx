import Hero from './components/Hero/Hero'
import ProjectGrid from './components/ProjectGrid/ProjectGrid'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import StyleGuide from './components/StyleGuide/StyleGuide'
import { builtAndDeployed, researchAndDesign } from './data/projects'

const isStyleGuide = window.location.search.includes('styleguide')

function App() {
  if (isStyleGuide) return <StyleGuide />

  return (
    <main>
      <Hero />
      <ProjectGrid title="Built & Deployed" projects={builtAndDeployed} />
      <ProjectGrid title="Research & Design" projects={researchAndDesign} />
      <Partners />
      <Contact />
    </main>
  )
}

export default App