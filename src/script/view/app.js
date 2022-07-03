import "../components/header-jumbotron.js"
import "../components/search-bar.js";
import "../components/case-report.js";
import "../components/case-about.js";
import "../components/footer-custom.js"
import CovidCases from "../data/data-source.js";


const app = () => {
  const searchBarElement = document.querySelector("search-bar");
  const caseElement = document.querySelector("case-report");

  const btnSearch = async(event) => {
    event.preventDefault();
    if(searchBarElement.value.length === 0) {
      caseElement.renderErrorMessage(`Load country...`);
      try {
        const result = await CovidCases.localCase();
        caseElement.case("Indonesia", result);
      } catch(message) {
        caseElement.renderErrorMessage(`Errpr: ${message}`)
      }
      return
    }

    caseElement.renderErrorMessage("Load Country ... ");
    try {
      const result = await CovidCases.countriesCase(searchBarElement.value);
      renderResult(result)
    } catch(message) {
      fallbackResult(message)
    }
  }


  const renderResult = results => {
    caseElement.case(`${searchBarElement.value}`, results);
  }

  const fallbackResult = message => {
    caseElement.renderErrorMessage(`Error: ${message}`);
  }

  searchBarElement.clickEvent = btnSearch;

  caseElement.renderErrorMessage("Load Country ...");
  CovidCases.localCase()
  .then(result => {
    caseElement.case("Indonesia", result)
  })
  .catch(message => {
    caseElement.renderErrorMessage(`Error: ${message}`)
  })
}

export default app;
