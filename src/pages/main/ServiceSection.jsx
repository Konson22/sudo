import { Link } from "react-router-dom"


export default function ServiceSection() {
  return (
    <div className="md:px-[8%] px-6 md:py-[3rem] py-[1rem]">
      <h2 className="md:text-5xl text-4xl font-bold text-gold md:text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 md:mt-10 mt-5">
        {data.map(service => (
          <div className='md:mb-0 mb-6 p-5 shadow bg-lightblue text-white'>
            <div className="flex items-center mb-5">
              <div className="md:h-[60px] md:w-[60px] h-[60px] w-[60px] rounded-full mx-auto md:mr-5 mr-2">
                <img src={service.icon} alt="" />
              </div>
              <h2 className="flex-1 text-2xl font-bold">{service.title}</h2>
            </div>
            <div className="flex-1">
              <p>{service.text}</p>
              <div className="mt-5">
                <Link className="bg-gold px-5 py-2 mt-3" to='/web-design'>Learn more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// bg-gradient-to-tl ${service.from} ${service.to}

const data = [
  {
    title:'Web Application Development',
    text:'From interactive and responsive websites to complex web applications, we build solutions that enhance your online presence and engage your users effectively.',
    from:'from-red-400',
    to:'to-yellow-400',
    icon:process.env.PUBLIC_URL+'./images/web.png'
  },
  {
    title:'Mobile App Development',
    text:'With expertise in iOS, Android, and cross-platform development, we create mobile apps that captivate users while maintaining performance and security.',
    from:'from-sky-400',
    to:'to-blue-600',
    icon:process.env.PUBLIC_URL+'./images/smartphone.png'
  },
  {
    title:'Software Product Development',
    text:'Our team can take your product idea from concept to reality, handling everything from design and development to testing and deployment.',
    from:'from-green-400',
    to:'to-amber-400',
    icon:process.env.PUBLIC_URL+'./images/ux.png'
  },
  {
    title:'UI/UX Design',
    text:'We understand the importance of user experience in the success of any application. Our designers craft intuitive and visually appealing interfaces that enhance user satisfaction and retention.',
    from:'to-sky-400',
    to:'from-gray-600',
    icon:process.env.PUBLIC_URL+'./images/graphic-designer.png'
  },
  {
    title:'Search Engine Optimization (SEO)',
    text:'We incorporate SEO best practices during the design process, helping your website rank higher on search engines and drive organic traffic.',
    from:'to-sky-400',
    to:'from-gray-600',
    icon:process.env.PUBLIC_URL+'./images/seo.png'
  },
  {
    title:'Maintenance and Support',
    text:`Our partnership doesn't end with the launch of your software. We offer ongoing support and maintenance services to keep your application up-to-date and functioning optimally.`,
    from:'to-sky-400',
    to:'from-gray-600',
    icon:process.env.PUBLIC_URL+'./images/app-development.png'
  },
]