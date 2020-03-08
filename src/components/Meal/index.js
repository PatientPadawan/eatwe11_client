import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useMountEffect from '../../hooks/mountEffect';

const Meal = ({
  meals,
  toggleMeal,
}) => {
  useMountEffect(() => {
    const whisk = window.whisk || {};
    whisk.queue = whisk.queue || [];

    whisk.queue.push(() => {
      whisk.shoppingList.defineWidget(`${meals.recipe.uri}`, {
        recipeUrl: meals.recipe.url,
        styles: {
          size: 'compact',
          type: 'modal',
        },
      });
    });

    whisk.queue.push(() => {
      whisk.display(`${meals.recipe.uri}`);
    });
  });

  return (
    <section className="meals gradientBox" onClick={() => toggleMeal(meals.recipe.uri)}>
      <h2 className="mealsTitle capitalize">
        {meals.recipe.label}
      </h2>
      <div className="mealsMacroContainer">
        <span className="mealsMacronutrient">
          { Math.round(meals.recipe.calories / meals.recipe.yield) }
          {' '}
          <FontAwesomeIcon size="1x" icon="burn" />
        </span>
        <span className="mealsMacronutrient">
          { Math.round(meals.recipe.totalNutrients.PROCNT.quantity / meals.recipe.yield) }
          {' '}
          <FontAwesomeIcon size="1x" icon="cubes" />
        </span>
        <span className="mealsMacronutrient">
          { Math.round(meals.recipe.totalNutrients.CHOCDF.quantity / meals.recipe.yield) }
          {' '}
          <FontAwesomeIcon size="1x" icon="tachometer-alt" />
        </span>
        <span className="mealsMacronutrient">
          { Math.round(meals.recipe.totalNutrients.FAT.quantity / meals.recipe.yield) }
          {' '}
          <FontAwesomeIcon size="1x" icon="tint" />
        </span>
      </div>
      <div className={`mealsCollapseContainer ${meals.isActive ? '' : 'hidden'}`}>
        <div className="mealsImageContainer">
          <img
            alt="recipe"
            src={meals.recipe.image}
            className="mealsImage"
          />
        </div>
        <div className="mealsButtonsContainer">
          <div className="mealsDirectionBtnContainer">
            <button
              type="button"
              className="mealsDirectionBtn"
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <a
                href={meals.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View directions
              </a>
            </button>
          </div>
          <div id={`${meals.recipe.uri}`} />
        </div>
      </div>
    </section>
  );
};

export default Meal;
