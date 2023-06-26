import React from 'react'
import onlineShop from '../assets/portfolio/onlineShop.png'




const Portfolio = () => {
  const portfolio=[
    {
      id:1,
      src:onlineShop,
    },
    {
      id:2,
      src:onlineShop
    },{
      id:3,
      src:onlineShop
    },{
      id:4,
      src:onlineShop
    },{
      id:5,
      src:onlineShop
    },{
      id:6,
      src:onlineShop
    },
  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen w+full h-full flex flex-col justify-center p-4 mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio</p>
          <p className='py-6'>check my last projects</p>
        </div>
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolio.map(({id,src})=>{
            return <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="online shop" className='rounded-lg duration-200 hover:scale-105 cursor-pointer' />
              <div  className='flex justify-center items-center'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          })
        }
          </div>
      
      </div>
    </div>
  )
}

export default Portfolio