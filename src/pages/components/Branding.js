import React from "react";
import styles from "./../../../styles/components/Branding.module.css";

const Branding = () => {
  //task they do
  const task1 = [
    "Website Design",
    "Application Design",
    "Logo Design",
    "Product mockup",
  ];

  const task2 = [
    "Brand Flyer/Brochure",
    "Social media Post",
    "Product Photography",
    "Motion/Video",
  ]

  return (
    <div className="tertiary_background_color center secondary_text_color" style={{padding:'70px 0px'}}>
      <div className="heading primary_text_color">Branding...</div>
      <div className="content" style={{fontWeight:'100'}}>
        Today, branding is at an all-time high. We recruit a variety of people
        to help us with the brand shoots. For example, if there is a watch
        brand, we can hire a model to wear the watch and have the shoot done in
        our studio.
      </div>
       
       {/* task they do */}
       <ul className="flex content" style={{justifyContent:'space-between', textAlign:'left', marginTop:'30px'}}>
        <div>
        {
            task1.map((item)=>
                <li>{item}</li>
            )
        }
        </div>
        <div>
        {
            task2.map((item)=>
                <li>{item}</li>
            )
        }
        </div>
       </ul>
    </div>
  );
};

export default Branding;
