import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

function Customers() {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div>
      <h1 style={{ fontFamily: "Monotype Corsiva" }}>What Says Our Customers</h1>
      <div className="slider-container">
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
          <div className='p-3'>
            <div className='bg-dark text-white'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora provident esse molestiae sunt quisquam doloribus omnis neque, laboriosam dolores, maxime corrupti qui quis, doloremque voluptate magnam. Consequatur, nobis dignissimos.</p>
              <h5>Mona Michell</h5>
              <p>magna aliqua</p>
            </div>
            <img src='./images/client1.jpg' alt='Mona' className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25 mt-5 float-start'></img>
          </div>


          <div className='p-3'>
            <div className='bg-dark text-white'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora provident esse molestiae sunt quisquam doloribus omnis neque, laboriosam dolores, maxime corrupti qui quis, doloremque voluptate magnam. Consequatur, nobis dignissimos.</p>
              <h5>Mike Hamel</h5>
              <p>magna aliqua</p>
            </div>
            <img src='./images/client2.jpg' alt='Mona' className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25 mt-5 float-start'></img>
          </div>

          <div className='p-3'>
            <div className='bg-dark text-white'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora provident esse molestiae sunt quisquam doloribus omnis neque, laboriosam dolores, maxime corrupti qui quis, doloremque voluptate magnam. Consequatur, nobis dignissimos.</p>
              <h5>Mona Michell</h5>
              <p>magna aliqua</p>
            </div>
            <img src='./images/client1.jpg' alt='Mona' className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25 mt-5 float-start'></img>
          </div>

          <div className='p-3'>
            <div className='bg-dark text-white'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias tempora provident esse molestiae sunt quisquam doloribus omnis neque, laboriosam dolores, maxime corrupti qui quis, doloremque voluptate magnam. Consequatur, nobis dignissimos.</p>
              <h5>Mona Michell</h5>
              <p>magna aliqua</p>
            </div>
            <img src='./images/client2.jpg' alt='Mona' className='img-fluid mx-auto d-block rounded-circle border border-warning border-4 w-25 h-25 mt-5 float-start'></img>
          </div>

        </Slider>
        <FaChevronCircleLeft className='text-warning fs-1 me-3' onClick={previous} />
        <FaChevronCircleRight className='text-warning fs-1 me-3' onClick={next} />
      </div>
    </div>
  )
}

export default Customers
