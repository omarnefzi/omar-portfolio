import React from 'react'
import './PortfolioCard.css'
const PortfolioCard = () => {
  return (
    <div className="container mx-auto px-20">
  <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10" style={{cursor: 'auto'}}>
    <div className="flex flex-wrap items-center">
      <div className="flex w-full h-48 md:h-64 lg:h-72 relative">
        <div className="w-8/12 pr-4 relative">
          <img src="https://stackdiary.com/140x100.png" className="w-full h-full object-cover object-top rounded-lg bg-white" />
        </div>
        <div className="w-4/12 h-full">
          <div className="flex flex-col w-full h-full">
            <div className="flex-1 pb-2">
              <div className="w-full h-full relative">
                <img src="https://stackdiary.com/140x100.png" className="absolute top-0 w-full h-full object-cover object-center rounded-lg bg-white" />
              </div>
            </div>
            <div className="flex-1 pt-2">
              <div className="w-full h-full relative">
                <img src="https://stackdiary.com/140x100.png" className="absolute top-0 w-full h-full object-cover object-bottom rounded-lg bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-8 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xl">Tailmail - Tailwind CSS Email Design Kit</h2>
          <div className="flex flex-wrap text-center pt-4 mb-2">
            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Tailwind CSS</div>
            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">React</div>
            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-green-400 text-green-900">Next.js</div>
          </div>
          <p className="text-xs leading-relaxed text-gray-50">This revolutionary email design kit is going to transform the way in which you send modern emails.</p>
          <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
            <li>Responsive</li>
            <li> Mobile-friendly</li>
            <li> Media queries</li>
            <li> 20MB of JavaScript</li>
          </ul>
        </div>
        <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
          <a href="https://stackdiary.com/" className="flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75">Preview</a>
          <button  className="w-full block text-center relative text-white font-bold text-sm bg-teal-800 px-4 py-3 rounded-lg  hover:opacity-75">Buy now</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default PortfolioCard