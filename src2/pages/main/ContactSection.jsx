import { Element } from 'react-scroll'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function ContactSection() {
  return (
    <Element id='contact' name='contact'>
        <div className="curve-gold md:bg-darkblue bg-gold text-white md:flex md:mx-[8%] md:my-[4rem] my-0 p-5">
            <div className="image-bgg md:w-[45%] bg-white shadow-md text-darkblue rounded p-8 md:mt-0 mt-5">
                <h3 className="md:text-4xl text-3xl mb-4">Send us message</h3>
                <form>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-lightgray w-full border border-gold rounded px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-lightgray w-full border border-gold rounded px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea className="h-[8rem] bg-lightgray/50 w-full border border-gold rounded p-3" placeholder="Your Message..."></textarea>
                    </div>
                    <button className="w-full bg-gold text-white py-3 mt-2">Send Message</button>
                </form>
            </div>
            <div className="flex-1 md:p-9 md:mt-0 mt-10">
                <h3 className="text-2xl font-bold mb-4">Contacts & Address</h3>
                <ul>
                    <li className="flex items-center my-3">
                        <span className="h-8 w-8 flex items-center justify-center border md:text-gold text-white md:border-gold border-white md:bg-darkblue bg-gold rounded-full mr-2">
                            <FaMapMarkerAlt />
                        </span>
                        Stem center next to SSBC
                    </li>
                    <li className="flex items-center my-3">
                        <span className="h-8 w-8 flex items-center justify-center border md:text-gold text-white md:border-gold border-white md:bg-darkblue bg-gold rounded-full mr-2">
                            <FiPhoneCall />
                        </span>
                        +211920079070
                    </li>
                    <li className="flex items-center my-3">
                        <span className="h-8 w-8 flex items-center justify-center border md:text-gold text-white md:border-gold border-white md:bg-darkblue bg-gold rounded-full mr-2">
                            <FaWhatsapp />
                        </span>
                        +211920079070
                    </li>
                    <li className="flex items-center my-3">
                        <span className="h-8 w-8 flex items-center justify-center border md:text-gold text-white md:border-gold border-white md:bg-darkblue bg-gold rounded-full mr-2">
                            <FiMail />
                        </span>
                        customercare@sudo.com
                    </li>
                </ul>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Follow us on</h3>
                    <div className="flex mt-3">
                        <span className="text-xl md:bg-darkblue bg-gold text-white rounded-full border p-2 mr-3">
                            <FaFacebook />
                        </span>
                        <span className="text-xl md:bg-darkblue bg-gold text-white rounded-full border p-2 mr-3">
                            <FaTwitter />
                        </span>
                        <span className="text-xl md:bg-darkblue bg-gold text-white rounded-full border p-2 mr-3">
                            <FaLinkedin />
                        </span>
                        <span className="text-xl md:bg-darkblue bg-gold text-white rounded-full border p-2">
                            <FaInstagram />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="ccontact md:flex items-center md:bg-gold bg-gold shadow-md rounded md:p-4 p-4 text-white md:mx-[8%] mx-3 my-[4rem]">
            <div className="flex-1 md:p-9">
                <h2 className="md:text-5xl text-2xl font-bold">Let's Get In Touch</h2>
                <p className='md:text-2xl'>
                    Contact us today to discuss your project and take the first step towards transforming your vision into reality. Let's innovate together and achieve new heights with technology!
                </p>
            </div>
            <div className="image-bg md:w-[45%] bg-white shadow-md text-darkblue rounded p-8 md:mt-0 mt-5">
                <h3 className="md:text-4xl text-3xl mb-4">Send us message</h3>
                <form>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-lightgray w-full border border-gold rounded px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <input 
                            className="h-[3rem] bg-lightgray w-full border border-gold rounded px-3" 
                            type="text"
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className="mb-5">
                        <textarea className="h-[8rem] bg-lightgray/50 w-full border border-gold rounded p-3" placeholder="Your Message..."></textarea>
                    </div>
                    <button className="w-full bg-gold text-white py-3 mt-2">Send Message</button>
                </form>
            </div>
        </div> */}
    </Element>
  )
}
