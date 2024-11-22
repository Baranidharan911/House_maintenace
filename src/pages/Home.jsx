import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-scroll";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  return (
    <section id="home" className="h-screen w-full mt-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          enabled: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="relative">
          <img src="https://st3.depositphotos.com/20363444/35577/i/600/depositphotos_355770670-stock-photo-cropped-view-cleaner-rubber-gloves.jpgs" />
          <div className="flex flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white text-2xl lg:text-3xl xl:text-4xl absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center max-sm:text-xl">
              Ultimate Solution for Your <br />
              Home Services
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer"
                spy={true}
                to="contact"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <button className="px-6 lg:px-8 text-white font-bold text-base lg:text-lg xl:text-xl py-2 border-2 border-white hover:bg-[#00008B] hover:transition-all hover:ease-in-out hover:duration-700">
                  Get Started ! !
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://st4.depositphotos.com/1010613/20727/i/450/depositphotos_207274982-stock-photo-male-plumber-hand-repairing-sink.jpg" />
          <div className="flex flex-col justify-center items-center gap-2">
            {" "}
            <p className="text-white max-sm:text-lg lg:text-xl text-2xl lg:text-3xl xl:text-4xl absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-center w-full justify-center h-full ">
              We Promise You'll Be <br />
              Impressed With Crystal
            </p>
            <div className="absolute font-light mfont top-0 left-0 bottom-0 right-0 flex items-end w-full justify-center h-[85%] ">
              <Link
                className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer"
                spy={true}
                to="service"
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <button className="px-6 lg:px-8 text-white font-bold text-base lg:text-lg xl:text-xl py-2 border-2 border-white hover:bg-[#00008B] hover:transition-all hover:ease-in-out hover:duration-700">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
