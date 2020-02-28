import config from '../config';

const RegisterService = {
  async postBetaRegister(email) {
    const res = await fetch(`${config.API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
    return (
      (!res.ok) ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default RegisterService;
