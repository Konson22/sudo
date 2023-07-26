import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"


export default function ServiceSection() {
  return (
    <div className="md:px-[8%] px-5 md:py-[4rem] py-[2rem]">
        <h2 className="md:text-4xl text-2xl font-bold text-center">OUR SERVICES</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-14 mt-20">
            {servicesData.map(service => (
                <div className="bg-gray-200 rounded-md md:p-8 p-4">
                    <div 
                        className="
                            h-[9rem] w-[9rem] flex items-center justify-center rounded-full text-5xl 
                            md:mt-[-4.5rem] mt-[-3.4rem] mx-auto bg-red-500 text-white border8 border-white
                        "
                    >
                        <img src={service.image} alt="" />
                    </div>
                    <h3 className="text-xl font-semibold my-3">{service.title}</h3>
                    <p className="line-clamp-6">{service.text}</p>
                    <div className="mt-4 md:mb-0 mb-3">
                        <Link className=" border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white rounded flex items-center w-[max-content] sm:text-sm px-5 py-2" to={service.path}>
                            Learn more
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const servicesData = [
    {
        title:'Web Design & Developement',
        text:`A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered.`,
        path:'/web-design',
        image:process.env.PUBLIC_URL+'./images/ux.png',
    },
    {
        title:'Mobile App Developement',
        text:`At ArkCode we are passionate about turning your innovative ideas into reality through cutting-edge mobile app development. Whether you're a startup, small business, or large enterprise, our skilled team of app developers is here to craft high-performance, user-friendly, and feature-rich mobile applications for various platforms.`,
        path:'/mobile-app',
        image:process.env.PUBLIC_URL+'./images/smartphone.png',
    },
    {
        title:'Graphics Design',
        text:`At ArkCode we are passionate about visual storytelling and transforming ideas into captivating designs. Our expert graphic designers are here to elevate your brand, communicate your message effectively, and leave a lasting impression on your audience through stunning visuals.`,
        path:'/graphic-design',
        image:process.env.PUBLIC_URL+'./images/graphic-designer.png',
    },
]