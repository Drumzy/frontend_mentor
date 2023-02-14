import linkedinLogo from "./assets/LI-In-Bug.png";
import GithubLogo from "./components/ui/SocialLogos/github";
export default function LandingPage() {
  return (
    <div className="w-full p-2 flex flex-col justify-center items-center gap-6">
      <h1 className="text-6xl md:text-8xl font-extrabold text-blue-800">
        Frontend Mentor Challenges
      </h1>
      <p className="text-2xl font-medium">
        this website is made to showcase my aproach in solving different
        challenges in
        <a
          href="https://www.frontendmentor.io/"
          className="animate-pulse text-blue-800 hover:animate-none"
        >
          {" "}
          Frontend Mentor
        </a>
      </p>
      <p className="text-2xl font-medium ">
        Project Repository :{" "}
        <a
          href="https://github.com/Drumzy/frontend_mentor"
          className="animate-pulse text-blue-800 hover:animate-none"
        >
          {" "}
          Drumzy/frontend_mentor
        </a>
      </p>

      <div className="absolute bottom-4">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-2xl font-medium">My links :</span>
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
    </div>
  );
}
