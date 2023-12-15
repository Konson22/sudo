
export default function WebDesignPage() {
  return (
    <div>
        <div
            className="relative overflow-hidden flex items-center text-white md:py-[7rem] py-[5rem] md:px-[10%] px-3"
            style={{
                backgroundImage:`linear-gradient(to top, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), 
                url(${process.env.PUBLIC_URL+'./images/pexels-mateusz-dach-450035.jpg'})`,
                backgroundSize:'cover',
                backgroundPosition:'bottom'
            }}
        >
            <div className="md:w-[70%]">
                <h1 className="md:text-8xl text-5xl font-bold text-gold md:mb-4 mb-3">
                    Web Design
                </h1>
            </div>
         
        </div>
    </div>
  )
}
