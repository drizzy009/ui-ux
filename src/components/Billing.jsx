import React from 'react';
import { apple , bill , google } from '../assets';
import styles, { layout } from '../style';

const Billing = () =>  (
    <section id='product' className={`${layout.sectionReverse} `}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/>billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In illum optio ea magni tempora sequi. Maxime voluptatum eum est, veritatis, magni, unde dolorum itaque deserunt velit molestiae delectus quibusdam illo.</p>
      </div>
    </section>
  )


export default Billing;

