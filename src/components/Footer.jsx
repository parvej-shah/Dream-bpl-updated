import React from "react";

export default function Footer() {
  return (
    <div className=" bg-base-200 text-base-content p-10">
      <div className="footer">
        <nav className="max-w-sm">
          <h6 className="footer-title text-white">Aboaut Us</h6>
          <p>
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav></nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <li className="link link-hover list-disc">Home</li>
          <li className="link link-hover list-disc">Service</li>
          <li className="link link-hover list-disc">About</li>
          <li className="link link-hover list-disc">Contact</li>
        </nav>
        <nav></nav>
        <div>
          <h6 className="footer-title text-white">Subscriber</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn bg-black join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
