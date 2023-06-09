import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Coin from './components/coin/Coin'
import Bingo from './components/bingo/Bingo'

function App() {

  return (
    <>
      <div className='w-full h-screen '>
        <Routes>
          <Route path='/coin' element={<Coin />} />
          <Route path='/bingo' element={<Bingo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
