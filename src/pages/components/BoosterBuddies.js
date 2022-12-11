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
import profile from './../../../public/images/profile.png'
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
  items: 4,
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
        <Card images={profile} name="Tripti Verma"></Card>
        <Card images={profile} name="Swati Verma"></Card>
        <Card images={profile} name="Tripti Verma"></Card>
        <Card images={profile} name="Nidhi Verma"></Card>
        <Card images={profile} name="Tripti Verma"></Card>
        </OwlCarousel>
       
        <div className='flex' style={{marginTop:'30px'}}><Button title="Meet All" button_style={{boxShadow: '4px -4px 0px #042A2B'}}></Button></div>
    </div>
  )
}

export default BoosterBuddies