import React from 'react';

export default function Meal({
  meals,
}) {
  return (
    <div className="meals">
      {meals.recipe.label}
      <div>
        kCal per serving:
        {' '}
        { Math.round(meals.recipe.calories / meals.recipe.yield) }
      </div>
      <div>
        Protein per serving:
        {' '}
        { Math.round(meals.recipe.totalNutrients.PROCNT.quantity / meals.recipe.yield) }
        (g)
      </div>
      <div>
        Carbs per serving:
        {' '}
        { Math.round(meals.recipe.totalNutrients.FAT.quantity / meals.recipe.yield) }
        (g)
      </div>
      <div>
        Fat per serving:
        {' '}
        { Math.round(meals.recipe.totalNutrients.CHOCDF.quantity / meals.recipe.yield) }
        (g)
      </div>
    </div>
  );
}
