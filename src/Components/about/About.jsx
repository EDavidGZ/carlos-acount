import React from 'react'
import {FaPeopleCarry} from 'react-icons/fa'
import {BsFillCompassFill} from 'react-icons/bs'
import {BiFullscreen} from 'react-icons/bi'
import {FiKey} from 'react-icons/fi'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {AiOutlineBook} from 'react-icons/ai'
import {FaReadme} from 'react-icons/fa'
import {IoMdPaper} from 'react-icons/io'
import {GiMetalSkirt} from 'react-icons/gi'

const About = () => {
  const acerca = [
    { id: 1, title: 'Empatía ', sobre: 'Comprendemos las necesidades de cada cliente. Entendemos tus necesidades. ', img: <FaPeopleCarry />},
    { id: 2, title: 'Compromiso', sobre: 'Estamos a tu disposición en todo momento, nos ajustamos a tus tiempos. ', img: <BsFillCompassFill /> },
    { id: 3, title: 'Honestidad', sobre: 'Hacemos el trabajo que nos gusta y por eso somos transparentes.  ', img: <BiFullscreen /> },
    { id: 4, title: 'Confidencialidad ', sobre: 'Buen uso de tu información. Entendemos y respetamos la importancia de tu privacidad. Encriptamos tu información para mantenerla segura. ', img: <FiKey /> },
  ]

  const works = [
    { id: 1, name: 'Contabilidad', logo: <BsFillCalculatorFill /> },
    { id: 2, name: 'Nomina', logo: <AiOutlineBook /> },
    { id: 3, name: 'Administracion', logo: <FaReadme /> },
    { id: 4, name: 'Facturacion', logo: <IoMdPaper /> },
    { id: 5, name: 'Estrategia', logo: <GiMetalSkirt /> },
  ]
  return (
    <div className='about' id='about'>
      <div className='about1' >
        <h3 className='title'>¡Conóceme!</h3>
        <div className='about2'>
          {acerca.map(datos => (
            <ul className='skills' key={datos.id}>
              <p className='sobre2'>{datos.img}</p>
              <p className='sobre1'>{datos.title}</p>
              <p >{datos.sobre}</p>
            </ul>
          ))}
        </div>  
      </div>

      <br /><br />

      <div className='about1' >
        <h3 className='secondtitle'>Servicios</h3>
        <p style={{textAlign: "center"}} className='pchica'>Somos una empresa especializada en servicios contables que brinda una atención personalizada y ajustada a cada cliente. </p>
        <div className='about3'>
          {works.map(datos => (
            <ul  key={datos.id}>
              <article className='services' style={{fontSize:"1.5rem", display: "flex", flexDirection: "row", padding: "1.5rem"}}>{datos.name}
              <p style={{paddingLeft:"2rem", color: "#111018"}}>{datos.logo}</p>
              </article>
              
             
            </ul>
          ))}
        </div>  
      </div>
    </div>
  )
}

export default About