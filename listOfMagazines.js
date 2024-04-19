document.addEventListener("DOMContentLoaded", function (event) {

 
  
  // Your code to run since DOM is loaded and ready

  let gridCardContiner = document.querySelector(".grid_container");
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready

  let stors = [
    {
      name: "Sidi maarouf",
      city: "Casablanca",
      street: "sidi maarouf",
    },
    {
      name: "Sidi maarouf",
      city: "Casablanca",
      street: "sidi maarouf",
    },
    {
      name: "Sidi maarouf",
      city: "Casablanca",
      street: "sidi maarouf",
    },
    {
      name: "Sidi maarouf",
      city: "Casablanca",
      street: "sidi maarouf",
    },
    {
      name: "Sidi maarouf",
      city: "Casablanca",
      street: "sidi maarouf",
    },
  ];
  


  let selectedCity = document.getElementById("select-city-filter");
  function appendCardsToConter(storsSelected) {
    
    
    gridCardContiner.innerHTML ="";
    storsSelected.forEach((stor) => {
      gridCardContiner.innerHTML += `
    <div class="col">
    <div class="card h-90">
      <div class="card_row ">
        <div class=" card_img ">
          <img src="./img/stor_img.jpg" class="card-img-top" alt="..." />
        </div>
        <div class="card_content">
          <div class="card-body">
            <h5 class="card-title fs-3 fw-bold">${stor.name}</h5>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              <span> ${stor.city}, </span><span class="fst-italic">${stor.street}</span>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    });
   
  }
  appendCardsToConter(stors);
  selectedCity.addEventListener('change', ()=> {
    console.log("hi hi");
    let filteredStors;

    if(selectedCity.value == 'All'){
      filteredStors = stors;
    }else{
      filteredStors = stors.filter(el => el.city == selectedCity.value);
    }
    console.log(filteredStors);
    appendCardsToConter(filteredStors);
    findSelected();
   });
  // start the functionality of  change the sutation of the card uppers

  let radioBtn = document.querySelectorAll("input[name='card-layout']");
  radioBtn[1].checked = true;
  let findSelected = () => {
    let cardRow = document.querySelectorAll(".card_row");
    let cardImg = document.querySelectorAll(".card_img");
    let cardContent = document.querySelectorAll(".card_content");

    radioBtn.forEach((radio) => {
      if (radio.checked) {
        radio.closest("label").classList.add("active");
        if(radio.value =="vertical" ){
          gridCardContiner.classList.add("row-cols-md-4");
          cardContent.forEach((content) => content.classList.remove("col-md-8"));
          gridCardContiner.classList.remove("row-cols-md-2");
          cardImg.forEach((cImg) => cImg.classList.remove("col-md-4"));
          cardRow.forEach((card) => {
            card.classList.remove("row");
            card.classList.remove("g-0");
          });

        }else if(radio.value == "horizontal"){
          gridCardContiner.classList.add("row-cols-md-2");
          cardContent.forEach((content) => content.classList.add("col-md-8"));
          cardImg.forEach((cImg) => cImg.classList.add("col-md-4"));
          gridCardContiner.classList.remove("row-cols-md-4");
          cardRow.forEach((card) => {
            card.classList.add("row");
            card.classList.add("g-0");
          });
        }
        
     
        
        
      } else {
        radio.closest("label").classList.remove("active");
      }
    });
  };

  radioBtn.forEach((radio) => {
    radio.addEventListener("change", findSelected);
  });
  findSelected();
  
  // End the functionality of  change the sutation of the card uppers
});
