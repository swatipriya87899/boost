import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import boost_logo from "../../../public/images/boost_logo.png";
import Hamburgur from "./Hamburgur";
import { navVisibility } from "../../redux/action";
import styles from "../../../styles/components/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const data = useSelector((state) => state.nav);
  const dispatch = useDispatch();
  return (
    <div className="margin" style={{ paddingTop: "25px" }}>
      <Link href="/">
        <div className={styles.logo_image} style={{cursor:'pointer'}}>
          <Image src={boost_logo} alt="logo"></Image>
        </div>
      </Link>
      <div
        onClick={() => dispatch(navVisibility(true))}
        className={styles.hamburgur}
      >
        <Hamburgur></Hamburgur>
      </div>
    </div>
  );
};

export default Navbar;
