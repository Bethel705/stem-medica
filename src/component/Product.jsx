import React from 'react'
import image1 from'../assets/1.jfif'
import image2 from'../assets/surgical.jfif'
import image3 from'../assets/2.jfif'
import image4 from'../assets/durable.jfif'
import image5 from'../assets/monitoring.jfif'
const ProductsData =
[
  {
    id: 1,
    img: image1,
    title: 'Diagnostic',
    Desc: 'we provide top quaality diadnostic equipments from most trusted international manuacturers',
    aosDelay:"0",
  },
  {
    id: 2,
    img: image2,
    title: 'Sugrical',
    Desc: 'we provide top quaality diadnostic equipments from most trusted international manuacturers',
    aosDelay:"200",
  },
  {
    id: 3,
    img: image3,
    title: 'Theraputic',
    Desc: 'we provide top quaality diadnostic equipments from most trusted international manuacturers',
    aosDelay:"400",
  },
  {
    id: 4,
    img: image4,
    title: 'Durable',
    Desc: 'we provide top quaality diadnostic equipments from most trusted international manuacturers',
    aosDelay:"600",
  },
  {
    id: 5,
    img: image5,
    title: 'Monitoring systems',
    Desc: 'we provide top quaality diadnostic equipments from most trusted international manuacturers',
    aosDelay:"800",
  },
];
const Product = () => {
  return (
    <div className='mt-14 mb-12'>
      <div>
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p  data-aos = 'fade-up' className='text-orange-600'>Our Service for you</p>
          <h1  data-aos = 'fade-up' className='text-3xl font-bold'>Products</h1>
          <p  data-aos = 'fade-up' className='text-xs text-gray-400'>We Are Dedicated To Prioritize Quality in All Our Service</p>
        </div>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ml-5'>
            {ProductsData.map( (data) => (
              <div key= {data.id} className='space-y-3'
              data-aos = 'fade-up'
              data-aos-delay={data.aosDelay}>
                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-sm text-gray-600'>{data.Desc}</p>
              </div>
              </div>

              
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product