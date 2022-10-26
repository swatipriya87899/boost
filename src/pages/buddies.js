import React from "react";
import styles from './../../styles/Buddies.module.css';
import { useSelector } from "react-redux";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import profile from "./../../public/images/profile.png";
import Footer from "./components/Footer";
import Button from "./components/Button";
import arrow from "./../../public/images/arrow.png";
import NavSection from "./components/NavSection";

const Buddies = () => {

      //navVisibility
  const { nav } = useSelector((state) => state);

  const details = [
    { profile: profile, name: "Aditya Verma" },
    { profile: profile, name: "Kundan Kumar" },
    { profile: profile, name: "Aditya Singh" },
    { profile: profile, name: "Kundan Kumari" },
    { profile: profile, name: "Aditya Sharma" },
    { profile: profile, name: "Kundan Raj" },
    { profile: profile, name: "Aditi Verma" },
    { profile: profile, name: "Kundan Kumari" },
  ];
  return (
    <div className="tertiary_background_color secondary_text_color">
      <Navbar></Navbar>
      <div className="heading center">
        Our Booster <div className="primary_text_color inline">Buddies</div>
      </div>
      <div className="content font200"  style={{padding:"60px 0px"}}>
        Are you looking for a cost-effective approach to increase your brand
        exposure and website traffic among our competitors? If you&#39;re looking
        for a low-cost, high-quality promotion, our social media marketing is
        for you. We will beat any pricing that you find acceptable.
      </div>

      {/* Booster Buddies Details  Largest Devices*/}
      <div className={styles.buddies_section_large}>
        {details.map((details) => (
          <div key={details.name}><Card
            card_style={{
              boxShadow: "4px -4px 0px #FFC700",
              color: "#042A2B",
              textAlign: "center",
              marginLeft:'5px',
              marginRight:'5px'
            }}
            images={details.profile}
            name={details.name}
          /></div>
        ))}
      </div>

       {/* Booster Buddies Details  Small Devices*/}
       <div className={styles.buddies_section_small}>
        {details.map((details) => (
          <div key={details.name}><Card
            card_style={{
              boxShadow: "4px -4px 0px #FFC700",
              color: "#042A2B",
              textAlign: "center",
              marginLeft:'5px',
              marginRight:'5px',
              width:'170px',
              height:'250px'
            }}
            images={details.profile}
            name={details.name}
          /></div>
        ))}
      </div>


   

      <div className={styles.footer_contents}>
        <div className={styles.footer_title}>We are excited to work with you</div>
        <div className={styles.footer_subtitle}>Join  Us Now</div>
        <div className="button_group">
        <Button
          title="I am a"
          subtitle=" brand"
          image={arrow}
          logo="true"
          button_style={{width:'250px', height:'45px'}}
        ></Button>
        <Button
          title="I am a"
          subtitle=" Creator"
          image={arrow}
          logo="true"
          button_style={{width:'250px', height:'45px'}}
        ></Button>
      </div>
      </div>

      {/* Footer */}
      <Footer form={false}></Footer>

      {nav && <NavSection></NavSection>}

    </div>
  );
};

export default Buddies;
