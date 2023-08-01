import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"
import InviewAnimate from "../../components/InviewAnimate"


export default function ServiceSection() {


  return (
    <div className="md:px-[8%] px-5 md:py-[4rem] py-[3rem] bg-darkblue text-white">
      <div className="md:flex items-center md:mb-40 mb-20">
        <h2 className="md:text-6xl text-3xl text-gold font-bold md:w-[40%] md:mb-0 mb-4">
          SERVICES WE OFFER
        </h2>
        <p className="flex-1 text-xl">
          we are passionate about turning your ideas into reality through cutting-edge software development services. With a team of highly skilled and experienced professionals, we strive to deliver top-notch solutions that meet your unique business needs. Whether you are a startup, a small business, or an established enterprise, our tailored services are designed to drive your success and growth.
        </p>
      </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-5 md: gap-y-20 mt-20">
          {servicesData2.map(service => (
            <InviewAnimate>
              <div className="md:bg-gold bg-gold/60 rounded-md md:p-4 p-4">
                <div 
                  className="
                    h-[8rem] w-[8rem] flex items-center justify-center rounded-full text-5xl 
                    md:mt-[-3.5rem] mt-[-3rem] mx-auto bg-red-500 border8 border-white
                  "
                >
                  <img src={service.image} alt="" />
                </div>
                <h3 className="text-xl text-darkblue font-bold my-3">{service.title}</h3>
                <p className="line-clamp-6">{service.text}</p>
                <div className="mt-4 md:mb-0 mb-3">
                  <Link className="bg-darkblue hover:bg-darkblue/50 hover:text-white rounded flex items-center w-[max-content] sm:text-sm px-5 py-2" to={service.title}>
                    Learn more
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </InviewAnimate>
          ))}
        </div>
    </div>
  )
}


// const servicesData = [
//     {
//         title:'Web Design & Developement',
//         text:`A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.`,
//         path:'/web-design',
//         image:process.env.PUBLIC_URL+'./images/ux.png',
//     },
//     {
//         title:'Mobile App Developement',
//         text:`At ArkCode we are passionate about turning your innovative ideas into reality through cutting-edge mobile app development. Whether you're a startup, small business, or large enterprise, our skilled team of app developers is here to craft high-performance, user-friendly, and feature-rich mobile applications for various platforms.`,
//         path:'/mobile-app',
//         image:process.env.PUBLIC_URL+'./images/smartphone.png',
//     },
//     {
//         title:'Graphics Design',
//         text:`At ArkCode we are passionate about visual storytelling and transforming ideas into captivating designs. Our expert graphic designers are here to elevate your brand, communicate your message effectively, and leave a lasting impression on your audience through stunning visuals.`,
//         path:'/graphic-design',
//         image:process.env.PUBLIC_URL+'./images/graphic-designer.png',
//     },
// ]
const servicesData2 = [
    {
      title:'Custom Software Development',
      text:`We specialize in crafting bespoke software solutions that cater specifically to your business requirements. Our team follows an agile development approach, ensuring rapid delivery and regular feedback loops. From concept to deployment, we collaborate closely with you to ensure that the final product exceeds your expectations`,
      image:process.env.PUBLIC_URL+'./images/ux.png',
    },
    {
      title:'Web Application Development',
      text:`In the digital age, a powerful web presence is essential for any business. Our team excels in creating feature-rich, scalable, and secure web applications that engage your audience and drive business growth. We leverage the latest technologies to build responsive web applications that deliver an exceptional user experience`,
      image:process.env.PUBLIC_URL+'./images/smartphone.png',
    },
    {
      title:'Mobile App Development:',
      text:`With the world going mobile-first, having a well-designed and functional mobile app is crucial for your business success. Our mobile app development services cover iOS, Android, and cross-platform app development. We focus on intuitive user interfaces, high performance, and seamless integration with back-end systems.`,
      image:process.env.PUBLIC_URL+'./images/smartphone.png',
    },
    // {
    //   title:'Enterprise Software Solutions',
    //   text:`We understand the complexities of large-scale enterprises and the need for robust software solutions. Our enterprise software development services empower organizations with scalable, efficient, and secure software that streamlines operations, enhances productivity, and drives better decision-making.`,
    //   image:process.env.PUBLIC_URL+'./images/graphic-designer.png',
    // },
    // {
    //   title:'Software Consultation and Strategy',
    //   text:`Unsure about which technologies to choose or how to tackle a complex software challenge? Our expert consultants are here to guide you. We analyze your business needs, offer strategic insights, and provide a roadmap to achieve your software development goals effectively.`,
    //   icon:<FaHeartbeat />
    // },
  ]