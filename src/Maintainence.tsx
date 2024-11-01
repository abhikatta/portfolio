import Image from "next/image";
import "./index.css";
import MaintainenceIcon from "./assets/maintainence-icon.jpg";
function Maintainence() {
  return (
    <div className="bg-yellow-300 text-white w-screen h-screen flex flex-col items-center justify-center">
      <Image
        fill
        className="rotate -ml-[120px] -mb-[30px]"
        src="https://img.icons8.com/?size=64&id=115336&format=png"
        alt="rotating-gear-icon"
      />
      <Image
        fill
        className="mb-[40px] z-10"
        src={MaintainenceIcon}
        alt="maintainence-icon"
      />
      <p className="mb-[40px] text-black text-[20px] text-width">
        Site is under maintainence, should be back very soon. Thanks for the
        visit anyway. Checkout my other projects by clicking over the weird cat
        icon below.
      </p>
      <a
        className="hover:-translate-y-4 transition-transform duration-300"
        href="https://github.com/abhikatta?tab=repositories">
        <Image
          src="https://img.icons8.com/?size=50&id=12599&format=png"
          alt=""
        />
      </a>
    </div>
  );
}

export default Maintainence;
