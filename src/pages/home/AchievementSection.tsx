

export default function AchievementSection() {
  return (
    <div className="md:px-[15%] px-3 py-[5rem] bg-red-500">
        {/* <div className="text-center md:px-[14%] mb-14">
            <p>
                At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.
            </p>
        </div> */}
        <div className="grid md:grid-cols-4 grid-cols-2 md: gap-5">
            {data.map(achievement => (
                <div className="md:flex items-center md:bg-transparent bg-red-400 rounded text-center md:p-0 p-3">
                    <h3 className="md:text-7xl text-4xl text-red-700 font-bold mr-4">{achievement.count}</h3>
                    <span className="md:text-xl">{achievement.text}</span>
                </div>
            ))}
        </div>
    </div>
  )
}


const data  = [
    {text:'Years of Experience', count:25 },
    {text:'Professional Key People', count:25 },
    {text:'Satified Clients', count:15 },
    {text:'Projects Completed', count:17 },
]