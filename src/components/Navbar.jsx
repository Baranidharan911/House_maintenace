import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="h-[80px] w-full">
      <div className="h-[30px] w-full bg-[#00008B] flex justify-between px-10 text-white font-bold items-center">
        <div>
          <p>Call : +91 123455678990 </p>
        </div>
        <div>
          <p>Email : demo@gmail.com</p>
        </div>
      </div>
      <div className="h-full w-full shadow-lg">
        <div className="flex justify-between items-center h-full px-10">
          <div className="h-[80px] w-[80px] pt-3">
            <img className="object-cover" src={logo} alt="logo" />
          </div>
          <div className="h-full w-full">
            <ul className="flex justify-center items-center gap-10 h-full">
              <li>
                <Link
                  className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
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
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
                  to="About"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
                  spy={true}
                  to="Admin"
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                >
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block py-2 px-4 text-gray-600 no-underline cursor-pointer hover:text-black underline-animation"
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="h-[80px] w-[80px] pt-3">
            <img
              className="object-cover"
              src="https://th.bing.com/th/id/OIP.JhPP7jb6nNcU3FBxTlBhkgHaGb?rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
