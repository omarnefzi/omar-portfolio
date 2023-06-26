import Htmlimg from '../assets/html.png'
import CssImg from '../assets/css.png'
import GitHubImg from '../assets/github.png'
import JavaScriptmg from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'

const Skills = () => {
  const skills=[
    {
      id:1,
      src:Htmlimg,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:CssImg,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:JavaScriptmg,
      title:'JavaScrip',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:ReactImg,
      title:'React',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src:TailwindImg,
      title:'Tailwind Css',
      style:'shadow-sky-400'
    },
    {
      id:6,
      src:GitHubImg,
      title:"Github",
      style:'shadow-gray-400'
    },
  ]
  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='font-bold text-4xl border-b-4 border-gray-500 p-2 inline'>Skills</p>
          <p className='py-6'>these are the technologies you worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            skills.map(({id,title,src,style})=>{
              return <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}>
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills