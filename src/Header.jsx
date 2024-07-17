// Header.js
import React from 'react';
import './App.css'; // Assuming you want to keep header-specific styles in a separate file

const Header = () => {
  return (
    <header className="py-5 header-background">
      <div className="container-fluid px-4 px-lg-5 my-5">
        <div className="header-content text-center text-white pt-5">
          <h1 className="display-4 fw-bolder new-size">Generate more leads with a professional landing page!</h1>
          <form className="email-form mt-4 d-flex justify-content-center">
            <input type="email" className="form-control w-25" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
