import linkedinLogo from "./assets/LI-In-Bug.png";
import GithubLogo from "./components/ui/SocialLogos/github";
export default function LandingPage() {
  return (
    <div className="w-full p-2 flex flex-col justify-center items-center gap-6 bg-main bg-cover bg-center bg-no-repeat">
      <h1 className="text-6xl md:text-8xl font-extrabold text-stone-800">
        Frontend Mentor Challenges
      </h1>
      <p className="text-2xl font-medium text-stone-800">
        this website is made to showcase my aproach in solving different
        challenges in
        <a
          href="https://www.frontendmentor.io/"
          className="animate-pulse text-stone-800 hover:animate-none"
        >
          {" "}
          Frontend Mentor
        </a>
      </p>
      <p className="text-2xl font-medium text-stone-800">
        Project Repository :{" "}
        <a
          href="https://github.com/Drumzy/frontend_mentor"
          className="animate-pulse text-stone-800 hover:animate-none"
        >
          {" "}
          Drumzy/frontend_mentor
        </a>
      </p>

      <div className="absolute bottom-4">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-2 justify-center items-center">
            <a href="https://github.com/Drumzy">
              <GithubLogo />
            </a>
            <a href="https://www.linkedin.com/in/rassa-wael/">
              <img className="w-[98px] h-[90px]" src={linkedinLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-16 bottom-2 md:top-4 p-2 bg-white border-2 border-stone-800 w-fit h-fit rounded animate-bounce hover:animate-none">
        Click here to see the challenges
      </div>
    </div>
  );
}
