import React from 'react';
import { rrf } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const RedrockSection = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={rrf} alt="card" className="w-[100%] h-[100%] relative z-[5]" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className="text-gradient underline underline-offset-2">
          Case Study
        </span>{' '}
        <br className="sm:block " />
        Red Rock Films
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        When designing a new website for Red Rock Films, we prioritized
        showcasing their cinematography and extensive show collection, using
        multiple custom post types to create a visually appealing and engaging
        user experience that accurately represents their brand and expertise.
      </p>{' '}
      <Button
        styles="mt-4"
        url="https://redrockfilms.net/"
        content="Visit Project"
      />
    </div>
  </section>
);

export default RedrockSection;
