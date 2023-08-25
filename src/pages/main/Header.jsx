import { Element } from 'react-scroll'



const sliderText = [ 
    'Your Trusted Partner for Innovative Software Solutions!',
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
    'Unleash the Power of the Web & Apps!',
    'Empowering Your Digital Dreams Unleash the Power of the Web & Apps!',
];


export default function Header2() {
   
    
    return (
        <Element id='home' name='home'>
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
                    <h1 className="md:text-8xl text-5xl font-bold text-gold md:mb-4 mb-3">Sudo Agency</h1>
                    <h1 className="md:text-5xl text-xl md:font-bold">{sliderText[0]}</h1>
                    <button className="bg-gold rounded md:text-xl px-7 py-2 mt-7">Get Started</button>
                </div>
            
            </div>
        </Element>
    )
  }
  
  