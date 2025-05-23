import { useEffect, useState } from "react";
import Contacts from "../assets/icons/Group 6.png";
import Gallery from "../assets/icons/Group 7.png";
import Map from "../assets/icons/Group 8.png";
import Sortlisted from "../assets/icons/Group 9.png";
import Sort from "../assets/icons/Group 10.png";
import Rating from "../assets/icons/Group 1.png";
import Arrow from "../assets/icons/arrow-right-short 1.png";
import Report from "../assets/icons/exclamation-circle 1.png";
import Eye from "../assets/icons/eye-slash 1.png";
import Vector from "../assets/icons/Vector.png";
import Vector2 from "../assets/icons/bookmark-heart 1.png";
import Rating2 from "../assets/icons/rating2.png";

const Home = () => {
  const [studios, setStudios] = useState([]);

 useEffect(() => {
  fetch('http://127.0.0.1:5001/api/studios')
    .then(res => res.json())
    .then(data => setStudios(data));
}, []);


  return ( 
    <>
      <div className="flex items-center justify-between w-full px-4 border-b py-6">
        <div className="flex items-center justify-between gap-8">
          <img src={Contacts} alt="" className="w-[34px] h-[42px]" />
          <img src={Gallery} alt="" className="w-[27px] h-[40.5px]" />
          <img src={Map} alt="" className="w-[17px] h-[40.75px]" />
        </div>
        <div className="flex items-center justify-between gap-8">
          <img src={Sort} alt="" className="w-[40px] h-[45px]" />
          <img src={Sortlisted} alt="" className="w-[42px] h-[46px]" />
        </div>
      </div>

      {studios.map((studio, index) => (
        <div
          key={index}
          className={`flex p-8 border-b ${
            index % 2 === 0 ? "bg-[#FFFCF2]" : ""
          }`}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{studio.name}</h2>
            <img
              src={studio.ratingImage === 2 ? Rating2 : Rating}
              alt="rating"
              className="w-[130px] h-[20px] my-3"
            />
            <p className="my-3 text-xs mt-6">
              {studio.description}
            </p>
            <div className="flex gap-14 my-10">
              <div className="justify-items-center ">
                <p className="text-3xl font-bold">{studio.projects}</p>
                <p className="text-xs">Projects</p>
              </div>
              <div className="justify-items-center ">
                <p className="text-3xl font-bold">{studio.years}</p>
                <p className="text-xs">Years</p>
              </div>
              <div className="justify-items-center ">
                <p className="text-3xl font-bold">{studio.price}</p>
                <p className="text-xs">Price</p>
              </div>
            </div>
            <div className="text-[20px]">
              <p>{studio.phone1}</p>
              <p>{studio.phone2}</p>
            </div>
          </div>

          <div className="w-[1px] h-80 bg-[#D0D0D0]"></div>

          <div className="flex flex-col items-center justify-between space-y-4 ml-6">
            <div className="justify-items-center text-xs text-[#8D4337]">
              <img src={Arrow} alt="" className="w-[23px] h-[22px]" />
              Details
            </div>
            <div className="justify-items-center text-xs text-[#8D4337] mt-4">
              <img src={Eye} alt="" className="w-[20px] h-[20px]" />
              Hide
            </div>
            <div className="justify-items-center text-xs text-[#8D4337] mt-4">
              <img
                src={studio.shortlistIcon === 2 ? Vector2 : Vector}
                alt=""
                className="w-[23px] h-[21px]"
              />
              Shortlist
            </div>
            <div className="justify-items-center text-xs text-[#8D4337] mt-4">
              <img src={Report} alt="" className="w-[16px] h-[16px]" />
              Report
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
