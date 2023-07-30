import ContactForm from "../forms/ContactForm"


export default function ContactSection() {
  return (
    <div className="md:flex md:mx-[8%] md:bg-gray-300">
      <div className="flex-1 flex items-center text-white md:text-2xl p-10"
        style={{
          backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), 
          url(${process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'})`,
          backgroundSize:'cover',
          backgroundPosition:'bottom',
        }}
      >
        <p>
          If you're looking for a reliable and proficient software development company to bring your ideas to life, Sudo is the right choice for you. We believe in fostering long-term relationships with our clients by delivering exceptional results and excellent customer service.
        </p>
      </div>
      <div className="md:w-[40%] p-8">
        <p>
          Contact us today to discuss your project and take the first step towards transforming your vision into reality. Let's innovate together
        </p>
        <ContactForm />
      </div>
    </div>
    // <div className="md:px-[8%] px-[6%] py-[3rem] md:flex items-center"
    //   style={{
    //     backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), 
    //     url(${process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'})`,
    //     backgroundSize:'cover',
    //     backgroundPosition:'bottom',
    //     backgroundAttachment:'fixed'
    //   }}
    // >
    //   <div className="flex-1 text-white">
    //     <p>
    //       Let Sudo Agency be your trusted partner in elevating your digital presence and creating memorable experiences for your audience. Get in touch with us today to discuss your next design project and let's embark on a journey of innovation together!
    //     </p>
    //   </div>
    //   <div className="flex-1 md:mt-0 mt-5">
    //     <ContactForm />
    //   </div>
    // </div>
  )
}
