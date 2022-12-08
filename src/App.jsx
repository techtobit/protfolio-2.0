import AboutMeS3 from './Components/AboutMeS3'
import HeroSection from './Components/HeroSection'
import StackHeaderS2 from './Components/StackHeaderS2'
import TechnicalSkillsS3 from './Components/TechnicalSkillsS3'
import './Style/Main.scss'
import './Style/StackHeaderS2.scss'

function App() {
  return (
    <div className='app' >
      {/* <HeroSection /> */}
      <StackHeaderS2 />
      <AboutMeS3 />
      {/* <TechnicalSkillsS3 /> */}
    </div>
  )
}

export default App
