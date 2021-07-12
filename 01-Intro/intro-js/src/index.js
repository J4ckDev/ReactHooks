import owners, { heroes } from "./heroes";

const nombre = "Jonathan";
const apellido = "Aldana";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado); // Con ctrl+espacio se puede abrir las sugerencias de VS Code

if (true) {
  let valorDado = 6;
  const nombre = "Daniel";
  /*
        No muestra un error de que las variables valorDado y nombre fueron definidas, porque estás solo existen 
        en este scope dentro del if.
    */
  console.log(nombre, apellido, valorDado);
}

console.log(nombre, apellido, valorDado);

const hero = {
  name: "Tony",
  surname: "Stark",
  age: 45,
};

console.table(hero);

// Asignación desestructurante, más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const Saludo = ({ name, surname, age }) => {
  console.log(`Hola ${name} ${surname}, tienes ${age} años.`);
};

const person = {
  name: "Jonathan",
  surname: "Aldana",
  latlng: {
    lat: 14.12,
    lng: -12.23,
  },
};

const {
  name,
  surname,
  latlng: { lat, lng },
} = person;

console.log(`${name} ${surname} ${lat} ${lng}`);

// Con f2 se puede cambiar el nombre o la referencia de una variable o función en todos los lugares donde se usa
console.log(Saludo(hero));

const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, vegeta] = personajes;
console.log(vegeta);

const usaEstado = (valor) => {
  return [valor, () => console.log("Hola Mundo")];
};

const [nome, setNome] = usaEstado("Goku");
console.log(nome);
setNome();

// En algunos casos es útil definir los arreglos con Array(num) para definir arreglos con un num de posiciones vacías
const arreglo = Array(4); // Crea un array vacío de 20 posiciones. Es importante aclarar que esto no limita al arreglo.

console.log(arreglo);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i + 1;
}
console.log(arreglo);

// Una recomendación es no usar push, ya que modifica el objeto principal. Es mejor ustilizar el operador spread para realizar copias.

const arreglo2 = [...arreglo, 5];

console.log(arreglo2);

const arreglo3 = arreglo2.map((element) => element * 2);

console.log(arreglo3);

const getHerobyId = (id) => {
  return heroes.find((hero) => hero.id === id);
};

console.log(getHerobyId(5));

const getHeroesByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner);

console.table(getHeroesByOwner("DC"));

console.log(owners);

// Promesas. Más en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Son asíncronas
// Se le pasa un callback con 2 parámetros que también son callbacks, el resolve cuando lo que se espera finaliza bien y el reject cuando falla

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHerobyId(1);
    heroe ? resolve(heroe) : reject("No se recibió ningún heroe");
  }, 2000);
});

// promesa.then() La promesa se hizo correctamente
// promesa.catch() Captura los errores que puedan ocurrir cuando falla para manejar la excepción
// promesa.finally() Hace algo independientemente si funcionó o falló

promesa
  .then((data) => {
    console.log("El heroe obtenido fue: ", data);
  })
  .catch((error) => console.warn(error));

const getHerobyIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHerobyId(id);
      heroe ? resolve(heroe) : reject("No se recibió ningún heroe");
    }, 2000);
  });
};

/*
getHerobyIdAsync(10).then((data)=>{
  console.log("El heroe obtenido fue: ", data)
}).catch(error => console.warn(error))
*/

getHerobyIdAsync(10)
  .then(console.log) // Imprime el primer argumento que reciba
  .catch(console.warn);

// Uso FetchAPI. Más información en https://developer.mozilla.org/es/docs/Web/API/Fetch_API

/*const apiKey = "TuAPIKEYdeGIPHY";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);*/

// Uso de Async/await.
// Async permite retornar una promesa, pero si la promesa es resuelta retorna un valor.
// Await permite pausa la función Async hasta que una promesa sea terminada o rechazada

const getImagen = async () => {
  try {
    const apiKey = "tuAPIdeGiphyaqui";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(`Por no colocar tu API Key tienes este error ${error}`)
  }

};

getImagen();

// Operador ternario. Por defecto se debe declarar la respuesta si cumple y sino, pero hay una alternativa para solo evaluar si cumple
let state = true

let message = state ? 'Active' : 'Inactive'
console.log(message)

// Si solo necesitamos evaluar si cumple
let message2 = state && 'Active2' // Como state es True, retorna Active2. Si state fuera falso retorna false
console.log(message2)