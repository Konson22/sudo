import ContactForm from "../forms/ContactForm";
import Header from "./Header";
import IndustryWeServe from "./IndustryWeServe";
import ServiceSection from "./ServiceSection";


export default function MainPage() {
  return (
    <div>
        <Header />
        <div className="fle items-center md:px-[20%] px-3 md:py-[3rem] py-[1rem]">
          <h2 className="md:text-5xl text-4xl font-bold text-gold">Who are we?</h2>
          <div className="flex-1">
            <p>
              we are passionate about technology and dedicated to delivering top-notch software solutions to our clients worldwide. As a leading software development company, we combine innovation, expertise, and cutting-edge technologies to transform your ideas into reality. Our team of talented developers, designers, and project managers work cohesively to deliver exceptional software products tailored to your unique needs.
            </p>
          </div>
        </div>
        <ServiceSection />
        <IndustryWeServe />
        <div className="md:px-[15%] py-[3rem] text-center">
          <h2 className="md:text-4xl text-4xl text-gold font-bold mb-2">Let's Innovate Together!</h2>
          <p className="text-2xl">
            If you're looking for a reliable and proficient software development company to bring your ideas to life, [Company Name] is the right choice for you. We believe in fostering long-term relationships with our clients by delivering exceptional results and excellent customer service.
          </p>
        </div>
        <ContactForm />
    </div>
  )
}
