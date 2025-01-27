import React from 'react'
import image1 from '../assets/hero1.png'
import image2 from '../assets/hero2.png'
import image3 from '../assets/hero3.png'
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        image: image3,
        title: 'Who Are WE',
        dec: 'introduction about company'

    },
    {
        id: 2,
        image: image3,
        title: 'Our Service',
        dec: 'Discrption about core service offered'

    },
    {
        id: 3,
        image: image3,
        title: 'Our mission',
        dec: 'mission stetment'

    }
]

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        aoutoplaySpeed:4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-cyan-200
     flex justify-center items-center'>
        <div className=" h-[700px] w-[700px] bg-sky-300 absolute
         -top-1/2 right-0 rounded-3xl rotate-45 -z-9"> </div>
         
        <div className=' container pb-8 sm:pb-0'>
            <Slider {...settings}>  
                {ImageList.map((data) =>(

                 
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font bold'>
                               {data.title}
                            </h1>
                            <p className='text-sm'>
                                {data.dec}
                            </p>
                        </div>
                        <div className='order-1 sm:order-2 '>
                            <div>
                                <img src={data.image } alt="" 
                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                            </div>
                        </div>

                        
                        </div>
                </div>
            ))} 
            </Slider>
        
            </div>
        </div>
    
    
  )
}

export default Hero