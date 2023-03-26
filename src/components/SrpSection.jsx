import React from 'react';
import { card, srp } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const SrpSection = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient underline underline-offset-2">
          Case Study
        </span>{' '}
        <br className="sm:block " />
        Steve Rotfeld Productions
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        When building a new website for Steve Rotfled Productions, we
        prioritized video content and user experience, ensuring that the website
        was designed to interact seamlessly with video content while maintaining
        optimal visual appeal on smaller devices.
      </p>{' '}
      <Button
        styles="mt-4"
        url="https://www.rotfeldproductions.com/"
        content="Visit Project"
      />
    </div>
    <div className={layout.sectionImg}>
      <img src={srp} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SrpSection;
