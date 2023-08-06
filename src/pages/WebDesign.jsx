

export default function WebDesign() {
  return (
    <div className="md:px-[8%] px-3 py-[3rem]">
      <h2 className="text-4xl text-gray-00">Web Design and Developement</h2>
      <p>
        A well-designed website is crucial for making a strong first impression and engaging your visitors. Our web design services focus on creating intuitive, responsive, and aesthetically pleasing websites that represent your brand's essence. Whether you need a simple informational site, an e-commerce platform, or a complex web application, we've got you covered
      </p>

      <div className="mt-8">
        <h3 className="text-3xl">What sets our Web Design Services apart?</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
          {services.map(service => (
            <div className="bg-gray-200 md:p-6 p-3">
              <h3 className="md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


const services = [
  {
    title:'Customized Designs',
    text:`We understand that each business is unique, and we tailor our designs to match your specific requirements, branding, and target audience.`,
    image:''
  },
  {
    title:'User-Centric Approach',
    text:`Our user-centered design approach ensures that your website is not only visually appealing but also intuitive and easy to navigate, providing a seamless user experience.`,
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
  {
      title:'',
      text:``,
      image:''
  },
]