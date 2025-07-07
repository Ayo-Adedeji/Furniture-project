
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BedroomPage from './pages/BedroomPage'
import DiningPage from './pages/DiningPage'
import KitchenPage from './pages/KitchenPage'
import LivingRoomPage from './pages/LivingRoomPage'

function App() {
  

  return (
    <div>
     
      <Routes>
        <Route path='/' element={<LivingRoomPage/>} />
        <Route path='/bedroom' element={<BedroomPage/>} />
        <Route path='/dining' element={<DiningPage/>} />
      <Route path="kitchen" element={<KitchenPage/>} />
      </Routes>

      
    
    </div>
  )
}

export default App
