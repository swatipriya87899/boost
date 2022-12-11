import Image from "next/image";
import React from "react";
import styles from "./../../../styles/components/Marketing.module.css";
import arrow from "./../../../public/images/arrow.png";
import down_arrow from "./../../../public/images/down_arrow.png";

const Marketing = (props) => {
  return (
    <div
      className="secondary_background_color container center"
      style={props.container_style}
    >
      <div className="heading" style={props.heading1_style}>
        {props.heading1}{"  "}<div className="secondary_text_color inline">{props.heading2}</div>
      </div>
      <div className="content">
        {props.content}
      </div>
      <div className={styles.responsive_image}>
        <div style={{ width: "180px" }}>
          <Image
            src={props.image1}
            alt="marketing1"
            width="150px"
            height="150px"
            style={{ display: "block" }}
          />
          <div style={{ fontWeight: "bold" }}>
            {props.image_title1}
          </div>
        </div>
        {/* right arrow for large devices */}
        <div className={styles.large_arrow}>
          <Image src={arrow} alt="arrow"></Image>
        </div>
        {/* down arrow for small devices */}
        <div className={styles.small_arrow}>
          <Image src={down_arrow} alt="down_arrow"></Image>
        </div>
        <div style={{ width: "180px" }}>
          <Image
            src={props.image2}
            alt="marketing2"
            width="150px"
            height="150px"
            style={{ display: "block" }}
          />
          <div style={{ fontWeight: "bold" }}>
            {props.image_title2}
          </div>
        </div>
        {/* right arrow for large devices */}
        <div className={styles.large_arrow}>
          <Image src={arrow} alt="arrow"></Image>
        </div>
        {/* down arrow for small devices */}
        <div className={styles.small_arrow}>
          <Image src={down_arrow} alt="down_arrow"></Image>
        </div>{" "}
        <div style={{ width: "180px", height: "180px" }}>
          <Image
            src={props.image3}
            alt="marketing3"
            width="150px"
            height="150px"
            style={{ display: "block" }}
          />
          <div style={{ fontWeight: "bold" }}>
            {props.image_title3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
