import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  LogoBar,
  MetricBar,
  Problem,
  Services,
  MidCta,
  CaseStudies,
  Testimonial,
  Process,
  Audience,
  FinalCta,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <MetricBar />
      <Problem />
      <Services />
      <MidCta />
      <CaseStudies />
      <Testimonial />
      <Process />
      <Audience />
      <FinalCta />
      <Footer />
    </>
  );
}
