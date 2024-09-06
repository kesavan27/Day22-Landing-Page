import './App.css'
import NavBar from './NavBar'
import Content from './IntroContent'
import LiveClassFeature from './Live-Class-Feature'
import RecordedClass from './Record-Class-Feature'
import Placement from './Placement'
import Footer from './Footer-Content'

function App() {
  return (
    <div>
      <NavBar />
      <Content/>
      <LiveClassFeature/>
      <RecordedClass/>
      <Placement/>
      <Footer/>
    </div>
  )
}

export default App
