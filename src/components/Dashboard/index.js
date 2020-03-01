import React from 'react';
import NavBar from '../NavBar';
import DashboardCanvas from '../DashboardCanvas';

const Dashboard = ({
  macros,
  location,
}) => (
  <>
    <NavBar location={location} />
    <section>
      <div>
        Protein:
        {' '}
        {Math.round(macros.protein / 4)}
        (g)
      </div>
      <div>
        Carbohydrates:
        {' '}
        {Math.round(macros.carb / 4)}
        (g)
      </div>
      <div>
        Fats:
        {' '}
        {Math.round(macros.fat / 9)}
        (g)
      </div>
    </section>
    <section>
      <div>
        TDEE:
        {' '}
        {Math.round(macros.TDEE)}
        {' '}
        calories
      </div>
      <div>
        Calories per meal:
        {' '}
        {Math.round((macros.TDEE / 3) * 0.9)}
        -
        {Math.round((macros.TDEE / 3) * 1.1)}
      </div>
    </section>
    <br />
    <section>
      <DashboardCanvas macros={macros} />
    </section>
  </>
);

export default Dashboard;
