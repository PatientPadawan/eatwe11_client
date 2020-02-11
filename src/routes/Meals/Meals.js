import React, { useState } from 'react';
import { connect } from 'react-redux';
import Meal from '../../components/Meal/Meal';
import NavBar from '../../components/NavBar/NavBar';
import MealsService from '../../services/meals-service';
import { updateMeals } from '../../actions/index';
import './Meals.css';

const mapStateToProps = (state) => ({
  meals: state.meals,
  macros: state.macros,
});

const mapDispatchToProps = (dispatch) => ({ updateMeals: (meals) => dispatch(updateMeals(meals)) });

const ConnectedMeals = ({
  meals,
  macros,
  updateMeals,
}) => {
  const [query, setQuery] = useState('chicken');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { TDEE } = macros;
    const fetchData = async () => {
      const res = await MealsService.getRecipes(query, ((TDEE / 3) * 0.9), ((TDEE / 3) * 1.1));
      const newArr = res.hits.map((obj) => ({ ...obj, isActive: false }));
      updateMeals(newArr);
    };
    fetchData();
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="button"
        >
          search
        </button>
      </form>
      <section>
        {meals.map((el, i) => (
          <Meal
            key={el.recipe.uri}
            meals={meals[i]}
          />
        ))}
      </section>
    </>
  );
};

const Meals = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeals);

export default Meals;
