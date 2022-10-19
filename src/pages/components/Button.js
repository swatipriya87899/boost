import Image from "next/image";
import React from "react";
import styles from "../../../styles/components/Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.button} style={props.button_style}>
      {props.title}
      <div className="tertiary_text_color inline" style={{ marginLeft: "8px" }}>
        {props.subtitle}
        {props.logo && <div className={styles.icon}><Image src={props.image} width="40%"/></div>}
      </div>
    </div>
  );
};

export default Button;
