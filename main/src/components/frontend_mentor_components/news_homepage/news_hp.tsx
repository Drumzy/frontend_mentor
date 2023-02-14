import HeroSection from "./hero_section";
import LastSection from "./last_section";
import ResponsiveMenu from "./responsive_menu";

function NewsHomePage() {
  return (
    <div className="w-full md:px-60 px-5 flex flex-col gap-12 bg-slate-50 h-fit">
      <ResponsiveMenu />
      <HeroSection />
      <LastSection />
      <div className="h-[50px]"></div>
    </div>
  );
}

export default NewsHomePage;
