import About from './sections/About'
import ClientsSuggestions from './sections/ClientSuggestions';
import Contact from './sections/Contact';
import WorkExperience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects' ;
function App() {

  return (
    <main>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <WorkExperience></WorkExperience>
        <ClientsSuggestions></ClientsSuggestions>
        <Contact></Contact>
        <Footer></Footer>
    </main>
   
  )
}

export default App
