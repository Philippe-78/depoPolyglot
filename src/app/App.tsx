
import './App.css'
import { Footer } from '../components/footer/Footer'

import { Header } from '../components/header/Header'
import { NavBar } from '../components/navBar/NavBar'
import {Body} from '../components/body/Body'

function App() {
  

  return (
    <div className='app'>
      <Header/>
      <div className="main">
      <NavBar/>
      <Body/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
