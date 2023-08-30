import React from 'react';
import gpt3Logo from '../../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">COLLEGE OF INFORMATION & COMMUNICATION TECHNOLOGY</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="https://www.ctu.edu.vn/" target="_blank"><span>CAN THO UNIVERSITY</span></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Web created by Phu - Using ReactJS, <br /> With the support of some other sources </p>

      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://www.facebook.com/phutran15/" target="_blank"><p>Facebook</p></a>
        <a href="https://github.com/PhuTran15" target="_blank"><p>GitHub</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>About me</h4>
        <p>Tran Ngoc Phu</p>
        <p>0947 283 929</p>
        <p>phumax281015@gmail.com</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Can Tho University</p>
        <p>02923 872 728</p>
        <p>ctu.edu.vn</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      {/* <p>@2021 GPT-3. All rights reserved.</p> */}
      <p>@2022. Thanks for everything</p>
    </div>
  </div>
);

export default Footer;
