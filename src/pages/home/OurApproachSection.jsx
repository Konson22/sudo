import { FaAccusoft, FaHeart } from 'react-icons/fa'

export default function OurApproachSection() {
  return (
    <div className="md:px-[8%] px-6 py-[3rem]">
        <h2 className="md:text-4xl text-2xl font-bold text-center">OUR APPROACHS</h2>
        <div className="md:grid grid-cols-2 gap-x-16 mt-16">
            {data.map((d, index) => (
                <div 
                    className={`border-l-4 border-fuchsia-600 md:pb-0 ${index === 3 ? '':'pb-12'} md:mb-16 mb-0`}
                >
                    <div className="flex items-center md:ml-[-2rem] ml-[-1.5rem] mt-[-1rem]">
                        <div 
                            className="
                                md:h-[4rem] h-[3rem] md:w-[4rem] w-[3rem] flex items-center justify-center md:md:text-3xl text-3xl
                                borde border-red-600 bg-gradient-to-r from-red-400 to-fuchsia-600 text-white
                                rounded-full md:p-3 p-2 mr-3
                            "
                        >
                            {d.icon}
                        </div>
                        <h3 className="md:text-2xl text-xl font-bold">{d.title}</h3>
                    </div>
                    <div className="flex-1 md:ml-4 ml-3">
                        <p>{d.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const data = [
    {
        title:'Creativity',
        text:`We are passionate about creativity and think outside the box to deliver unique and captivating designs. Whether it's a website, a mobile app, or graphic design project, we infuse creativity into every aspect to make your brand stand out in the digital landscape.`,
        icon:<FaAccusoft />
    },
    {
        title:'User-Centric',
        text:`Understanding your target audience is at the core of our design process. We prioritize user experience to ensure that every interaction with your digital platform is intuitive, engaging, and delightful, leading to higher user satisfaction and retention.`,
        icon:<FaHeart />
    },
    {
        title:'Custom Solutions',
        text:`We understand that every business is unique and has its own set of challenges. That's why we offer tailor-made solutions that align with your specific requirements, branding, and objectives, giving you a competitive edge in the market.`,
        icon:<FaAccusoft />
    },
    {
        title:'Cutting-Edge Technology',
        text:`Our team stays up-to-date with the latest trends and technologies in web, mobile app, and graphic design. From responsive web design to the latest app development frameworks, we utilize cutting-edge tools and techniques to bring your vision to life.`,
        icon:<FaAccusoft />
    },
    // {
    //     title:'Transparent Communication',
    //     text:`We believe in fostering strong client relationships through transparent communication and open collaboration. We keep you involved throughout the design and development process, ensuring that your feedback and ideas are always valued.`,
    //     icon:<FaAccusoft />
    // },
]