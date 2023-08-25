

export default function CallToActionSection() {
    // 
  return (
    <div 
        className="md:px-[8%] px-4 md:py-[5rem] py-[2rem]"
        style={{
            backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), 
            url(${process.env.PUBLIC_URL+'./images/keyboard2.jpg'})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
    >
        <div className="md:w-[50%] text-white">
            <h2 className="md:text-5xl text-3xl font-bold mb-4">Let's Innovate Together!</h2>
            <p className="md:text-xl">
                If you're looking for a reliable and proficient software development company to bring your ideas to life, Sudo Agency is the right choice for you. We believe in fostering long-term relationships with our clients by delivering exceptional results and excellent customer service.
            </p>
            <button className="bg-gold rounded px-5 py-2 mt-6">Get Quotation</button>
        </div>
    </div>
  )
}
