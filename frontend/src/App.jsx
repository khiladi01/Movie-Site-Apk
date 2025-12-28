import { Routes , Route } from 'react-router-dom'  
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/user.jsx'
import Login from './pages/login.jsx'
import Register from './pages/registration.jsx'
import Profile from './pages/profile.jsx'
import User from './pages/user.jsx'
import Admin from './pages/admin.jsx'

function App() {

  return (
    <>
    <Navbar/>

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

    <Footer/>
    </>
  )
}

export default App
