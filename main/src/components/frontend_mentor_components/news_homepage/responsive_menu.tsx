import news_logo from "../../../assets/logo_news.svg";
import menu_open from "../../../assets/icon-menu.svg";
import menu_close from "../../../assets/icon-menu-close.svg";
import { useState } from "react";
export function RepsonsiveMenuLink({ label }: { label: string }) {
  return <span className="cursor-pointer hover:text-yellow-600">{label}</span>;
}
export default function ResponsiveMenu() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <img src={news_logo} alt="news_page_logo" />
      </div>
      <div className="flex md:hidden">
        {isOpen ? (
          <img
            className={`${isOpen ? "z-10" : ""}`}
            src={menu_close}
            onClick={() => setisOpen((o) => !o)}
          ></img>
        ) : (
          <img src={menu_open} onClick={() => setisOpen((o) => !o)}></img>
        )}
      </div>
      <div
        className={`${
          isOpen
            ? "flex fixed flex-col bg-white right-0 top-0 w-4/5 h-screen md:h-auto overflow-hidden"
            : "hidden"
        } md:flex`}
      >
        <div className="md:inline-flex gap-6 flex flex-col md:flex-row mt-40 md:mt-0 text-lg md:text-base pl-6 md:pl-0 font-semibold md:font-normal">
          <RepsonsiveMenuLink label="Home" />
          <RepsonsiveMenuLink label="New" />
          <RepsonsiveMenuLink label="Popular" />
          <RepsonsiveMenuLink label="Trending" />
          <RepsonsiveMenuLink label="Categories" />
        </div>
      </div>
    </div>
  );
}
