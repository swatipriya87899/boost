import React from 'react';
import styles from './../../../styles/components/Carousel.module.css'
import Card from './Card';import profile from './../../../public/images/profile.png'

const Carousel = () => {

    let box = document.querySelector('.product_container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }


  return (
    <div className="product_carousel">
        <button className={styles.pre_btn} onClick={btnpressprev}><p>&lt;</p></button>
        <button className={styles.next_btn} onClick={btnpressnext}><p>&gt;</p></button>
        <div className={styles.product_container}>
        <Card images={profile} name="Tripti Verma"></Card>
        <Card images={profile} name="Swati Verma"></Card>
        <Card images={profile} name="Tripti Verma"></Card>
        <Card images={profile} name="Nidhi Verma"></Card>
        <Card images={profile} name="Swati Verma"></Card>
        <Card images={profile} name="Tripti Verma"></Card>
        <Card images={profile} name="Nidhi Verma"></Card>
        </div>
    </div>
  )
}

export default Carousel