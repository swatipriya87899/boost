import React from "react";
import styles from './../../styles/Buddies.module.css';
import { useSelector } from "react-redux";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import profile from "./../../public/images/profile.png";
import Footer from "./components/Footer";
import Button from "./components/Button";
import arrow from "./../../public/images/arrow.png";

const buddies = () => {

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
        exposure and website traffic among our competitors? If you're looking
        for a low-cost, high-quality promotion, our social media marketing is
        for you. We will beat any pricing that you find acceptable.
      </div>

      {/* Booster Buddies Details */}
      <div className="flex" style={{ margin: "0px 70px" }}>
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

export default buddies;
