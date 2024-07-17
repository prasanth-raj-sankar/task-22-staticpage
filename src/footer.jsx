// Header.js
import React from 'react';
import './App.css'; // Assuming you want to keep header-specific styles in a separate file

const Headers = () => {
  return (

    <>
    <header className="py-5 header-background">
      <div className="container-fluid px-4 px-lg-5 my-5">
        <div className="header-content text-center text-white pt-5">
          <h1 className="display-4 fw-bolder new-size">Ready to get started? Sign up now!</h1>
          <form className="email-form mt-4 d-flex justify-content-center">
            <input type="email" className="form-control w-25" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </header>

<footer className="footer mt-auto py-3">
<div className="container d-flex justify-content-between align-items-center">
  <div className="footer-links">
    <a href="/about">About</a>
    <span> · </span>
    <a href="/contact">Contact</a>
    <span> · </span>
    <a href="/terms">Terms of Use</a>
    <span> · </span>
    <a href="/privacy">Privacy Policy</a>
    <p>© Your Website 2023. All Rights Reserved.</p>
  </div>
  <div className="footer-social">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</div>
</footer>

    </>
    

  );
}

export default Headers;
