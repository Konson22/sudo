

export default function ContactForm() {
  return (
    <div className="contact-container md:flex items-center md:px-[8%] px-4 py-[4rem] text-white">
        <div className="flex-1 text-2xl mr-9">
            <p>
                Contact us today to discuss your project and take the first step towards transforming your vision into reality. Let's innovate together and achieve new heights with technology!
            </p>
        </div>
        <div className="flex-1 bg-white/5 shadow-inner shadow-white backdrop-blur-lg  md:p-10 p-5 md:mt-0 mt-6">
            <h3 className="text-4xl text-bold mb-5">Let's Get in touch</h3>
            <form>
                <div className="mb-5">
                    <input 
                        className="
                            w-full md:h-[3.5rem] h-[3rem] bg-transparent border focus:border-none focus:outline-none
                            px-3
                        " 
                        type="text" 
                        placeholder="Name" 
                    />
                </div>
                <div className="mb-5">
                    <input 
                        className="
                            w-full md:h-[3.5rem] h-[3rem] bg-transparent border focus:border-none focus:outline-none
                            px-3
                        " 
                        type="text" 
                        placeholder="E-mail Addess" 
                    />
                </div>
                <div className="mb-5">
                    <textarea 
                        className="
                            w-full h-[6.5rem] bg-gray-200 focus:border-none focus:outline-none
                            px-3
                        " 
                    ></textarea>
                </div>
                <div className="mt-4">
                    <button className="w-full bg-red-700 text-white py-3">Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}
