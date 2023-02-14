import desktop_version from "../../../assets/image-web-3-desktop.jpg";
import mobile_version from "../../../assets/image-web-3-mobile.jpg";
export interface HeadlineProps {
  title: string;
  content: string;
}
export function Headline({ title, content }: HeadlineProps) {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-1 hover:text-yellow-600 cursor-pointer">
        {title}
      </h3>
      <p className="text-base">{content}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="grid md:grid-cols-3 gap-5 grid-cols-1 grid-rows-2">
      <div
        className={`md:col-span-2 col-span-1 md:row-start-1 md:row-end-2 row-auto bg-hero-mobile md:bg-hero bg-cover bg-center bg-no-repeat`}
      ></div>
      <div className="flex flex-col md:col-span-1 md:row-start-1 md:row-end-3 bg-slate-900 p-5 gap-5 row-auto order-last">
        <h2 className="text-4xl text-yellow-600">New</h2>
        <div className="h-5/6 flex flex-col justify-around gap-3">
          <Headline
            title={"Hydrogen Vs Electric Cars"}
            content={"Will hydrogen-fueled cars ever catch up to EVs?"}
          />
          <span className="h-[2px] w-full bg-slate-500"></span>
          <Headline
            title={"The Downsides of AI Artistry"}
            content={
              "What are the possible adverse effects of on-demand AI image generation?"
            }
          />
          <span className="h-[2px] w-full bg-slate-500"></span>
          <Headline
            title={"Is VC Funding Drying Up?"}
            content={
              "Private funding by VC firms is down 50% YOY. We take a look at what that means."
            }
          />
        </div>
      </div>
      <div className="md:col-span-2 md:row-start-2 md:row-end-3 flex flex-col md:flex-row gap-3 justify-evenly p-2 row-auto col-span-1">
        <h1 className="text-[60px] font-bold md:w-1/2">
          The Bright Future of Web 3.0 ?
        </h1>
        <div className="flex flex-col md:w-1/2 h-full justify-between items-start">
          <p className="text-slate-700 text-lg">
            We dive into the next evolution of the web that claims to put the
            power of the platforms abck into the hands of the people. But is it
            really fulfilling its promise ?
          </p>
          <button className="uppercase font-bold bg-red-500 hover:bg-slate-900 text-white h-12 w-48 mt-5 md:m-auto">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
