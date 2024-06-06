import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="textConyainer">
        <h1>
          Let's work <br /> together
        </h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hello street New York</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+998 93 772 09 30</span>
        </div>
      </div>
      <div className="fromContiner">
        <form action="">
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" name="" id="" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
