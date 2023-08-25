import { Element } from 'react-scroll'


export default function ContactSection() {
  return (
    <Element id='contact' name='contact'>
        <div className="image-bg md:flex items-centerr bg-white shadow-md rounded md:px-6 px-4 py-8 md:mx-[8%] mx-3 my-[4rem]">
            <div className="flex-1 md:p-9">
                <h2 className="text-4xl font-bold">Let's Get In Touch</h2>
                <p>
                    Contact us today to discuss your project and take the first step towards transforming your vision into reality. Let's innovate together and achieve new heights with technology!
                </p>
            </div>
            <div className="image-bgg md:w-[45%] bg-gray-100 shadow-md text-darkblue rounded p-8 md:mt-0 mt-5">
                <h3 className="md:text-4xl text-3xl mb-4">Send us message</h3>
                <form>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-white w-full border-none px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-white w-full border-none px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea className="h-[8rem] bg-white w-full border-none p-3" placeholder="Your Message..."></textarea>
                    </div>
                    <button className="w-full bg-gold text-white py-3 mt-2">Send Message</button>
                </form>
            </div>
        </div>
    </Element>
  )
}
