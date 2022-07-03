class CaseItem extends HTMLElement {
  constructor() {
    super();
  }

  case(title, country) {
    this._confirmed = country.confirmed.value;
    this._recovered = country.recovered.value;
    this._deaths = country.deaths.value;
    this._lastUpdate = country.lastUpdate;
    this.title = title;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .article-body {
              margin: 15px;
              border-radius: 6px;
              padding: 20px;
          }

          .article-title {
              color: #22272c;
              font-size: 1.5em;
              font-weight: 700;
              line-height: 1em;
          }

          /* item */
          .container-box {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-around;
          }

          .box-item {
              background: #f2c94c;
              border-radius: 6px;
              margin-bottom: 15px;
              text-align: right;
              flex-basis: 100%;
              color: black;
          }

          .box-item:nth-child(2) {
            background: #d8232a;
            color: #fff;
          }

          .box-item:nth-child(3) {
            background: #219653;
            color: #fff;
          }

          .box-item p {
              padding-right: 20px;
          }

          .box-item .number {
              font-size: 30px;
              margin: 15px 0px;
              line-height: .9em;
          }

     

          @media screen and (min-width: 600px) {
              .box-item {
                  flex-basis: 30%;
              }
          }
    </style>
    <section class="article-body" id="covid-statistic">
    <h2 class="article-title">
        Statistik ${this.title.toUpperCase()}
    </h2>
    <div class="container-box">
        <div class="box-item">
            <p class="number">${this._confirmed.toLocaleString('id-ID')}</p>
            <p>Kasus Positif</p>
        </div>
        <div class="box-item">
            <p class="number">${this._deaths.toLocaleString('id-ID')}</p>
            <p>Meninggal</p>
        </div>
        <div class="box-item">
            <p class="number">${this._recovered.toLocaleString('id-ID')}</p>
            <p>Sembuh</p>
        </div>
    </div>
    <p style="font-size:13px"><b>Last Updated:</b> ${this._lastUpdate}</p>
</section>
    `
  }

  renderErrorMessage(msg) {
    this.innerHTML = `
      <style>
      .article-body {
          margin: 15px;
          border-radius: 6px;
          padding: 20px;
      }
      </style>
      <section class="article-body">
          <p>${msg}</p>
      </section>
    `
  }
}

customElements.define("case-report", CaseItem)
