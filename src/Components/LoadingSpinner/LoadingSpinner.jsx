import Image from "next/image";
import logo from "../../assets/logo.png";
const LoadingSpinner = () => {
  return (
    <div className=" min-h-[70vh] flex items-center justify-center">
      <h3 className="text-6xl text-gray-400 flex items-center gap-3">
        L{" "}
        <span>
          <Image src={logo} alt="logo" className="h-20 animate-spin opacity-50" />
        </span>{" "}
        ading
      </h3>
    </div>
  );
};

export default LoadingSpinner;
