import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import MealsService from '../../services/meals-service';
import { updateMeals } from '../../actions/index';
import { useMountEffect } from '../../constants/hooks';
import './Landing.css';

const mapDispatchToProps = (dispatch) => ({ updateMeals: (meals) => dispatch(updateMeals(meals)) });

const ConnectedLanding = (props) => {
  useMountEffect(() => {
    const fetchData = async () => {
      const res = await MealsService.getDemo();
      const newArr = res.hits.map((obj) => ({ ...obj, isActive: false }));
      props.updateMeals(newArr);
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
          <Link to="/dashboard" className="button buttonWhite capitalize">explore eatwe11</Link>
        </div>
      </section>
      <section>
        Enter more sections explaining app
      </section>
    </>
  );
};

const Landing = connect(null, mapDispatchToProps)(ConnectedLanding);

export default Landing;
