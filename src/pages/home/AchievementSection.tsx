

export default function AchievementSection() {
  return (
    <div className="md:px-[15%] px-3 md:py-[5rem] py-5 bbg-gradient-to-r from-red-400 to-fuchsia-600 text-whitee">
        <div className="text-center text-4xl mb-14">
            Our Achievements
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md: gap-5">
            {data.map(achievement => (
                <div className="md:flex items-center md:bg-transparent bg-gray-200 rounded text-center md:p-0 p-3">
                    <h3 className="md:text-7xl text-4xl text-rose-600 font-bold mr-4">{achievement.count}</h3>
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