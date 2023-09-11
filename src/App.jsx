import Introduction from './components/Intro'
import Education from './components/Education'
import Courses from './components/Courses'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Introduction/>
      <div className="min-h-screen bg-slate-500	">
        <Education/>
        <Courses/>
      </div>
      <div className="min-h-screen">
        <Projects/>
      </div>
    </>
  )
}

export default App
