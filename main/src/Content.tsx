import { useState } from "react";
import { Drawer } from "./components/ui/Drawer";
import { MainMenuIcon } from "./components/ui/MainMenuIcon";
import { Outlet } from "react-router-dom";
import jsonData from "./assets/links.json";
type Link = {
  key: string;
  title: string;
  location: string;
};

export default function Content() {
  const links: Array<Link> = JSON.parse(JSON.stringify(jsonData));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col">
      <button
        className="bg-stone-800 text-white rounded-full w-10 h-10 flex items-center justify-center fixed right-2 bottom-2 md:top-4"
        onClick={() => setIsOpen(true)}
      >
        <MainMenuIcon />
      </button>
      <div className="w-full h-full flex justify-center p-5">
        <Outlet />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col h-full p-5">
          <h3 className="p-4 font-bold text-2xl">Challenges</h3>
          {links.map((link) => (
            <a
              key={link.key}
              href={link.location}
              className="hover:text-white font-semibold text-lg p-4 hover:bg-stone-800 rounded"
            >
              {link.title}
            </a>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
