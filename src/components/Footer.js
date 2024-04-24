import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-dark text-white'>
      <Container>
        <div className='row mt-5 p-5'>
          <div className='col'>
            <h2 className="mb-3" style={{ fontFamily: "Monotype Corsiva" }}>Contact us</h2>
            <h5> <Link className='text-white'><FaLocationDot />Location</Link></h5>
            <h5><Link className='text-white'><BsFillTelephoneFill /> Call +01 1234567890</Link></h5>
            <h5><Link className='text-white'> <FaEnvelope />feane@gmail.com</Link></h5>
          </div>

          <div className='col'>
            <h2 className='mb-3' style={{ fontFamily: "Monotype Corsiva" }}>Feane</h2>
            <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <h3>
              <Link className='text-white me-2'><FaFacebook /></Link>
              <Link className='text-white me-2'><AiFillTwitterCircle /></Link>
              <Link className='text-white me-2 '><FaLinkedin className='bg-white text-dark rounded-circle p-1' /></Link>
              <Link className='text-white me-2 '><FaInstagram className='bg-white text-dark rounded-circle p-1' /></Link>
              <Link className='text-white me-2'><FaPinterest /></Link>
            </h3>
          </div>

          <div className='col'>
            <h2 className='mb-3' style={{ fontFamily: "Monotype Corsiva" }}>Opening Hours</h2>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <p className='mt-4'>&copy;2024 All Rights Reserved By Feane</p>
        <p className='pb-4'>&copy; Distributed By Shrutika Desai</p>
      </Container >
    </div >
  )
}

export default Footer
