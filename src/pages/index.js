import React from "react";
import styles from "../../styles/Home.module.css";
import { useSelector } from "react-redux";
import AboutSection from "./components/AboutSection";
import BoosterBuddies from "./components/BoosterBuddies";
import Button from "./components/Button";
import Footer from "./components/Footer";
import GiftBox from "./components/GiftBox";
import Navbar from "./components/Navbar";
import NavSection from "./components/NavSection";
import arrow from "./../../public/images/arrow.png";
import Carousel from "./components/Carousel";

const Home = () => {
  //navVisibility
  const { nav } = useSelector((state) => state);
  return (
    <>
      <div className="primary_background center">
        <div className="heroSection"><div className="cursor">
          <Navbar></Navbar>
        </div>
        <div className={styles.content}>
          <div
            className={styles.title}
          >
            More Than Just
          </div>
          <div className={styles.subtitle}>
            Creator Manage{" "}
            <div className="secondary_text_color inline">Agency</div>
          </div>
          <div className={styles.description}>
            Booost media{" "}
            <div style={{fontWeight:'100', display:"inline"}}>
               is an Agency who provides Game Changing ,Growth Focused
              Results and transform your social media presence with high-quality
              content.
            </div>
          </div>
          <div className={styles.button_group}>
            <Button title="I am a" subtitle=" brand" image={arrow} logo="true"></Button>
            <Button title="I am a" subtitle=" Creator" image={arrow} logo="true"></Button>
          </div>
        </div></div>
        <GiftBox></GiftBox>
         <AboutSection></AboutSection>
        <BoosterBuddies></BoosterBuddies>
        {/* <Carousel></Carousel> */}
        <Footer></Footer>
      </div>
      {nav && <NavSection></NavSection>}
    </>
  );
};

export default Home;
