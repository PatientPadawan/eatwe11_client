import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const QuizForm = ({
  updateMacros,
  history,
}) => {
  const [age, setAge] = useState();
  const [sex, setSex] = useState('male');
  const [active, setActive] = useState(1.2);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [verification, setVerification] = useState();

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
    updateMacros(macros);
    history.push('/dashboard');
  };

  const isEnabled = verification === '2';

  return (
    <div className="Anthro_quizWrapper">
      <h2>Take our quiz</h2>
      <p>
        It gives us a rough estimate of your macronutrient needs which we use to make recipe
        recommendations.
      </p>
      <form className="Anthro_quizForm" onSubmit={handleSubmit}>
        <label htmlFor="height">
          Height
          <br />
          <input
            id="height"
            type="number"
            name="field1"
            placeholder="in inches..."
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label htmlFor="weight">
          Weight
          <br />
          <input
            id="weight"
            type="number"
            name="field2"
            placeholder="in pounds..."
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label htmlFor="age">
          Age
          <br />
          <input
            id="age"
            type="number"
            name="field3"
            placeholder="in years..."
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label htmlFor="sex">
          Sex
          <br />
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
        <label htmlFor="activity">
          Activity Level
          <br />
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
        <label htmlFor="verification">
          Final Question
          <br />
          <input
            id="verification"
            type="number"
            name="field6"
            placeholder="what is 1 + 1?"
            onChange={(e) => setVerification(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="button"
          disabled={!isEnabled}
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default withRouter(QuizForm);
