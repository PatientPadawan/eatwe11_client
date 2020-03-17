import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from '../NavBar';
import DashboardCanvas from '../DashboardCanvas';

const Dashboard = ({
  macros,
  location,
}) => (
  <>
    <NavBar location={location} />
    <div className="macroCardWrapper">
      <div className="macroCard">
        <div><FontAwesomeIcon size="3x" icon="cubes" /></div>
        <div className="macroCardMacros">
          {Math.round(macros.protein / 4)}
        </div>
        <div className="macroCardText">Grams of Protein Daily</div>
      </div>
      <div className="macroCard">
        <div><FontAwesomeIcon size="3x" icon="tachometer-alt" /></div>
        <div className="macroCardMacros">
          {Math.round(macros.carb / 4)}
        </div>
        <div className="macroCardText">Grams of Carbohydrates Daily</div>
      </div>
      <div className="macroCard">
        <div><FontAwesomeIcon size="3x" icon="tint" /></div>
        <div className="macroCardMacros">
          {Math.round(macros.fat / 9)}
        </div>
        <div className="macroCardText">Grams of Fat Daily</div>
      </div>
      <div className="macroCard">
        <div><FontAwesomeIcon size="3x" icon="burn" /></div>
        <div className="macroCardMacros">
          {Math.round((macros.TDEE / 3) * 0.9)}
          -
          {Math.round((macros.TDEE / 3) * 1.1)}
        </div>
        <div className="macroCardText">Calories Per Meal</div>
      </div>
      <div className="macroCard">
        <div><FontAwesomeIcon size="3x" icon="burn" /></div>
        <div className="macroCardMacros">
          {Math.round(macros.TDEE)}
        </div>
        <div className="macroCardText">Total Daily Calories</div>
      </div>
    </div>
    <br />
    <DashboardCanvas macros={macros} />
  </>
);

export default Dashboard;
