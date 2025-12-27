import { Routes , Route } from 'react-router-dom'  
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/user.jsx'
import Login from './pages/login.jsx'
import Register from './pages/registration.jsx'

function App() {

  return (
    <>
    <Navbar/>

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
        </Routes>

    <Footer/>
    </>
  )
}

export default App
