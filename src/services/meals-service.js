import config from '../config';

const MealsService = {
  async getDemo() {
    const res = await fetch(`${config.API_BASE_URL}/meal`);
    const data = (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json();
    return data;
  },
  async getRecipes(query, calMin, calMax) {
    const path = `${config.EDAMAME_URL}/search?q=${query}&app_id=${config.EDAMAME_ID}&app_key=${config.EDAMAME_KEY}&calories=${Math.round(calMin)}-${Math.round(calMax)}`;
    const res = await fetch(path);
    const data = (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json();
    return data;
  },
};

export default MealsService;
