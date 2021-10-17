//---------- script for tabs at about-section ----------

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

//---------- portofolio item ----------

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortofolioPopup();
        document.querySelector(".portofolio-popup").scrollTo(0,0);
        portofolioItemDetails(e.target.parentElement);
    }
});

function togglePortofolioPopup(){
    document.querySelector(".portofolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortofolioPopup);

//---------- hide portofolio popup when click outside pp-inner box ----------

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortofolioPopup();
    }
});


function portofolioItemDetails(portofolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portofolioItem.querySelector(".portofolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portofolioItem.querySelector(".portofolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portofolioItem.querySelector(".portofolio-item-details").innerHTML;

}

//---------- toogle navbar animation script ----------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) =>{
    hideSection();
    toogleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toogleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

//---------- control active section ----------

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        document.querySelector(".overlay").classList.add("active")
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toogleNavbar();
        }else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active")
        },500);
    }
});

//---------- contact form sumbit to google spreadsheet ----------

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVmPWlGxM9GzYZNSZta3pVr3IIRxf1kdEPGVUfa7WW6Nc7g6utfY25S36vrkJler5i/exec'
const form = document.forms['reinard-contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})