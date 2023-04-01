import React from 'react';
import { dascreens } from '../assets';
import styles, { layout } from '../style';
import Button from '../components/Button';

const DaSection = () => (
  <section id="projects" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={dascreens}
        alt="bill"
        className="w-[100%] h-[100] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className={`underline underline-offset-4 text-gradient`}>
          Case Study
        </span>{' '}
        <br className="sm:block hidden" />
        District Advisory
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In the case of District Advisory's rebranding, a new website was
        necessary, and a fast and responsive site was created with a
        mobile-first approach. This ensured that the website was optimized for
        mobile users. The mobile-first approach helped to streamline the design
        process and ensure that the site was user-friendly.
      </p>
      <Button
        styles="mt-4"
        url="https://districtcpa.com/"
        content="Visit Project"
      />
    </div>
  </section>
);

export default DaSection;
