import About from './components/About'
import Experinces from './components/Experiences'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import SocialLink from './components/SocialLink'


function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experinces/>

      <SocialLink/>
    </>
  )
}

export default App
