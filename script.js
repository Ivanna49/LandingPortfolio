
const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙"; 
  }
});


const text = "Apasionada por el análisis de datos, el desarrollo web y la automatización de pruebas. Transformo ideas en código y datos en conocimiento.";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("descripcion").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
}
window.onload = () => {
  const nombre = document.getElementById("nombre");
  nombre.classList.add("fade-in");
  nombre.innerHTML = " ¡Hola! Soy Ivanna López Barbona";
  typing();
};
