

export default function ContactForm() {
  return (
    <div className="">
        <h3 className="text-3xl text-bold mb-7">Let's Get in touch</h3>
        <form>
            <div className="mb-5">
                <input 
                    className="
                        w-full h-[3.5rem] bg-gray-200 focus:border-none focus:outline-none
                        px-3
                    " 
                    type="text" 
                    placeholder="Name" 
                />
            </div>
            <div className="mb-5">
                <input 
                    className="
                        w-full h-[3.5rem] bg-gray-200 focus:border-none focus:outline-none
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
  )
}
