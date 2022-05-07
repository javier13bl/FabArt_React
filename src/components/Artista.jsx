import imgArtista from '../img/artista.jpg'

const Artista = () => {
  return (
    <section className='contenedor' id='artista'>
        <h2 className='titulo-seccion'>Artista</h2>
        <article className='artista'>
            <div className='imagen'>
                <img loading='lazy' src={imgArtista} alt='imagen artista'/>
            </div>
            <div className='texto-artista'>
                <h3>Fabián Buitrago López</h3>
                <h4>Artista Colombiano - NFT - Crypto Art</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga asperiores maxime distinctio rem doloremque?</p>
            </div>
        </article>
    </section>
  )
}

export default Artista