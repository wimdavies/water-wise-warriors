import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
      
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
    return (
      <section
      
        id="home"
        className="w-full flex xl:flex-row flex-col
        justify-center min-h-screen gap-10 max-container"
      >
        <motion.div 
          className="relative xl:w-2/5 flex flex-col justify-center items-start
                        w-full max-xl:padding-x pt-28">
          <motion.p className="text-xl font-montserrat text-coral-red">Dive Into the Cold</motion.p>
          <motion.h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The Best Cold</span>
            <br />
            <span className="text-coral-red inline-block mt-3">Water
            </span> Swimming
          </motion.h1>
          <p className="font-montserrate text-slate-gray text-lg-8 mt-6 mb-14 sm:max-w-sm">
            Discover 
            the Thrill and 
            Benefits of 
            Cold Water Swimming
          </p>
          <button class="mt-4 px-4 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow-md">Get Started</button>
      
          
          
          <div className="flex justify-start items-start flex-wrap w-full
          mt-20 gap-16">
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
        </motion.div>
        
  
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
        max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src="frontend/public/Lake-Windermere.jpg"
            alt="Lake"
            width={610}
            height={500}
            className="object-contain relative z-10"
          />
  
          <div className="flex sm:gap-6 gap-4 absolute
          -bottom-[5%] sm:left[10%] max-sm:px-6">
            {/* {shoes.map((shoe) => (
              <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg} */}
                
              </div>
            
          </div>
      </section>
    )
  }
  

  // return (
  //   <section>
  //     <div>
  //       <h1 class= 'px-8 max-w-sm mx-auto bg-blue-300 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 text-white text-center'>Find the Best Cold Water Swimming Spots Across the UK</h1>
  //     </div>
  //   </section>
  // );


export default HeroSection;
