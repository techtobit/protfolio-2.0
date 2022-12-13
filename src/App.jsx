import AboutMeS3 from './Components/AboutMeS3'
import HeroSection from './Components/HeroSection'
import ProjectDetails from './Components/ProjectDetails'
import ProjectsS5 from './Components/ProjectsS5'
import StackHeaderS2 from './Components/StackHeaderS2'
import TechnicalSkillsS4 from './Components/TechnicalSkillsS4'
import './Style/Main.scss'
import './Style/StackHeaderS2.scss'

function App() {
  return (
    <div className='app' >
      {/* <HeroSection /> */}
      <StackHeaderS2 />
      <AboutMeS3 />
      <TechnicalSkillsS4 />
      <ProjectsS5 />
      <ProjectDetails />
    </div>
  )
}

export default App