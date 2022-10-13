import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

const About = () => {
  const acerca = [
    { id: 1, title: 'Who I am?', sobre: 'Certified Public Accountant who provides comprehensive auditing, tax, accounting and advisory services. People who show respect and teamwork, are energetic, enthusiastic, and build relationships based on doing the right thing.' },
    { id: 2, title: 'Our mission', sobre: 'Provide the small and medium industry with a quality service based on our knowledge and experience, based on the premise of always providing added value to ensure the full satisfaction of our customers.' },
  ]

  const client = [
    { id: 1, name: 'Sr. Efren Garza', url: 'https://firebasestorage.googleapis.com/v0/b/shoesstore-97a8f.appspot.com/o/Screenshot%202022-10-13%20at%2012-40-45%20(1)%20Facebook.png?alt=media&token=7be10e6a-62b6-4600-8cfa-c986acbf21a3', sobre: 'Carlos is very efficient and fast. I make my annual declaration in minutes' },
    { id: 2, name: 'Srta. Monica fuentes', url: 'https://firebasestorage.googleapis.com/v0/b/shoesstore-97a8f.appspot.com/o/proxy.jpg?alt=media&token=fed7b887-6201-41e6-9afa-bee14a376c3c', sobre: 'Mr. Carlos helped me with my business. I make all my tax clarifications very quickly ' },
  ]
  return (
    <div className='about'>
      <Nav />
      <div className='about1' >
        <h3 className='title4'>Discover today the future of services and new technologies that will enhance the growth of your company.</h3>
        <div className='about2'>
          {acerca.map(datos => (
            <ul className='about1' key={datos.id}>
              <p className='sobre1'>{datos.title}</p>
              <p className='sobre2'>{datos.sobre}</p>
            </ul>
          ))}
        </div>  
      </div>

      <br /><br />
      <div className='about1'>
        <p className='sobre3'>Some of our customers</p>
        <div className='about3'>
          {client.map(persona => (
            <div className='about4' key={persona.id} style={{ border: 'solid 1px', borderRadius: '1rem', padding: '1.3rem' }}>
              <img src={persona.url} alt="People" className='people' />
              <div>
                <p className='sobre4'>{persona.name}</p>
                <p className='sobre4'>{persona.sobre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: '30%', marginLeft: '4%', marginTop: '10rem' }}>
        <Link to='/Servicios' className='btn btn-outline-light'>Services</Link>
      </div>
      <Footer />
    </div>
  )
}

export default About