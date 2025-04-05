
const startingBtn2 = document.querySelector(".starting-btn");
const pln = document.querySelector(".past-lineup-nav");
const plpc = document.querySelector(".pl-player-container");
const oplpc = document.querySelector(".other-pl-player-container");
const plb = document.querySelector(".pl-bottom");
const plpreview = document.querySelector(".preview");
const plpreviewteam = document.querySelector(".preview-team");
const plpreviewclose = document.querySelector(".preview-close");



plpreview.addEventListener("click", () => {
    plpreviewteam.style.display = "block";
    startingBtn2.style.display = "block";
    pln.style.display = "none";
    plpc.style.display = "none";
    plb.style.display = "none";   
})

startingBtn2.addEventListener("click", () => {
    pln.style.display = "block";
    plpc.style.display = "block";
    plb.style.display = "block"; 
})

plpreviewclose.addEventListener("click", () => {
    plpreviewteam.style.display = "none";
    pln.style.display = "block";
    plpc.style.display = "block";
    plb.style.display = "block"; 
    startingBtn2.style.display = "none";

})

  const pl_info = document.querySelector(".pl-info");
  const pl_close = document.querySelector(".player-close");

    const img = document.querySelectorAll(".player-img");

img.forEach(img => {
    img.addEventListener('click', () => {
        pl_info.style.display = "block";
        pln.style.display = "none";
        plpc.style.display = "none";
        oplpc.style.display = "none";``
        plb.style.display = "none"; 
    });
  });

  pl_close.addEventListener('click', () => {
    pl_info.style.display = "none";
    pln.style.display = "block";
    plpc.style.display = "block";
    oplpc.style.display = "block";
    plb.style.display = "block"; 
});