import React from "react";
import Form from "./Form";
import Image from "next/image";
import styles from "./../../../styles/components/Footer.module.css";
import boost_logo from "../../../public/images/boost_logo.png";
import call from "../../../public/images/call.png";
import telegram from "../../../public/images/telegram.png";
import instagram from "../../../public/images/instagram.png";
import facebook from "../../../public/images/facebook.png";
import youtube from "../../../public/images/youtube.png";
import linkedIn from "../../../public/images/linkedIn.png";
import twitter from "../../../public/images/twitter.png";
import footer_logo from "./../../../public/images/footer_logo.png";
import telegramTertiary from "../../../public/images/telegramTertiary.png";
import callTertiary from "./../../../public/images/callTertiary.png";
import instagramTertiary from "./../../../public/images/instagramTertiary.png";
import facebookTertiary from "./../../../public/images/facebookTertiary.png";
import youtubeTertiary from "./../../../public/images/youtubeTertiary.png";
import linkedInTertiary from "./../../../public/images/linkedInTertiary.png";
import twitterTertiary from "./../../../public/images/twitterTertiary.png";

const Footer = () => {
  return (
    <div
      className="tertiary_background_color font300 primary_text_color"
      style={{paddingTop:'50px', fontSize: "13px" }}
    >
      <Form></Form>

      {/* Footer for larger devices */}
      <div className={styles.footerContent}>
        <div
          className="flex padding"
          style={{ justifyContent: "space-between", alignItems: "start" }}
        >
          <div>
            <Image src={boost_logo} alt="logo"></Image>
          </div>
          <div
            className="flex"
            style={{ flexDirection: "column", alignItems: "start" }}
          >
            <div className="flex">
              <Image src={telegram} alt="logo"></Image>
              <div className="inline primary_text_color">
                Booostmedia@gmail.com
              </div>
            </div>
            <div className="flex">
              <Image src={call} alt="logo"></Image>
              <div className="inline">(123) 456-7890</div>
            </div>
            <div className="flex" style={{ marginTop: "30px" }}>
              Follow us:
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={instagram} alt="logo" />
              </div>
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={facebook} alt="logo" />
              </div>
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={youtube} alt="logo" />
              </div>
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={linkedIn} alt="logo" />
              </div>
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={twitter} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="hr"></div>

        <div
          className="flex"
          style={{ justifyContent: "space-between", marginTop: "20px" }}
        >
          <div className="flex">
            <div style={{ marginLeft: "20px" }}>ABOUT US</div>
            <div style={{ marginLeft: "20px" }}>CONTACT US</div>
            <div style={{ marginLeft: "20px" }}>HELP</div>
            <div style={{ marginLeft: "20px" }}>PRIVACY POLICY</div>
            <div style={{ marginLeft: "20px" }}>PRIVACY POLICY</div>
          </div>
          <div>Copyright © 2018 • Lift Media Inc.</div>
        </div>
      </div>

      {/* Footer For Mobile Devices */}
      <div className={styles.footerContentForMobile}>
        <div className={styles.footer_logo}>
          <Image src={footer_logo} alt="footer logo"></Image>
        </div>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          <Image
            src={telegramTertiary}
            alt="logo"
            width="15"
            height="15"
          ></Image>
          <div className="tertiary_text_color inline">
            Booostmedia@gmail.com
          </div>
        </div>

        <div style={{ textAlign: "left" }}>
          <Image src={callTertiary} alt="logo" width="15" height="15"></Image>
          <div className="tertiary_text_color inline">(123) 456-7890</div>
        </div>

        <div className={styles.logo}>
          <Image
            src={instagramTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image>
          <Image
            src={facebookTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image>
          <Image
            src={youtubeTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image>
          <Image
            src={linkedInTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image>
          <Image
            src={twitterTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image>
        </div>

        <div className={styles.footerNavigation}>
          <div
            className="tertiary_text_color flex"
            style={{justifyContent: "space-between"}}
          >
            <div>About</div>
            <div>Privacy Policy</div>
          </div>
          <div
            className="tertiary_text_color flex"
            style={{ justifyContent: "space-between" }}
          >
            <div>Contact Us</div>
            <div>Disclaimer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
