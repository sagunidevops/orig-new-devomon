import Logo from "../../assets/images/webp/header-logo.webp";
const Preloader = () => {
  return (
    <>
      <div className="min-h-screen h-screen bg-black flex justify-center items-center fixed top-0 left-0 w-full z-[100]">
        <div>
          <img
            className="max-w-[120px] sm:max-w-[152px] animate-scale"
            src={Logo}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};
export default Preloader;
