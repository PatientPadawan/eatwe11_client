import config from '../config';

const MealsService = {
  async getDemo() {
    const res = await fetch(`${config.EDAMAME_URL}/search?q=chicken&app_id=${config.EDAMAME_ID}&app_key=${config.EDAMAME_KEY}&calories=755-855`);
    const data = res.json();
    return data;
  },
};

export default MealsService;
