import React, { useState, useEffect } from 'react';

const Obras = () => {
    const [obras, setObras] = useState([]);
    const [nombreObra, setNombreObra] = useState('');

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://sleepy-tor-34077.herokuapp.com/obras/'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setObras(resultado);
        }
        consultarAPI()
    }, []);

    const handleLink = (e) => {
        setNombreObra(e.target.name)
    }

  return (
    <main className='contenedor' id='obras'>
        <h2 className='titulo-seccion'>Nuevas obras</h2>
        <div className='obras'>
            {obras.map((obra) => (
                <div className='obra' key={obra.id}>
                    <img loading='lazy' src={obra.imagen.url} alt='imagen obra'/>
                    <div className='texto-obra'>
                        <h3>{obra.nombre}</h3>
                        <div className='info-obra'>
                            <p>${obra.precio} COP</p>
                            <a onClick={handleLink} href={`https://api.whatsapp.com/send?phone=573043328159&text=%C2%A1Hola%20%F0%9F%91%8B!%20Quisiera%20saber%20m%C3%A1s%20de%20esta%20obra%3A%20*${nombreObra}*%20%F0%9F%8C%90`} name={obra.nombre} target='_blank'>Preguntar</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Obras