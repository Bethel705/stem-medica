import React from 'react' 
import logopic from '../assets/logo.png'
import Slider from 'react-slick'

const CustmerCard = [
  {
    id:1,
    name:'Teklehaymanot genral hospital',
    text: 'some testimonial about the company service or it can be discription about type of serviece delevere by,,,',
    img: logopic,
  },
  {
    id:2,
    name:'Example genral hospital',
    text: 'some testimonial about the company service or it can be discription about type of serviece delevere by,,,',
    img: logopic,
  },
  {
    id:3,
    name:'Teklehaymanot genral hospital',
    text: 'some testimonial about the company service or it can be discription about type of serviece delevere by,,,',
    img: logopic,
  },

]

const Partnership = () => {
   var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pushOnHover: true,
    pushOnFocuse: true,
    responsive: [
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint:1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint:640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
   }
  return (
    <div className='pt-10 mb-10'>
      
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <h1  data-aos = 'fade-up' className='text-3xl text-center font-bold'>We Are Working with</h1>
         </div>
         <div className='container mb-10 max-w-[1200px] mx-auto'>
         <div>
          <Slider { ...settings}>
            { CustmerCard.map((data) =>(
              <div
              key={data.id}
              className='flex flex-cols gap-15 shadow-lg py-8 px-6 mx-4 rounded-xl'>
                <div> <img src={data.img} alt="" 
                className='rounded-full w-20 h-20'
                /></div>
                <div>
                  <p className='text-xs text-gray-500'>{data.text}</p>
                  <h1 className='text-xl font-bold text-black-80'>{data.name}</h1>

                </div>

              </div>
            ))}

          </Slider>
         </div>
      </div>
    </div>
  )
}

export default Partnership