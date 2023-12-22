const Footer = () => {
  return (
    <div className="bg-black h-[100vh] p-20 text-white flex flex-col items-center justify-end">
      <div className="">
        <img
          src="https://www.welldesigned.gr/wp-content/themes/welldesign/images/wd.svg"
          alt=""
        />
      </div>
      <div className=" flex justify-start items-start p-10 w-full">
        <span>icon© Well.Designed 2023 | Privacy Policy</span>
        <span></span>
      </div>
    </div>
  );
};

export default Footer;
