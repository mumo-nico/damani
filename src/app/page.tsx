import {
  HeroSlider,
  Stats,
  Services,
  TechServices,
  IoTProducts,
  Team,
  CTA,
  TechSlider,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Stats />
      <Services />
      <TechServices />
      <IoTProducts />
      <TechSlider />
      <Team />
      <CTA />
    </>
  );
}
