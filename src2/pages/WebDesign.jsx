import ContactSection from "./main/ContactSection"


export default function WebDesign() {
  return (
    <>
    <div className="wave-bg bg-darkblue md:flex items-center md:px-[8%] px-4 md:py-[5rem] py-[2rem]">
      <div className="md:block hidden md:h-[20rem] h-[10rem] md:w-[20rem] w-[10rem] md:rounded-full mx-auto my-0">
        <img 
          className="border-8 border-gold rounded-full" 
          src={process.env.PUBLIC_URL+'./images/ux.png'} 
          alt="" 
        />
      </div>
      <div className="flex-1 text-white md:ml-8">
        <h1 className="md:text-5xl text-3xl font-bold md:mb-4 mb-3">
          Web Design and Developement
        </h1>
        <p className="text-xl">
          A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered
        </p>
        <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
      </div>
    </div>
    <div className="md:px-[8%] px-5 py-[3rem]">
      <h3 className="md:text-4xl text-2xl font-bold">What sets our Web Design Services apart?</h3>
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
    title:'User-Centric Approach',
    text:`Our user-centered design approach ensures that your website is not only visually appealing but also intuitive and easy to navigate, providing a seamless user experience.`,
    image:'md:col-span-2'
  },
  {
    title:'Customized Designs',
    text:`We understand that each business is unique, and we tailor our designs to match your specific requirements, branding, and target audience.`,
    image:''
  },
  {
      title:'Responsive Design',
      text:`With the majority of internet users accessing websites on mobile devices, we ensure your site looks great and functions flawlessly on screens of all sizes.`,
      image:''
  },
  {
      title:'Search Engine Optimization (SEO)',
      text:`We incorporate SEO best practices during the design process, helping your website rank higher on search engines and drive organic traffic.`,
      image:''
  },
  {
      title:'Conversion-Oriented Design',
      text:`Our designs are strategically crafted to encourage conversions, whether it's making a purchase, signing up for a newsletter, or filling out a contact form.`,
      image:''
  },
]