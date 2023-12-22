import Hero from "./Hero/Hero";

const Home = () => {
  const obj = [
    {
      image:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/hooganew.png",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/hooga-logo-x2.png",
      title: "HOOGA",
      paragraph:
        "Minimal design, a sense of earth, stone and wood, the presence of water and natural plants all together in perfect harmony makes for the warmest ambience.",
    },
    {
      image:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/peliva.jpg",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/peliva-logo-x2.png",
      title: "PELIVA",
      paragraph:
        "Built in a privileged location in the southern part of Pelion, in an old olive grove with an unparalleled view of the Pagasitic Gulf, Peliva Nature & Suites offers a high quality place to escape, relax and stay.",
    },
    {
      image: "https://www.welldesigned.gr/wp-content/uploads/2023/10/batu.jpg",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/batu-logo-x2.png",
      title: "BATU",
      paragraph:
        "In an enticing environment plunged into nature and sea, BATU has opened its doors to those who seek to combine the coveted peace of their holiday with comfort and discreet luxury.",
    },
    {
      image:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/casa-costa.jpg",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/casacosta-logo-x2.png",
      title: "CASA COSTA",
      paragraph:
        "At the top of a small hill overlooking the Ionian Sea, you can find the elegant and peaceful Casa Costa.",
    },
    {
      image: "https://www.welldesigned.gr/wp-content/uploads/2023/10/airio.jpg",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/airio-logo-x2.png",
      title: "ARIO",
      paragraph:
        "Welcome to AIRIO, your premier destination for exceptional hospitality in the heart of Athens, Greece.",
    },
    {
      image:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/daluz-social.jpg",
      overlay:
        "https://www.welldesigned.gr/wp-content/uploads/2023/10/daluz-logo-x2.png",
      title: "DALUZ",
      paragraph:
        "daLUZ boutique hotel includes 35 luxurious rooms and suites that may each host 2 or more persons. The comfortable environment and its high aesthetics create the proper atmosphere for an ideal stay.",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="h-full">
        <Hero />
      </div>

      {/* HOTELS NAMES */}
      <div className="h-[100vh] overflow-auto bg-black flex flex-col justify-center items-center">
        <h1 className="text-3xl flex flex-col justify-center items-center gap-10 font-medium text-white font-serif">
          <span>Hotels Well Designed</span>
          <span className="h-[1px] w-[40px] bg-white"></span>
        </h1>
        <div className="py-20">
          <ul id="hotels-name" className="flex">
            <li>
              <img
                src="https://www.welldesigned.gr/wp-content/uploads/2023/10/airio-logo-x2.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.welldesigned.gr/wp-content/uploads/2023/10/hooga-logo-x2.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.welldesigned.gr/wp-content/uploads/2023/10/peliva-logo-x2.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.welldesigned.gr/wp-content/uploads/2023/10/batu-logo-x2.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.welldesigned.gr/wp-content/uploads/2023/10/casacosta-logo-x2.png"
                alt=""
              />
            </li>
          </ul>

          <ul id="hotels-name" className="flex">
            <li>
              <img src="https://www.welldesigned.gr/wp-content/uploads/2023/10/brettania-logo-x3.png" />
            </li>
            <li>
              <img src="https://www.welldesigned.gr/wp-content/uploads/2023/10/daluz-logo-x2.png" />
            </li>
            <li>
              <img src="https://www.welldesigned.gr/wp-content/uploads/2023/10/blue-logo-x2.png" />
            </li>
            <li>
              <img src="https://www.welldesigned.gr/wp-content/uploads/2023/10/suitehome-logo-x2.png" />
            </li>
            <li>
              <img src="https://www.welldesigned.gr/wp-content/uploads/2023/10/omni-logo-x3.png" />
            </li>
          </ul>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="p-[30px] overflow-auto">
        <h1 className="text-3xl flex flex-col justify-center items-center gap-10 font-medium text-white font-serif">
          <span>About Us</span>
          <span className="h-[1px] w-[40px] bg-white"></span>
        </h1>
        <div className="py-5">
          <p className="text-white text-center text-3xl tracking-wide">
            Welcome to iframe hospitality, your premier destination for <br />
            exceptional branding and web design tailored specifically for <br />{" "}
            hotels and villas in the captivating landscapes of Greece.
          </p>
        </div>
      </div>

      {/* OUR SERVICES */}
      <div className="p-[100px]">
        <div
          className="text-center px-[20rem] py-12 flex flex-col gap-12"
          id="service"
        >
          <h1 className="text-3xl flex flex-col justify-center items-center gap-10 font-medium text-white font-serif">
            <span>Our Services</span>
            <span className="h-[1px] w-[40px] bg-white"></span>
          </h1>
          <div className="">
            <p className="text-xl">
              A comprehensive brand identity for hotels encompasses various
              elements that work together to create a consistent and memorable
              representation of the property. Here are the key components
              typically included in a branding identity package for hotels:
            </p>
          </div>
          <div className="light-button flex flex-wrap gap-1">
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
            <div className="servicedetails">Brand Identity</div>
          </div>

          <div className="">
            <h1 className="text-3xl">
              Are you ready for a new <br />
              Hotel Concept for your property?
            </h1>
          </div>

          <div className="pb-16">
            <span className="sendenq">Send Enquiry</span>
          </div>
        </div>
      </div>

      {/* HOTEL STUDIES */}
      <div className="p-20">
        <h1 className="text-3xl flex flex-col justify-center items-center gap-10 font-medium text-white font-serif">
          <span>Our Services</span>
          <span className="h-[1px] w-[40px] bg-white"></span>
        </h1>

        <div className="py-10" id="concepts-studies">
          {obj.map((item) => {
            return (
              <div className="" id="boxes-items">
                <div className="relative">
                  <img src={item.image} />
                  <img
                    width=""
                    className="absolute top-[30%] "
                    src={item.overlay}
                  />
                </div>
                <div className="py-6">
                  <h1 className="text-3xl">{item.title}</h1>
                </div>
                <div className="">
                  <p className="text-xl font-thin opacity-70 leading-5">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
