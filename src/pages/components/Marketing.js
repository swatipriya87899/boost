import Image from 'next/image';
import React from 'react';
import marketing1 from './../../../public/images/marketing1.png'
import marketing2 from './../../../public/images/marketing2.png'


const Marketing = () => {
  return (
    <div className='primary_background_color' style={{textAlign:'center'}}>
        <div className='heading tertiary_text_color'>Influencer <div className='secondary_text_color inline'>Marketing</div></div>
        <div className='content'>With our influencer marketing services, we give your business a human voice by partnering with creative and socially intelligent influencers.</div>
        <Image src={marketing1} alt="marketing1"></Image>
        <Image src={marketing1} alt="marketing1"></Image>
    </div>
  )
}

export default Marketing