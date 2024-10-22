let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let cards1 = document.getElementById("pers1");
let cards2 = document.getElementById("pers2");
let cards3 = document.getElementById("pers3");

async function* obtenerData(desde, hasta) {
  for (let i = desde; i <= hasta; i++) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${i}/`);
      const result = await response.json();

      if (result.detail && result.detail === `Not found`) {
        throw new Error(`personaje ${i} no encontrado`);
      }
      yield result;
    } catch (error) {
      console.log(error);
      alert("UPS!! ya no hay más personajes que mostrar");
    }
  }
}

const datos1 = obtenerData(1, 5);
const datos2 = obtenerData(6, 10);
const datos3 = obtenerData(11, 15);

boton1.addEventListener("mouseenter", async () => {
  let response = await datos1.next();
 
  if (response.value !== undefined) {
    cards1.innerHTML += `
<div class="card">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-jedi"></i> ${response.value.name}</h5>
    <p class="card-text">Estatura: ${response.value.height}cm</p> <p>Peso: ${response.value.mass}kg</p>
    </div>
</div> `;
  }
});
boton2.addEventListener("mouseenter", async () => {
  let response = await datos2.next();
  if (response.value !== undefined) {
    cards2.innerHTML += `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><i class="fa-solid fa-jedi"></i> ${response.value.name}</h5>
        <p class="card-text">Estatura: ${response.value.height}cm</p> <p>Peso: ${response.value.mass}kg</p>
        </div>
    </div> `;
  }
});
boton3.addEventListener("mouseenter", async () => {
  let response = await datos3.next();
  if (response.value !== undefined) {
    cards3.innerHTML += `
<div class="card">
  <div class="card-body">
    <h5 class="card-title"><i class="fa-solid fa-jedi"></i> ${response.value.name}</h5>
    <p class="card-text">Estatura: ${response.value.height}cm</p>  <p>Peso: ${response.value.mass}kg</p>
    </div>
</div> `;
    
  }
});
