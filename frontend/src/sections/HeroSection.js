import React from 'react';
import { useState } from 'react';
import MapComponent from '../components/MapComponent';


const HeroSection = () => {
  //const [bigSpotImg, setBigSpotImg] = useState(bigSpot1);

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-20 max-container mt-[auto]"
    >
      
      <div  className="relative w-full xl:w-2/5 flex flex-col justify-center items-start pt-28 px-4 sm:px-8 lg:px-12 xl:px-20 -mt-40">
        {/* <p className="text-xl font-palanquin text-coral-red">Dive Into the Cold</p> */}
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-palanquin">
          <span className="relative z-10 pr-10  xl:whitespace-nowrap">The Best Cold</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Water</span> Swimming
        </h1>
        <p className="mt-6 mb-14 text-lg-8 text-slate-gray sm:max-w-sm font-palanquin">
          Discover the Thrill and Benefits of Cold Water Swimming
        </p>
        <div className="flex justify-start items-start w-full mt-10 gap-16">
          <div>
            <p className="text-4xl font-bold font-palanquin">300+</p>
            <p className="leading-7 text-slate-gray font-montserrat">coastal spots</p>
          </div>
          <div>
            <p className="text-4xl font-bold font-palanquin">100+</p>
            <p className="leading-7 text-slate-gray font-montserrat">Lake spots</p>
          </div>
          <div>
            <p className="text-4xl font-bold font-palanquin">250+</p>
            <p className="leading-7 text-slate-gray font-montserrat">community members</p>
          </div>
        </div>
      </div>
      <div className="relative w-full xl:w-3/5 h-[75vh] mt-12">
        <MapComponent />
      </div>

      {/* <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-blue-50">
        
        <img
          src={bigSpotImg}
          alt="Lake Windermere"
          width={610}
          height={500}
          className="object-contain relative z-10 rounded-lg"
        />
            
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:bottom-10 lg:bottom-20 sm:left-auto sm:translate-x-0 flex gap-4 sm:gap-6">
          {spots.map((spot) => (
            <div key={spot}>
              <SpotCard
                imgURL={spot}
                changeBigSpotImage={(spot) => setBigSpotImg(spot)}
                bigSpotImg={bigSpotImg}
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;

