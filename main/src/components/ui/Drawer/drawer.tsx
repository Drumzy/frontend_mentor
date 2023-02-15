import { ReactNode } from "react";
import { MainMenuCloseIcon } from "../MainMenuIcon";

export interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col h-full">
          <div className="flex flex-col p-5">
            <div className="flex justify-between">
              <h3 className="p-4 font-bold text-2xl">Navigation</h3>
              <button type="button" onClick={() => setIsOpen(false)}>
                <MainMenuCloseIcon />
              </button>
            </div>
            <a
              href={"/"}
              className="hover:text-white font-semibold text-lg p-4 hover:bg-stone-800 rounded"
            >
              Home
            </a>
          </div>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
