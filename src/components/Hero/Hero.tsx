import "./Hero.css";
const Hero = () => {
  return (
    <div id="hero" className="">
      <div className="overlay flex justify-center leading-6 items-center flex-col gap-6">
        <h1 className="text-white leading-2 text-7xl font-medium tracking-wide">
          elevate your hoteling
        </h1>
        <p className="text-center text-white text-2xl font-normal">
          TRANSFORM YOUR HOTEL OR VILLA INTO A DISTINCTIVE BRAND <br /> THAT
          CAPTURES HEARTS AND MINDS
        </p>
        <button id="button">Send Enquiry</button>
      </div>
    </div>
  );
};

export default Hero;
