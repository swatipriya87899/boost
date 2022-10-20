import React from "react";
import Image from "next/image";
import filming from "./../../../public/images/filming.png";
import { useState, useEffect } from "react";
import styles from './../../../styles/components/Form.module.css'
import Button from "./Button";

const Form = () => {
  //User Input
  const inputValues = { name: "", email: "", phone: "", description: "" };
  const [formValues, setFormValues] = useState(inputValues);
  //error State
  const [formErrors, setFormErrors] = useState({});
  //Submit Check state
  const [isSubmit, setIsSubmit] = useState(false);

  //onChange Input function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    {
      console.log(formValues);
    }
  };

  //onSubmit fucntion
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length == 0 && isSubmit)
  //     console.log(formValues);
  // }, [formErrors]);

  //Form validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) errors.name = "Username is required";
    if (!values.email) errors.email = "Email is required";
    else if(!regex.test(values.email)) errors.email = "This is not a valid Email"
    if (!values.phone) errors.phone = "Phone Number is required";
    else if(values.phone.length<10) errors.phone = "Enter 10 digit phone number"
    return errors;
  };

  return (
    <div className={styles.form}>
      {Object.keys(formErrors).length == 0 && isSubmit? alert('Success!!'):""}
    <div
      className="primary_background_color tertiary_text_color"
      style={{ flexDirection: "column", borderRadius:'24px', padding:"40px", margin:'auto' }}
    >
      <div style={{width:'230px', height:"230px", margin:'auto'}}><Image src={filming} alt="filming"></Image></div>
      <div className="heading">
        <div className="secondary_text_color inline">Let&#39;s</div> Connect!
      </div>
      <div className="light_font400">
        Submit the form below, tell us a bit more about yourself, and we’ll be
        in touch shortly. Have a Great Day!
      </div>
      <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
        <div className="flex" style={{ justifyContent: "space-around" }}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              placeholder="Name*"
              onChange={handleChange}
              className="input"
            />
            <p>{formErrors.name}</p>
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              placeholder="Email*"
              onChange={handleChange}
              className="input"
            />
            <p>{formErrors.email}</p>
          </div>
        </div>
        <div className="flex" style={{ justifyContent: "space-around" }}>
          <div>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formValues.phone}
              placeholder="Phone*"
              onChange={handleChange}
              className="input"
            />
            <p>{formErrors.phone}</p>
          </div>
          {/* dropdown */}
          <div>
          <select className="input">
          <option value="_" selected disabled>You are</option>
            <option value="grapefruit">Engineer</option>
            <option value="lime">Doctor</option>
            <option selected value="coconut">
              Writer
            </option>
          </select>
          </div>
        </div>
        <textarea
          className="input textarea"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          placeholder="Describe what you are looking to achieve."
        ></textarea>
        <button
          type="submit" className="submit_button cursor">
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
