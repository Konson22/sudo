import ContactForm from "../forms/ContactForm"


export default function ContactSection() {
  return (
    <div className="md:px-[8%] px-[6%] py-[3rem] md:flex items-center">
        <div className="flex-1">
            <p>
                Let Sudo Agency be your trusted partner in elevating your digital presence and creating memorable experiences for your audience. Get in touch with us today to discuss your next design project and let's embark on a journey of innovation together!
            </p>
        </div>
        <div className="flex-1 md:mt-0 mt-5">
            <ContactForm />
        </div>
    </div>
  )
}
