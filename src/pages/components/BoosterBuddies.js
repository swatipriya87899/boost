import React from "react";

//Carousel
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

import Card from './Card'
import ayushman from './../../../public/images/ayushman.jpeg'
import pragati from './../../../public/images/pragati.jpeg'
import ruhee from './../../../public/images/ruhee.jpg'
import shruti from './../../../public/images/shruti.jpeg'
import rajveer from './../../../public/images/rajveer.jpeg'
import manjeet from './../../../public/images/manjeet.jpeg'
import vasundra from './../../../public/images/vasundra.jpeg'
import Button from './Button'

//Importing the owl carousel component
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});



const BoosterBuddies = () => {

  const options = {
margin: 30,
responsiveClass: true,
center:true,
dots: true,
autoplayTimeout:5000,
autoplay: true,
smartSpeed:2000,
loop:true,
dotEach:true,
responsive: {
  0: {
  items: 1,
  },
  400: {
  items: 1,
  },
  600: {
  items: 2,
  },
  700: {
  items: 3,
  },
  1000: {
  items: 4.5,
  },
  1200:{
    items:4.8
  }
  },
  }

  return (
    <div className='tertiary_text_color' style={{background:"#C4C4C4", padding: '100px 0px'}}>
        <div className='heading'>Our Booster <div className='secondary_text_color inline'> Buddies</div></div>
    
        <OwlCarousel className='owl-theme' {...options} style={{width:'80vw', margin:'auto'}}>
        <Card images={ayushman}></Card>
        <Card images={pragati}></Card>
        <Card images={ruhee}></Card>
        <Card images={shruti}></Card>
        <Card images={vasundra}></Card>
        <Card images={manjeet}></Card>
        <Card images={rajveer}></Card>
        </OwlCarousel>

        <div className='tertiary_text_color' style={{fontSize:'20px', fontWeight:'bold'}}>Any many more...</div>
       
        {/* <div className='flex' style={{marginTop:'30px'}}><Button title="Meet All" button_style={{boxShadow: '4px -4px 0px #042A2B'}}></Button></div> */}
    </div>
  )
}

export default BoosterBuddies