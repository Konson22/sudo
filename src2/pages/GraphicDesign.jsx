import ContactSection from "./main/ContactSection"


export default function GraphicDesign() {
  return (
    <>
    <div className="wave-bg bg-darkblue md:flex items-center md:px-[8%] px-4 md:py-[5rem] py-[2rem]">
      <div className="md:h-[20rem] w-[20rem] md:rounded-full mx-auto my-0">
        <img 
          className="" 
          src={process.env.PUBLIC_URL+'./images/graphic-designer.png'} 
          alt="" 
        />
      </div>
      <div className="flex-1 text-white md:ml-8">
        <h1 className="md:text-5xl text-2xl font-bold md:mb-4 mb-3">
          Graphic Design Services
        </h1>
        <p className="text-xl">
          Visuals are a powerful tool for conveying your brand's message effectively. Our graphic design services cover a wide range of creative needs, from designing captivating logos to crafting engaging marketing materials.
        </p>
        <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
      </div>
    </div>
    <div className="md:px-[8%] px-5 py-[3rem]">
      <h3 className="md:text-4xl text-2xl font-bold">What sets our Graphic Design Services apart?</h3>
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
    title:'Branding Expertise',
    text:`Our designers are adept at creating logos, brand guidelines, and visual assets that embody your brand's personality and values.`,
    image:'md:col-span-2'
  },
  {
    title:'Print and Digital Design',
    text:`From business cards and brochures to social media graphics and digital banners, we create visually striking designs that leave a lasting impression.`,
    image:''
  },
  {
      title:'Illustrations and Infographics',
      text:`Our talented illustrators transform complex ideas into visually appealing illustrations and infographics, simplifying information for better understanding.`,
      image:''
  },
  {
      title:'Packaging Design',
      text:`We design eye-catching packaging that not only protects your products but also attracts attention and communicates your brand story.`,
      image:''
  },
  {
      title:'Attention to Detail',
      text:`Our designers are meticulous in their work, ensuring every pixel is in its rightful place, delivering designs that are pixel-perfect and visually impactful.`,
      image:''
  },
]