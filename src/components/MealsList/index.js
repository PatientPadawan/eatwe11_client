import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Meal from '../Meal';
import NavBar from '../NavBar';
import MealsService from '../../services/meals-service';

const MealsList = ({
  meals,
  macros,
  location,
  updateMeals,
  toggleMeal,
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
      <NavBar location={location} />
      <div className="mealsWrapper">
        <form onSubmit={handleSubmit} className="mealsSearchForm">
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="inputHeavyStyle"
          />
          <button
            type="submit"
            className="button inputSubmitBtn"
          >
            search
          </button>
        </form>
        <div className="mealsLegend">
          <div>
            <FontAwesomeIcon size="1x" icon="burn" />
            {' '}
            Calories
          </div>
          <div>
            <FontAwesomeIcon size="1x" icon="cubes" />
            {' '}
            Proteins
          </div>
          <div>
            <FontAwesomeIcon size="1x" icon="tachometer-alt" />
            {' '}
            Carbs
          </div>
          <div>
            <FontAwesomeIcon size="1x" icon="tint" />
            {' '}
            Fats
          </div>
        </div>
        {meals.map((el, i) => (
          <Meal
            key={el.recipe.uri}
            meals={meals[i]}
            toggleMeal={toggleMeal}
          />
        ))}
      </div>
    </>
  );
};

export default MealsList;
