import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <section className="Landing_section">
        <NavBar />
        <div className="Landing_headingContainer">
          <h2>
            <span className="Landing_heading capitalize">recipes for you</span>
            <span className="Landing_headingText">
              EatWe11 helps you become aware of your macronutrient needs. We provide recipes to
              fit your specific profile. Transform your diet into a personalized meal plan.
            </span>
          </h2>
          <Link to="/dashboard" className="button buttonWhite capitalize">explore eatwe11</Link>
        </div>
      </section>
      <section>
        Enter more sections explaining app
      </section>
    </>
  );
}
