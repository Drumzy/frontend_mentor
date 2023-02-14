import qr_code from "../../../assets/image-qr-code.png";

function QRCComponent() {
  return (
    <div className="w-96 h-fit flex flex-col justify-center items-center bg-white p-4 rounded-2xl">
      <img className="rounded-2xl" src={qr_code} alt="" />
      <div className="flex flex-col p-4 text-center gap-3">
        <h3 className="text-[26px] font-bold text-slate-800">
          Impove your front-end skills by buildign projects
        </h3>
        <span className="text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
      </div>
    </div>
  );
}

export default QRCComponent;
