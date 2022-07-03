import handwashing from "../../image/cov-handwashing.svg";
import socialdistancing from "../../image/cov-socialdistancing.svg";
import wearmask from "../../image/cov-wearmask.svg";

class CaseAbout extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .card {
            border: none;
        }
        </style>
        <section class="p-5 mt-5">
   <h2 class="text-center mb-4">Prevention</h2>
   <div class="container mt-5">
       <div class="row text-center g-4">
           <div class="col-md">
               <div class="card bg-white text-dark mt-5">
                   <div class="card-body text-center">
                       <div class="h1 mb-3">
                           <img src="${wearmask}" />
                       </div>
                       <h3 class="card-title mb-3">Wear a mask</h3>
                       <p class="card-text">Gunakan masker ketika beraktifitas diluar rumah agar menekan penularan COVID </p>
                   </div>
               </div>
           </div>
           <div class="col-md">
               <div class="card bg-white text-dark mt-5">
                   <div class="card-body text-center">
                       <div class="h1 mb-3">
                           <img src="${socialdistancing}" />
                       </div>
                       <h3 class="card-title mb-3">Physical Distancing</h3>
                       <p class="card-text">Jangan lupa untuk menjaga jarak ketika mengobrol dengan teman dan hindari kerumunan</p>
                   </div>
               </div>
           </div>
           <div class="col-md">
               <div class="card bg-white text-dark mt-5">
                   <div class="card-body text-center">
                       <div class="h1 mb-3">
                           <img src="${handwashing}" />
                       </div>
                       <h3 class="card-title mb-3">Wash your hand often</h3>
                       <p class="card-text">Sering mencuci tangan baik sebelum maupun sesudah beraktifitas</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
      `
    }
}

customElements.define("case-about", CaseAbout);
