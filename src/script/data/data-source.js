const BASE_URL = `https://covid19.mathdro.id/api/countries/IDN`;

class CovidCases {
  static localCase() {
    return fetch(BASE_URL)
      .then(response => {
        return response.json()
      })
      .catch(error => {
        if (error.response) {
          return Promise.reject(error.status);
        } else if (error.request) {
          return Promise.reject("Request error");
        } else {
          return Promise.reject(error.message);
        }
      });
  }

  static countriesCase(keyword) {
    return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      if (error.response) {
        return Promise.reject(error.status);
      } else if (error.request) {
        return Promise.reject("Request error");
      } else {
        return Promise.reject(error.message);
      }
    });
  }
}

export default CovidCases;
