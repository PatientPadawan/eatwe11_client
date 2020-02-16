import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import useMountEffect from '../../hooks/mountEffect';
import MealsService from '../../services/meals-service';


const Landing = ({
  updateMeals
}) => {
  useMountEffect(() => {
    const fetchData = async () => {
      const res = await MealsService.getDemo();
      const newArr = res.hits.map((obj) => ({ ...obj, isActive: false }));
      updateMeals(newArr);
    };
    fetchData();
  });

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
          <Link to="/dashboard" className="button uppercase">explore eatwe11</Link>
        </div>
      </section>
      <section>
        Enter more sections explaining app
      </section>
    </>
  );
};

export default Landing;
