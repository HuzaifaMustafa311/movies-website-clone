import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='app'>uiids</div>
      <SimpleBottomNavigation />
    </>
  )
}

export default App
