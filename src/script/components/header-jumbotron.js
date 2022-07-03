import covIllustration from "../../image/cov.svg";
import customCss from "../../style/style.css";
import bootstrapCss from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import jquery from "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"

class HeaderJumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
  <div class="container">
      <a href="#" class="navbar-brand text-purple text-uppercase"> 🌏Portal Covid</a>
      <!-- button will appear when small screen -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
      </button>
      <!-- list item of navbar -->
      <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                  <a href="#contacts" class="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                  <a href="#question" class="nav-link">Question</a>
              </li>
              <li class="nav-item">
                  <a href="#feature" class="nav-link">Services</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
<!-- jumbotron -->
<section class="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
  <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between">
          <div>
              <h1>
                  Dapatkan info terkini secara realtime perkembangan kasus
                  <span class="text-purple">COVID-19</span>
              </h1>
              <p class="lead my-4">
                  Kami berfokus untuk memberikan informasi dan solutif terhadap perkembangan penyebaran kasus covid-19
              </p>
          </div>
          <img src="${covIllustration}" alt="" class="img-fluid w-50 d-none d-sm-block" />
      </div>
  </div>
</section>

    `
  }
}

customElements.define('header-jumbotron', HeaderJumbotron)
