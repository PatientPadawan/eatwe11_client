import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';
import useMountEffect from '../../hooks/mountEffect';
import useScript from '../../hooks/useScript';
import MealsService from '../../services/meals-service';


const Landing = ({
  updateMeals,
  location,
  toggleModal,
  modal,
}) => {
  useMountEffect(() => {
    const fetchData = async () => {
      const res = await MealsService.getDemo();
      const newArr = res.hits.map((obj) => ({ ...obj, isActive: false }));
      updateMeals(newArr);
    };
    fetchData();
  });
  useScript('https://cdn.whisk.com/sdk/shopping-list.js');

  return (
    <>
      <section className={`Landing_section ${(modal) && 'blurred'}`}>
        <NavBar location={location} toggleModal={toggleModal} modal={modal} />
        <div className="Landing_headingContainer">
          <h2>
            <span className="Landing_heading">Recipes for you</span>
            <p className="Landing_headingText">
              EatWe11 helps you become aware of your macronutrient needs. We provide recipes to
              fit your specific profile. Transform your diet into a personalized meal plan.
            </p>
          </h2>
          <Link to="/assess" className="button uppercase">explore eatwe11</Link>
        </div>
      </section>
      <section>
        Enter more sections explaining app
      </section>
    </>
  );
};

export default Landing;
