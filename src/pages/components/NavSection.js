import React from 'react';
import { useDispatch } from 'react-redux';
import { navVisibility } from '../../redux/action';
import styles from '../../../styles/components/NavSection.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const NavSection = () => {

  const visibility= useDispatch();
  return (
    <div className={styles.navSection}>
        <ul>
            <Link href="/"><li onClick={()=>visibility(navVisibility(false))} className='cursor'>Home</li></Link>
            <Link href="/service"><li className='cursor' onClick={()=>visibility(navVisibility(false))}>Our Services</li></Link>
            <li className='cursor'>Our Boooster Buddies</li>
        </ul>
        <div className='cursor'><FontAwesomeIcon
              icon={faXmark}
              width="25px"
              style={{position:'absolute',right:'50px', top:'25px'}}
              onClick={()=>visibility(navVisibility(false))}
            ></FontAwesomeIcon></div>
    </div>
  )
}

export default NavSection