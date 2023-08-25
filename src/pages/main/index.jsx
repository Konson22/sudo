import AboutSection from "./AboutSection";
import CallToActionSection from "./CallToActionSection";
import ContactSection from "./ContactSection";
import Header from "./Header";
import IndustryWeServeSection from "./IndustryWeServeSection";
import ServiceSection from "./ServiceSection";
import WhyusSection from "./WhyusSection";


export default function MainPage() {
  return (
    <div>
      <Header />
      <AboutSection />
      <ServiceSection />
      <IndustryWeServeSection />
      <WhyusSection />
      <CallToActionSection />
      <ContactSection />
    </div>
  )
}
