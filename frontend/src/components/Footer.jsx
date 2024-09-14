import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">SPCE</div>
          <div className="right">
            <p>Krishna nasta house, University Circle Vidhyanagar</p>
            <p>Open: 08:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Mit,Smit,Rudhresh,Harsh</p>
          </div>
          <div className="right">
            {/* <p>All Rights Reserved By CodeWithZeeshu.</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;