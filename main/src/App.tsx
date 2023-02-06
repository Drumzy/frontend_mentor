import { useState } from "react";
import "./App.css";
import drawer_icon from "./assets/menu-2.svg";
import QRCComponents from "./components/frontend_mentor_components/qr_code_components/qr_code";
import { Drawer } from "./components/ui/Drawer";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        className="bg-indigo-500 text-white rounded px-4 py-1 absolute top-1 right-1"
        onClick={() => setIsOpen(true)}
      >
        <img src={drawer_icon} alt="" />
      </button>
      <QRCComponents />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div></div>
      </Drawer>
    </div>
  );
}

export default App;
