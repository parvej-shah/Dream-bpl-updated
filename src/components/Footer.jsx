import React from "react";
import logoFooter from '../assets/images/logo-footer.png'
import './button.css'
export default function Footer() {
  return (
    <div className=" bg-[#06091A] text-base-content p-10">
      <div className="flex justify-center pt-48 p-5">
        <img src={logoFooter} alt="" />
      </div>
      <div className="footer">
        <nav className="max-w-sm text-white">
          <h6 className="footer-title text-white">Aboaut Us</h6>
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav></nav>
        <nav className="text-white">
          <h6 className="footer-title text-white">Quick Links</h6>
          <li className="link link-hover list-disc">Home</li>
          <li className="link link-hover list-disc">Service</li>
          <li className="link link-hover list-disc">About</li>
          <li className="link link-hover list-disc">Contact</li>
        </nav>
        <nav></nav>
        <div className="text-white">
          <h6 className="footer-title text-white">Subscriber</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button  className="font-bold btn join-item bg-gradient-to-r from-[#d48cb5] to-[#f0c454]">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-white text-center">@2024 DreamSix-BPL,All Rights Reserved.</p>
    </div>
  );
}
