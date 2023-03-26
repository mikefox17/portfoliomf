import React from 'react';
import styles from '../style';
import { discount, robot, huey, desktop } from '../assets';
import GetStarted from '../components/GetStarted';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{' '}
          <span className="text-white">the first month</span>
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Small Business <br className="sm:block hidden" />
          <span className="text-gradient">Web Design</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        & Development
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        For $150 a month, I offer web design services that include custom-coded
        websites or WordPress sites, web hosting with 24/7 customer service, and
        unlimited edits, providing small businesses with a comprehensive
        solution to their website needs.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={desktop}
        alt="billing"
        className="w-[100%] h-{100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
