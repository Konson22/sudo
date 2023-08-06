import AchievementSection from "./AchievementSection";
import ContactSection from "./ContactSection";
import Header2 from "./Header2";
import OurApproachSection from "./OurApproachSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import WhyUsSection from "./WhyUsSection";

export default function HomePage() {
  return (
    <div>
      <Header2 />
      <div className="md:px-[20%] px-3 py-[2rem] md:text-xl text-center">
        <p>
          At Sudo Agency, we believe in the power of innovation and design to transform businesses and create exceptional digital experiences. Our dedicated team of skilled designers, developers, and creatives work collaboratively to turn your ideas into reality and help you achieve your goals.
        </p>
      </div>
      <ServiceSection />
      <OurApproachSection />
      <AchievementSection />
      <WhyUsSection />
      <TestimonialSection />
      <ContactSection />
      {/*  */}
      <div className=""></div>
    </div>
  )
}
