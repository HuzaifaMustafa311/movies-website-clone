import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Switch } from '@mui/material'
import Trending from './components/Pages/Trending/Trending'
import Movies from './components/Pages/Movies/Movies'
import Series from './components/Pages/Series/Series'
import Search from './components/Pages/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='app'>
          <Container>
            <Switch>
              <Route path='/' Component={Trending} exact />
              <Route path='/movies' Component={Movies} />
              <Route path='/series' Component={Series} />
              <Route path='/search' Component={Search} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  )
}

export default App
