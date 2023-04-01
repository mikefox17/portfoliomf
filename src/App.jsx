import React from 'react';
import styles from './style.js';
import {
  Navbar,
  DaSection,
  SrpSection,
  RedrockSection,
  About,
  Hero,
  Contact,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <About /> <DaSection /> <SrpSection /> <RedrockSection />
        <Contact />
      </div>
    </div>
  </div>
);

export default App;
