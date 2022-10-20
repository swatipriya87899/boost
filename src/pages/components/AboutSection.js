import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/AboutSection.module.css";
import about from './../../../public/images/about.png'

const AboutSection = () => {
  return (
    <div className='secondary_text_color tertiary_background_color padding'>
        <div className='heading'><div className='primary_text_color inline'>Who </div>we are?</div>
        <div className='content'>We link Brands who are looking for Authentic Partnership with influencers who generate Millions of view each months, We know how to use social media to Booost Business Result with Revenue.</div>
        <div className={styles.about_image}><Image src={about} alt="about"></Image></div>
    </div>
  )
}

export default AboutSection