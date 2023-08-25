import { Link } from "react-router-dom"
import { Element } from 'react-scroll'

export default function ServiceSection() {
  return (
    <Element id='services' name='services'>
      <div className="md:px-[8%] px-6 md:py-[6rem] py-[2rem]">
        <h2 className="md:text-5xl text-3xl font-bold text-center text-gold">OUR SERVICES</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
          {data.map((service, index) => (
            <div className={`
              rounded-md pt-5 bg-white shadow-md 
            `}>
              <div className="flex flex-1 items-center">
                <div className="h-[3.5rem] w-[3.5rem] mx-3 mb-2">
                  <img src={service.image} alt="" />
                </div>
                <div 
                  className='
                    flex-1 px-4 py-2 rounded-l-2xl overflow-hidden md:border-y-4 md:border-l-4 border-y-2 border-l-2
                    border-darkgray bg-gold
                  '
                >
                  <h3 className={`text-white md:text-xl text-[1rem] ffont-semibold`}>{service.title}</h3>
                </div>
              </div>
              <div className="p-3">
                <p>{service.text}</p>
                <div className="my-5">
                  <Link className='border border-darkblue rounded px-4 py-2 mt-5' to={service.path}>Learn more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}


const data = [
  {
    title:'Web App Development',
    text:'From interactive and responsive websites to complex web applications, we build solutions that enhance your online presence and engage your users effectively.',
    path:'/web-design',
    image:process.env.PUBLIC_URL+'./images/web.png'
  },
  {
    title:'Mobile App Development',
    text:'With expertise in iOS, Android, and cross-platform development, we create mobile apps that captivate users while maintaining performance and security.',
    path:'/mobile-app-developement',
    image:process.env.PUBLIC_URL+'./images/smartphone.png'
  },
  {
    title:'Software Development',
    text:'Our team can take your product idea from concept to reality, handling everything from design and development to testing and deployment.',
    path:'/web-developement',
    image:process.env.PUBLIC_URL+'./images/ux.png'
  },
  {
    title:'UI/UX Design',
    text:'We understand the importance of user experience in the success of any application. Our designers craft intuitive and visually appealing interfaces that enhance user satisfaction and retention.',
    path:'/graphic-design',
    image:process.env.PUBLIC_URL+'./images/graphic-designer.png'
  },
  {
    title:'Search Engine Optimization',
    text:'We incorporate SEO best practices during the design process, helping your website rank higher on search engines and drive organic traffic.',
    path:'/web-developement',
    image:process.env.PUBLIC_URL+'./images/seo.png'
  },
  {
    title:'Maintenance and Support',
    text:`Our partnership doesn't end with the launch of your software. We offer ongoing support and maintenance services to keep your application up-to-date and functioning optimally.`,
    path:'/search-engine-optimization',
    image:process.env.PUBLIC_URL+'./images/app-development.png'
  },
]