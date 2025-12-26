import { Routes , Route } from 'react-router-dom'  
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'

function App() {

  return (
    <>
    <Navbar/>

         <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    <Footer/>
    </>
  )
}

export default App
