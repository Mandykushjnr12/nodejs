import './App.css'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
import Navigation from './component/Navigation'

function App() {
  

  return (
  

    <>
      <Navigation/>
      <Routes>
       <Route path="/" element={<DashBoard/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/home" element={<Home/>}/>


      </Routes>
    
    </>
  )
}

export default App  