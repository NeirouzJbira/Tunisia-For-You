import React from "react";
import Tour1 from "../components/images";
import Tour2 from "../components/images";
import Tour3 from "../components/images";
import Tour4 from "../components/images";
import Tour5 from "../components/images";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import "../App.css";

function Tours() {
  return (
    <div className="Tours">
      <h3 className="tours-section-title">Popular Tours</h3>
      <div className="underline"></div>
      <p className="tours-section-subtitle">
        Customized Tunisian tours just for you. Choose the cities and sites{" "}
        <br></br> you want to visit and leave the planning to us.{" "}
      </p>
      <div className="tours-container" id="tours">
        <div className="tour">
          <img className="tour-img" src={Tour1} alt="" />
          <div className="tour-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3 className="tour-title">Tour </h3>
          <p className="tour-desc">hey</p>
          <p className="tour-days">9 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour2} alt="" />
          <div className="tour-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3 className="tour-title">Tour</h3>
          <p className="tour-desc">tunis City</p>
          <p className="tour-days">7 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour3} alt="" />
          <div className="tour-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3 className="tour-title">Desert Tour</h3>
          <p className="tour-desc">Sahara Desert</p>
          <p className="tour-days">6 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour4} alt="" />
          <div className="tour-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3 className="tour-title"> Tour</h3>
          <p className="tour-desc">hey</p>
          <p className="tour-days">8 days</p>
        </div>
        <div className="tour">
          <img className="tour-img" src={Tour5} alt="" />
          <div className="tour-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h3 className="tour-title">Food Tour</h3>
          <p className="tour-desc">hey</p>
          <p className="tour-days">9 days</p>
        </div>
      </div>
      <Link to="/contact">
        <button className=" contact-btn" id="tours-section-btn">
          Book Now
        </button>
      </Link>
      <Navbar2 />
    </div>
  );
}

export default Tours;
