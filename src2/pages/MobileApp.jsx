import ContactSection from "./main/ContactSection"


export default function MobileApp() {
  return (
    <>
    <div className="wave-bg bg-darkblue md:flex items-center md:px-[8%] px-4 md:py-[5rem] py-[2rem]">
      <div className="md:h-[20rem] w-[20rem] md:rounded-full mx-auto my-0">
        <img 
          className="" 
          src={process.env.PUBLIC_URL+'./images/smartphone.png'} 
          alt="" 
        />
      </div>
      <div className="flex-1 text-white md:ml-8">
        <h1 className="md:text-5xl text-2xl font-bold md:mb-4 mb-3">
          Mobile App Development Services
        </h1>
        <p className="text-xl">
          In today's mobile-driven world, having a powerful and user-friendly mobile app is essential for connecting with your audience. Our mobile app development services cater to various platforms, ensuring your app reaches a broader user base while delivering a consistent experience across devices.
        </p>
        <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
      </div>
    </div>
    <div className="md:px-[8%] px-5 py-[3rem]">
      <h3 className="md:text-4xl text-2xl font-bold">What sets our Mobile App Development Services apart?</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
        {services.map(service => (
          <div className={`wave-bg border-l-8 border-darkblue shadow-md rounded bg-white md:p-6 p-5 ${service.image}`}>
            <h3 className="md:text-2xl font-semibold mb-2">{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
    <ContactSection />
    </>
  )
}


const services = [
  {
    title:'Platform Diversity',
    text:`Whether you need an app for iOS, Android, or a cross-platform solution, our team of skilled developers can create apps that shine on any platform.`,
    image:'md:col-span-2'
  },
  {
    title:'Innovative Solutions',
    text:`We leverage the latest technologies and trends to develop innovative mobile applications that cater to the evolving needs of your users.`,
    image:''
  },
  {
      title:'Seamless User Experience',
      text:`Our mobile app designs prioritize user experience, making sure your app is easy to use, visually appealing, and keeps users coming back for more.`,
      image:''
  },
  {
      title:'Performance Optimization',
      text:`Our apps are optimized for speed and performance, ensuring smooth functionality even under heavy user loads.`,
      image:''
  },
  {
      title:'App Maintenance and Support',
      text:`We provide ongoing support and maintenance services to keep your app running smoothly and updated with the latest features.`,
      image:''
  },
]