import React from "react";
import { GrHostMaintenance } from "react-icons/gr";
import { GiElectricalResistance } from "react-icons/gi";
import { MdPlumbing } from "react-icons/md";
import { GiLargePaintBrush } from "react-icons/gi";
import { MdLandscape } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";

export default function Services() {
  const arr = [
    {
      id: "Maintenance",
      icon: <GrHostMaintenance size={90} color="#00008B" />,
      heading: "Maintenance",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: "Electrical",
      icon: <GiElectricalResistance size={90} color="#00008B" />,
      heading: "Electrical",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: "Plumbing",
      icon: <MdPlumbing size={90} color="#00008B" />,
      heading: "Plumbing",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: "Painting",
      icon: <GiLargePaintBrush size={90} color="#00008B" />,
      heading: "Painting",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: "Landscaping",
      icon: <MdLandscape size={90} color="#00008B" />,
      heading: "Landscaping",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
    {
      id: "TOTAL PACKAGE",
      icon: <MdMiscellaneousServices size={90} color="#00008B" />,
      heading: "TOTAL PACKAGE",
      sub: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
    },
  ];

  return (
    <section id="service" className="h-auto w-full mt-8">
      <div className="container mx-auto w-full flex justify-center items-center flex-col gap-4">
        <p
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="text-3xl lg:text-4xl font-light uppercase tracking-widest max-sm:text-2xl"
        >
          <span>Our</span> <span className="text-[#00008B]">Services</span>
        </p>
        <div className="mfont text-base text-center">
          <p>Transforming Ideas into Reality: Our Comprehensive Services</p>
        </div>
      </div>
      <div className="mt-8 w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {arr.map((item) => {
          return (
            <div
              key={item.id}
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="h-80 w-72 md:w-96 lg:w-96 xl:w-96 flex flex-col justify-center items-center gap-4 bg-white shadow-xl rounded-xl hover:bg-[#f2f2f2] transition-all ease-in-out duration-300"
            >
              <div className="h-20 w-20 md:h-24 md:w-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 border border-[#00008B] rounded-xl flex justify-center items-center">
                 {item.icon}
              </div>
              <div className="text-xl font-extrabold text-center">{item.heading}</div>
              <div className="text-xs font-light px-4 text-center">{item.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
