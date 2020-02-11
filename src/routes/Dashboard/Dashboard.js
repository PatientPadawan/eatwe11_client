import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import './Dashboard.css';

const mapStateToProps = (state) => ({ macros: state.macros });

const connectedDashboard = ({ macros }) => (
  <>
    <NavBar />
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
      <div>
          replace with canvas element visually describing above
      </div>
    </section>
  </>
);

const Dashboard = connect(mapStateToProps)(connectedDashboard);

export default Dashboard;
