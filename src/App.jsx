import { Toaster } from 'react-hot-toast'
import AboutMeS3 from './Components/AboutMeS3'
import ContactWithMe from './Components/ContactWithMe'
import FAQs from './Components/FAQs'
import HeroSection from './Components/HeroSection'
import ProjectsS5 from './Components/ProjectsS5'
import StackHeaderS2 from './Components/StackHeaderS2'
import TechnicalSkillsS4 from './Components/TechnicalSkillsS4'
import './Style/Main.scss'
import './Style/StackHeaderS2.scss'
import WorkExperience from './Components/WorkExperience'
import Certificate from './Components/Certificate'


function App() {
  return (

    <div className='app' >
      <HeroSection />
      <StackHeaderS2 />
      <AboutMeS3 />
      <WorkExperience/>
      <Certificate/>
      <TechnicalSkillsS4 />
      <ProjectsS5 />
      <FAQs />
      <ContactWithMe />
      <Toaster />
    </div>
  )
}

export default App
