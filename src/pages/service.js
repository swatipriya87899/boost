import React from "react";
import Navbar from "./components/Navbar";
import styles from "./../../styles/service.module.css";
import Marketing from "./components/Marketing";

const service = () => {
  return (
    <div className="tertiary_background_color">
      <Navbar></Navbar>
      <div className={styles.description}>
        <div className="heading center primary_text_color">
          Services <div className="secondary_text_color inline">we provide</div>
        </div>
        <div className="secondary_text_color font200 content">
          Are you looking for a cost-effective approach to increase your brand
          exposure and website traffic among our competitors? If you&#39;re looking
          for a low-cost, high-quality promotion, our social media marketing is
          for you. We will beat any pricing that you find acceptable.
        </div>
      </div>

      {/* Influencer Marketing Section */}
      <Marketing></Marketing>
    </div>
  );
};

export default service;
