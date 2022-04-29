const dataApi = (data) => {
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'aplication/json' },
  }).then((response) => response.json());
};
export default dataApi;
