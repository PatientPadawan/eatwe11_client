import React, { useState } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import { updateMacros } from '../../actions/index';
import './Anthropometric.css';

const mapDispatchToProps = (dispatch) => ({ updateMacros: (macros) => dispatch(updateMacros(macros)) });

const ConnectedAnthropometric = (props) => {
  const [age, setAge] = useState();
  const [sex, setSex] = useState('male');
  const [active, setActive] = useState(1.2);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const numWeight = parseInt(weight, 10);
    const numHeight = parseInt(height, 10);
    const numAge = parseInt(age, 10);
    let TDEE;
    if (sex === 'male') {
      TDEE = ((10 * (numWeight / 2.205)) + (6.25 * (numHeight * 2.54)) - (5 * numAge) + 5) * active;
    } else {
      TDEE = ((10 * (numWeight / 2.205)) + (6.25 * (numHeight * 2.54)) - (5 * numAge) - 161) * active;
    }
    const macros = {
      TDEE,
      protein: (TDEE * 0.15),
      carb: (TDEE * 0.60),
      fat: (TDEE * 0.25),
    };
    props.updateMacros(macros);
  };

  return (
    <>
      <NavBar />
      <section>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="height">
                height(in)
                <input
                  id="height"
                  type="number"
                  name="field1"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="weight">
                weight(lbs)
                <input
                  id="weight"
                  type="number"
                  name="field2"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="age">
                age(yrs)
                <input
                  id="age"
                  type="number"
                  name="field3"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label htmlFor="sex">
                sex
                <select
                  id="sex"
                  name="field4"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="activity">
                activity level
                <select
                  id="activity"
                  name="field5"
                  value={active}
                  onChange={(e) => setActive(e.target.value)}
                >
                  <option value={1.2}>sedentary</option>
                  <option value={1.4}>slightly active</option>
                  <option value={1.6}>moderately active</option>
                  <option value={1.75}>very active</option>
                  <option value={2}>extra active</option>
                  <option value={2.3}>pro athlete</option>
                </select>
              </label>
            </li>
            <li>
              <button
                type="submit"
                className="button"
              >
                Submit
              </button>
            </li>
          </ul>
        </form>
      </section>
    </>
  );
};

const Anthropometric = connect(null, mapDispatchToProps)(ConnectedAnthropometric);

export default Anthropometric;
