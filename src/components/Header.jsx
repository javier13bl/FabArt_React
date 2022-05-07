import bgVideo from '../video/galeria-video.mp4'

const Header = () => {
  return (
    <>
      <header className='header'>
          <div className='contenedor barra'>
              <h1>Buitrago<span>Art</span></h1>

              <nav className='navegacion'>
                  <a href='#'>Inicio</a>
                  <a href='#obras'>Obras</a>
                  <a href='#artista'>Artista</a>
                  <a href='#contacto'>Contacto</a>
              </nav>
          </div>
      </header>
      <div className='video'>
          <div className='overlay'>
              <div className='contenedor texto-video'>
                  <h2>Fabián Buitrago López</h2>
                  <p>Artista Colombiano - NFT - Crypto Art</p>
              </div>
          </div>
          <video autoPlay muted loop>
              <source src={bgVideo} type='video/mp4'/>
          </video>
      </div>
    </>
  )
}

export default Header