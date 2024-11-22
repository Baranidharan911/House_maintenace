import React from "react";

const About = () => {
  return (
    <div id="About" className="h-screen w-full mt-10">
      <div className="h-full w-full flex relative">
        <div className="h-full w-[60%] relative">
          <img
            className="h-full w-full object-cover"
            src="https://img.freepik.com/free-photo/electrician-builder-with-beard-worker-white-helmet-work-installation-lamps-height-professional-overalls-with-drill-repair-site_169016-8628.jpg?w=1380&t=st=1706345116~exp=1706345716~hmac=a166fa440737ba18f5eff901990692509963b22cdeb116e5889beafd487df4e5"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div className="h-full w-[40%]">
          <div className="w-full flex justify-center items-center">
            <p
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="text-[2.9rem] mfont font-light uppercase tracking-widest max-sm:text-[2rem]"
            >
              <span>About</span> <span className="text-[#00008B]">Us</span>
            </p>
          </div>
          <div className="h-[90%] flex justify-center items-center px-10">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ducimus commodi eaque necessitatibus esse. Corrupti aperiam atque beatae deserunt veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
