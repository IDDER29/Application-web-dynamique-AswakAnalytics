document.addEventListener("DOMContentLoaded", function (event) {
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
  let radioBtn = document.querySelectorAll("input[name='card-layout']");
  let findSelected = () =>{
    console.log("aksdjf");
    let gridCardContiner = document.querySelector(".grid_container");
    let cardRow = document.querySelectorAll(".card_row");
    let cardImg = document.querySelectorAll(".card_img");
    radioBtn.forEach(radio => {
        
        if(radio.checked){
            radio.closest('label').classList.add('active');
            console.log(radio.value)
            if(radio.value = "vertical"){
               /**
                *  gridCardContiner.classList.add('row-cols-md-4');
                gridCardContiner.classList.remove('row-cols-md-2');
                cardRow.forEach(card => card.classList.remove('row g-0'));
                cardImg.forEach(cImg =>  cImg.classList.remove('col-md-4'));
                */
                
                
            }else if(radio.value = "horizontal"){
               /**
                *  gridCardContiner.classList.add('row-cols-md-2');
                gridCardContiner.classList.remove('row-cols-md-4');
                cardRow.forEach(card => card.classList.add('row g-0'));
                cardImg.forEach(cImg =>  cImg.classList.add('col-md-4'));
                */
                
            }
        }else{
            radio.closest('label').classList.remove('active');
        }
    })
  
  }
  
  radioBtn.forEach(radio => {
    radio.addEventListener("change",findSelected);
  })
  findSelected();
});
