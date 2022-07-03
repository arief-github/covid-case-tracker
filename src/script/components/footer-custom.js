import staysafe from "../../image/cov-staysafe.svg"

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
  <div class="container">
      <div class="row text-center mb-3">
          <div class="col">
              <h2>Stay Safe Everyone</h2>
          </div>
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <img src="${staysafe}" alt="staysafe">
              </div>
          </div>
      </div>
  </div>
  <p class = "text-center">
      Created with 💖 by
      Arief Kurniawan
  </p>
</section>
    `
  }
}

customElements.define("footer-custom", CustomFooter);
