import { Element } from 'react-scroll'


export default function AboutSection() {
  return (
    <Element id='about' name='about'>
        <div className="md:px-[21%] px-4 md:py-[6rem] py-[2rem] md:text-center">
          <h3 className="md:text-3xl text-xl font-bold mb-2">Sudo Agency - Your Trusted Partner in Software Development!</h3>
          <p className="md:text-xl font-semiboldd">
            At Sudo Agency we are passionate about turning your ideas into reality through cutting-edge software development services. With a team of highly skilled and experienced professionals, we strive to deliver top-notch solutions that meet your unique business needs. Whether you are a startup, a small business, or an established enterprise, our tailored services are designed to drive your success and growth.
          </p>
        </div>
      </Element>
  )
}
