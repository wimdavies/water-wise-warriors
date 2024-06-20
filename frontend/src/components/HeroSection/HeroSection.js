import React from 'react';
import { SpotCard } from '../SpotCard/spotcard';
import { useState } from 'react';
import bigSpot1 from '/Users/shoaiblatif/Documents/final-engineering-project/water-wise-warriors/frontend/src/images/bigSpot1.png';
import { spots } from '../SpotCard/SpotsData';

const HeroSection = () => {
  const [bigSpotImg, setBigSpotImg] = useState(bigSpot1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ml-20">
        <p className="text-xl font-montserrat text-coral-red">Dive Into the Cold</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The Best Cold</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Water</span> Swimming
        </h1>
        <p className="font-montserrate text-slate-gray text-lg-8 mt-6 mb-14 sm:max-w-sm">
          Discover the Thrill and Benefits of Cold Water Swimming
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md">Get Started</button>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          <div>
            <p className="text-4xl font-palanquin font-bold">400+</p>
            <p className="leading-7 font-montserrat text-slate-gray"> coastal spots</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">100+</p>
            <p className="leading-7 font-montserrat text-slate-gray"> Lake spots</p>
          </div>
          <div>
            <p className="text-4xl font-palanquin font-bold">250+</p>
            <p className="leading-7 font-montserrat text-slate-gray">community members</p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center bg-blue-50 space-y-4">
        <img
          src={bigSpotImg}
          alt="Lake Windermere"
          width={610}
          height={500}
          className="object-contain relative z-10 rounded-lg"
        />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[5%] left-[10%] sm:left-[20%] max-sm:px-6 me-16">
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
      </div>
    </section>
  );
};

export default HeroSection;

