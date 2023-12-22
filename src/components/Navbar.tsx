import WbSunnyIcon from "@mui/icons-material/WbSunny";
const Navbar = () => {
  return (
    <>
      <div
        id="nav-bar"
        className="px-10 py-4 flex justify-between items-center fixed w-full top-0"
      >
        <div className="logo">
          <img
            src="https://www.welldesigned.gr/wp-content/themes/welldesign/images/Well.Designed.svg"
            alt=""
          />
        </div>
        <div className="center-items " id="tomenou">
          <ul className="flex items-center gap-5 py-1 px-4">
            <li id="button">Home</li>
            <li id="button">About</li>
            <li id="button">Hotels</li>
            <li id="button">Process</li>
            <li id="button">Contact</li>
          </ul>
        </div>
        <div className="theme flex items-center" id="button">
          <WbSunnyIcon className="text-white" />
          <span className="text-white px-1 font-medium  " >Theme</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
