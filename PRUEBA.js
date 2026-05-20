let recaudado = 0;
const meta = 67500;

const progressBar = document.getElementById("progressBar");
const recaudadoSpan = document.getElementById("recaudado");
const porcentajeSpan = document.getElementById("porcentaje");
const donarBtn = document.getElementById("donarBtn");
const donacionInput = document.getElementById("donacionInput");


function actualizarBarra() {
  const porcentaje = Math.min((recaudado / meta) * 100, 100);
  porcentajeSpan.textContent = Math.floor(porcentaje);
  recaudadoSpan.textContent = recaudado;
  document.getElementById("progressValue").style.width = recaudado*500/meta;
  return porcentaje;
}


donarBtn.addEventListener("click", () => {
  const donacion = Number(donacionInput.value);

  if (donacion > 0) {
    recaudado += donacion;
    const porcentaje = actualizarBarra();
    donacionInput.value = "";
  } else {
    alert("Introduce una cantidad válida.");
  }
})
