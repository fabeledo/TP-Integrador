const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");


nextBtn.addEventListener("click", function() {
 
  let nombres = document.querySelector("#nombres").value;
  let correo = document.querySelector("#correo").value;
  
  summary.innerHTML = `Nombre: ${nombres}<br>Email: ${correo}`;
  
  step1.style.display = "none";
  step2.style.display = "block";
});
