import React from 'react';
import { connect } from 'react-redux';
import Meal from '../../components/Meal/Meal';
import NavBar from '../../components/NavBar/NavBar';
import './Meals.css';

const mapStateToProps = (state) => ({ meals: state.meals });

const connectedMeals = ({ meals }) => (
  <>
    <NavBar />
    <section>
        replace with search function / component
    </section>
    <section>
      {meals.map((el, i) => (
        <Meal key={el.recipe.label} meals={meals[i]} />
      ))}
    </section>
  </>
);

const Meals = connect(mapStateToProps)(connectedMeals);

export default Meals;
