import React from 'react';
import { useDispatch } from 'react-redux';
import { navVisibility } from '../../redux/action';
import styles from '../../../styles/components/NavSection.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavSection = () => {

  const visibility= useDispatch();
  return (
    <div className={styles.navSection}>
        <ul>
            <li className='cursor'>Home</li>
            <li className='cursor'>Our Services</li>
            <li className='cursor'>Our Boooster Buddies</li>
        </ul>
        <div className='cursor'><FontAwesomeIcon
              icon={faXmark}
              width="25px"
              style={{position:'absolute',right:'50px', top:'15px'}}
              onClick={()=>visibility(navVisibility(false))}
            ></FontAwesomeIcon></div>
    </div>
  )
}

export default NavSection