import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Anthropometric.css';

export default function Anthropometric() {
  return (
    <>
      <NavBar />
      <section>
        <form>
          <ul>
            <li>
              <label htmlFor="height">
                height(in)
                <input
                  id="height"
                  type="number"
                  name="field1"
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
                />
              </label>
            </li>
            <li>
              <label htmlFor="sex">
                sex
                <select id="sex" name="field4">
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </label>
            </li>
            <li>
              <label htmlFor="activity">
                activity level
                <select id="activity" name="field5">
                  <option value="sedentary">sedentary</option>
                  <option value="slightActive">slightly active</option>
                  <option value="moderateActive">moderately active</option>
                  <option value="veryActive">very active</option>
                  <option value="extraActive">extra active</option>
                  <option value="proAthlete">pro athlete</option>
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
}
