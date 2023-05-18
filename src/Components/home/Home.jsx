import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import About from '../about/About'
import Servicios from '../about/Servicios'
import { MdPeopleAlt } from 'react-icons/md'
import { IoMdSchool } from 'react-icons/io'
import { FcBusinessman } from 'react-icons/fc'

import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

const Home = () => {
  const notas = [
    { id: 1, name: "¿Qué es el CFDI?", description: "CFDI significa Comprobante Fiscal Digital por Internet, también se le conoce como factura electrónica. Este comprobante es digital y debe cumplir con los requisitos establecidos en el art 29-A del Código Fiscal de la Federación (CFF) para que sea un comprobante válido. Debido a que esta factura es digital y no impresa, ésta es generada por una herramienta electrónica y transferida por vía Internet que es un medio electrónico. De ahí surge el término factura electrónica." },
    { id: 2, name: "CoDI", description: "CoDi® es una plataforma desarrollada por Banco de México para facilitar las transacciones de pago y cobro a través de transferencias electrónicas, de forma rápida, segura y eficiente, a través de teléfonos móviles." },
    { id: 3, name: "Facturar en 2023", description: "Para su obtención, las personas morales o físicas deberán inscribirse en el Registro Federal del Contribuyente (RFC) y realizar la solicitud. Así mismo, también podrán obtener un Certificado de Sello Digital para toda su facturación o bien para cada una de sus sucursales y establecimientos." },
    { id: 4, name: "Donde invertir?", description: "Si eres una persona que va iniciando en el mundo de las inverciones te recomendamos hacerlo en estas siguientes plataformas: MercadoPago, CetesDirecot, Hey BancO. GBM, Nu. Ya que estas plataformas te daran un ingreso estable al ofrecer una taza anual de entre 8% a 11% por lo cual podria ayudarte a lograr tu meta de aumentar tu dinero." },
  ]

  const user = [
    { id: 1, name: 'ICB', resena: "Instituto de aprendizaje de lenguas extranjeras", img: <IoMdSchool />, coment: "Esta empresa de jóvenes contadores me ha sorprendido por su eficacia y capacidad de respuesta ante situaciones urgentes. Me encanta el servicio donde ellos te gestionan las facturas de tus gastos (como gasolinas) sólo enviándoles la foto del ticket" },
    { id: 2, name: 'Adecco', resena: "Adecco. La empresa líder mundial en soluciones de fuerza laboral, que ofrece personal temporal, colocación permanente y tercerización en todos los sectores.", img: <MdPeopleAlt />, coment: "Es un servicio puntual y responsable, sin duda un gran aporte para tener tranquilidad fiscal" },
    { id: 3, name: 'Efren Garza', resena: "Desarrollador de software. Programador web y movil", img: <FcBusinessman />, coment: "Servicio profesional, amigable y acompañamiento en todo momento" },
  ]
  return (
    <div>
      <div className='header'>
        <Nav />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide > <div className='home'>


            <div className='abouttxt'>
              <h2 className='tt1'>Descubre la calidad   </h2>
              <h2 className='tt1'>e innovación de</h2>
              <h2 className='tt1'>nuestro servicios </h2>

              <a href='/#contactame' className='btn btn-outline-light'>Mas informacion</a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className='home'>


            <div className='abouttxt' >
              <h2 style={{ fontSize: "5rem", color: "#ffffff", fontFamily: "sans-serif", fontWeight: "100" }}>Charly  </h2>
              <br /><br />
              <h2 >Tu asesor financiero.</h2>
              <h2 >La persona que te ayudara a impulsar tu negocio.</h2><br />
              <h2 style={{ color: "white" }}>¡Conóceme!</h2>
              <a href='/#contactame' className='btn btn-outline-light'>Mas informacion</a>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>

      </div>
      <About />
      <Servicios />


      <div style={{ background: "#ffffff", height: "150px", width: "100%", color: " rgba(36, 36, 36, 0.8)" }}>
        <h1 style={{ textAlign: "center", marginTop: "3rem", fontSize: "2.5rem" }}>Informate</h1>
      </div>
      <div className='contenedor-blog'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {notas.map(value => (

            <SwiperSlide key={value.id}> <div >


              <div>
                <h2  style={{ fontSize: "3rem", marginBottom: "3rem", marginTop: "3rem" }}>{value.name}</h2>
                <p className='pblog' >{value.description}</p>

              </div>
            </div>
            </SwiperSlide>
          ))

          }

        </Swiper>
        <div style={{ background: "#ffffff", height: "150px", width: "100%", color: " rgba(36, 36, 36, 0.8)" }}>
          <h1 style={{ textAlign: "center", marginTop: "5rem", fontSize: "2.5rem"}}>Reseñas</h1>
        </div>
        <div style={{ background: "#ffffff", height: "660px", width: "100%", color: " rgba(36, 36, 36, 0.8)" }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {user.map(value => (

              <SwiperSlide key={value.id}> <div >


                <div className='client-count'>
                  <article>
                    <h2 className='title-client'>{value.name}</h2>
                    <p className='text-client'>{value.resena}</p>

                    <p className='img-client'>{value.img}</p>

                  </article>
                  <article style={{ borderLeft: "solid 1px black" }}>
                    <br /><br /><br />
                    <p className='text-client2'>{value.coment}</p>

                  </article>

                </div>
              </div>
              </SwiperSlide>
            ))

            }

          </Swiper>
        </div>
        <div style={{ background: "black", width: "100%", height: "500px", padding: "3rem" }} id='contactame'>
          <a href="https://api.whatsapp.com/send?phone=2462143884" className="btn btn-outline-success contact-me"><BsWhatsapp /> WhatsApp</a>
          <a href="https://www.instagram.com/charly_b.rr/" className="btn btn-outline-danger contact-me" ><AiFillInstagram /> Instagram</a>
          <a href="https://www.facebook.com/carlitoos.utlilayatzi" className="btn btn-outline-primary contact-me"><BsFacebook /> Facebook</a>

        </div>
      </div>
    </div>
  )
}

export default Home