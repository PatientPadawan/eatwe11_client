import React, { useState } from 'react';
import Meal from '../Meal';
import NavBar from '../NavBar';
import MealsService from '../../services/meals-service';

const MealsList = ({
  meals,
  macros,
  updateMeals,
  toggleMeal
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
      <form onSubmit={handleSubmit} className="mealsSearchForm">
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
      {meals.map((el, i) => (
        <Meal
          key={el.recipe.uri}
          meals={meals[i]}
          toggleMeal={toggleMeal}
        />
      ))}
    </>
  );
};

export default MealsList;
