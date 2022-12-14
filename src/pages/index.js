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
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll/modules";

const Home = () => {
  //navVisibility
  const { nav } = useSelector((state) => state);
  return (
    <>
      <div className="primary_background center">
        <div className="section center">
          <div className="cursor">
            <Navbar></Navbar>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>More Than Just</div>
            <div className={styles.subtitle}>
              <Typewriter
                options={{
                  strings: ["Creator Manage Agency", "Brand Boosting Agency"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className={styles.description}>
              Booost media{" "}
              <div className="font100 inline">
                is an Agency who provides Game Changing ,Growth Focused Results
                and transform your social media presence with high-quality
                content.
              </div>
            </div>
            <Link to="form" spy="true" smooth="true" offset={50} duration={500}>
            <div className={styles.button_group}>
              <Button title="Say" subtitle=" Hello" image={arrow}></Button>
            </div>
            </Link>
          </div>
        </div>
        <GiftBox></GiftBox>
        <AboutSection></AboutSection>
        <BoosterBuddies></BoosterBuddies>
        <Footer form={true}></Footer>
      </div>
      {nav && <NavSection></NavSection>}
    </>
  );
};

export default Home;
