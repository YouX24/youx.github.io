import NavBar from './components/NavBar'
import Introduction from './components/Intro'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Introduction/>
        <Experience/>
        <Education/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
