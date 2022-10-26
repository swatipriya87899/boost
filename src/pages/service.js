import React from "react";
import Navbar from "./components/Navbar";
import styles from "./../../styles/service.module.css";
import Footer from "./../../src/pages/components/Footer";
import Marketing from "./components/Marketing";
import Branding from "./components/Branding";
import { useSelector } from "react-redux";
import NavSection from "./components/NavSection";

import marketing1 from "./../../public/images/marketing1.png";
import marketing2 from "./../../public/images/marketing2.png";
import marketing3 from "./../../public/images/marketing3.png";

import media1 from "./../../public/images/media1.png";
import media2 from "./../../public/images/media2.png";
import media3 from "./../../public/images/media3.png";

const service = () => {
  //navVisibility
  const { nav } = useSelector((state) => state);

  return (
    <div className="tertiary_background_color">
      <Navbar></Navbar>
      <div className={styles.description}>
        <div className="heading center primary_text_color">
          Services <div className="secondary_text_color inline">we provide</div>
        </div>
        <div
          className="secondary_text_color font200 content"
          style={{ marginTop: "30px", fontWeight: "100" }}
        >
          Are you looking for a cost-effective approach to increase your brand
          exposure and website traffic among our competitors? If you&#39;re
          looking for a low-cost, high-quality promotion, our social media
          marketing is for you. We will beat any pricing that you find
          acceptable.
        </div>
      </div>

      {/* Influencer Marketing Section */}
      <Marketing
        container_style={{ backgroundColor: "#FFC700" }}
        heading1="Influencer"
        heading2="Marketing"
        content="With our influencer marketing services, we give your business a human
        voice by partnering with creative and socially intelligent influencers."
        image1={marketing1}
        image_title1="Influencer Screening And Selection"
        image2={marketing2}
        image_title2="Brainstorming For The Branding"
        image3={marketing3}
        image_title3="Campaign Planning and Execution"
      ></Marketing>

      {/* Branding Section */}
      <Branding/>


       {/* Social Media Management */}
      <Marketing
        container_style={{ backgroundColor: "#C4C4C4" }}
        heading1="Social Media"
        heading2="Mangement"
        content="We provide social media management as a full-service option. So, with high-quality material, daily activity, monitoring-engagement, and increased followers, we transform your social media presence. While presenting your brand's story, this service will attract targeted followers who will then convert into committed consumers."
        image1={media1}
        image_title1="create a consistent brand voice"
        image2={media2}
        image_title2="engage your target audience"
        image3={media3}
        image_title3="foster lifelong customers"
      ></Marketing>

      <Footer></Footer>

      {nav && <NavSection></NavSection>}
    </div>
  );
};

export default service;
