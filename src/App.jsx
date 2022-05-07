import { useState } from 'react'
import Header from './components/Header'
import './styles/normalize.css'
import './styles/index.css'
import Artista from './components/Artista'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Obras from './components/Obras'

function App() {

  return (
    <>
      <Header />
      <Obras />
      <Artista />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
