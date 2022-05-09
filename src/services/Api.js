const dataApi = (data) => {
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
export default dataApi;
