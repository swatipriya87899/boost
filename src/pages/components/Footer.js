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

const Footer = (props) => {
  return (
    <div
      className="tertiary_background_color font300 primary_text_color"
      style={{ paddingTop: "50px", fontSize: "13px" }}
    >
      {props.form && <div id="form"><Form /></div>}

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
              <Image
                src={telegram}
                alt="logo"
                width="18px"
                height="18px"
              ></Image>
              <div
                className="inline primary_text_color"
                style={{ marginLeft: "8px" }}
              >
                prachi@booost.in
              </div>
            </div>
            <div className="flex">
              <Image src={call} alt="logo" width="18px" height="18px"></Image>
              <div className="inline" style={{ marginLeft: "8px" }}>
                8920575088
              </div>
            </div>
            <div className="flex" style={{ marginTop: "30px" }}>
              Follow us:
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <a href="https://instagram.com/booost.media?igshid=YmMyMTA2M2Y=">
                  <Image src={instagram} alt="logo" />
                </a>
              </div>
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <a href="https://www.facebook.com/booost.media">
                  <Image src={facebook} alt="logo" />
                </a>
              </div>
              {/* <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={youtube} alt="logo" />
              </div> */}
              <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <a href="https://www.linkedin.com/company/booost-media/">
                  <Image src={linkedIn} alt="logo" />
                </a>
              </div>
              {/* <div style={{ width: "20px", height: "20px", margin: "10px" }}>
                <Image src={twitter} alt="logo" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="hr"></div>

        <div
          className="flex"
          style={{ justifyContent: "space-between", marginTop: "20px" }}
        >
          <div className="flex">
            {/* <div style={{ marginLeft: "20px" }}>ABOUT US</div>
            <div style={{ marginLeft: "20px" }}>CONTACT US</div>
            <div style={{ marginLeft: "20px" }}>HELP</div>
            <div style={{ marginLeft: "20px" }}>PRIVACY POLICY</div> */}
            <div style={{ marginLeft: "20px" }}>PRIVACY POLICY</div>
          </div>
        </div>
      </div>

      {/* Footer For Mobile Devices */}
      <div className={styles.footerContentForMobile}>
        <div className={styles.footer_logo}>
          <Image src={footer_logo} alt="footer logo"></Image>
        </div>
        <div
          className="flex"
          style={{ marginTop: "15px", justifyContent: "start" }}
        >
          {/* <Image
            src={telegramTertiary}
            alt="logo"
            width="15"
            height="15"
          ></Image> */}
          <div
            className="tertiary_text_color inline"
            style={{ marginLeft: "7px" }}
          >
            prachi@booost.in
          </div>
        </div>

        <div className="flex" style={{ justifyContent: "start" }}>
          <Image src={callTertiary} alt="logo" width="15" height="15"></Image>
          <div
            className="tertiary_text_color inline"
            style={{ marginLeft: "7px" }}
          >
            8920575088
          </div>
        </div>

        <div className={styles.logo}>
          <a href="https://instagram.com/booost.media?igshid=YmMyMTA2M2Y=">
            <Image
              src={instagramTertiary}
              alt="logo"
              width="20"
              height="20"
            ></Image>
          </a>
          <a href="https://www.facebook.com/booost.media">
            <Image
              src={facebookTertiary}
              alt="logo"
              width="20"
              height="20"
            ></Image>
          </a>
          {/* <Image
            src={youtubeTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image> */}
          <a href="https://www.linkedin.com/company/booost-media/">
            <Image
              src={linkedInTertiary}
              alt="logo"
              width="20"
              height="20"
            ></Image>
          </a>
          {/* <Image
            src={twitterTertiary}
            alt="logo"
            width="20"
            height="20"
          ></Image> */}
        </div>

        <div className={styles.footerNavigation}>
          <div
            className="tertiary_text_color flex"
            style={{ justifyContent: "space-between" }}
          >
            <div>Privacy Policy</div>
          </div>
          <div
            className="tertiary_text_color flex"
            style={{ justifyContent: "space-between", paddingBottom: "50px" }}
          >
            {/* <div>Contact Us</div>
            <div>Disclaimer</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
