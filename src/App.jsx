import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

function App() {
  return (
  <>
  <NavBar />
  <Routes>
    <Route path='/about' element={<About />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/projects' element={<Projects />}></Route>
    <Route path="/resume" element={<Resume />}></Route>
  </Routes>
  </>
  );
}
export default App;