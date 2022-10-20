import React from "react";
import styles from "../../../styles/components/GiftBox.module.css";
import Image from "next/image";
import gift_box from "./../../../public/images/gift_box.png";
import Button from "./Button";

const GiftBox = () => {
  return (
    <div className="primary_background_color padding">
      <div className="screen_width">
        <div className="heading">
          Get Surprise
          <div style={{ display: "inline" }} className="secondary_text_color">
            {" "}
            Gift Box*
          </div>{" "}
          Now..!
        </div>
        <div className={styles.gift_box_image}>
          <Image src={gift_box} alt="Gift Box"></Image>
        </div>
        <div className="content">
          *We will send a Surprise gift box to our Booosted Buddies i.e. for
          whom we manage all their social media and help them get paid through
          Brand Endorsement .
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            title="Join Us"
            button_style={{
              background: "#FFFFFF",
              color: "#042A2B",
              boxShadow: "3px -3px 0px #042A2B",
              margin: "auto",
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
