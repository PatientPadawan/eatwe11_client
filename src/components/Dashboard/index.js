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
        Protein
        {' '}
        {Math.round(macros.protein / 4)}
        (g)
      </div>
      <div>
        Carbohydrates
        {' '}
        {Math.round(macros.carb / 4)}
        (g)
      </div>
      <div>
        Fats
        {' '}
        {Math.round(macros.fat / 9)}
        (g)
      </div>
    </section>
    <section>
      <div>
        TDEE
        {' '}
        {Math.round(macros.TDEE)}
        kCal
      </div>
      <div>
        kCal per meal
        {' '}
        {Math.round(macros.TDEE / 3)}
      </div>
    </section>
    <br />
    <section>
      <DashboardCanvas />
    </section>
  </>
);

export default Dashboard;
