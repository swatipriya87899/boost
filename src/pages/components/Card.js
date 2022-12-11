import React from "react";
import styles from "../../../styles/components/Card.module.css";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className={styles.card} style={props.card_style}>
      <Image src={props.images} alt="Gift Box" className={styles.images} height={300} width={238}></Image>
      {/* <div className="tertiary_text">{props.name}</div> */}
    </div>
  );
};

export default Card;
