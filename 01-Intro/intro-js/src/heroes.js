// export const heroes = [
const heroes = [
  { id: 1, name: "Batman", owner: "DC" },
  { id: 2, name: "Spiderman", owner: "Marvel" },
  { id: 3, name: "Superman", owner: "DC" },
  { id: 4, name: "Flash", owner: "DC" },
  { id: 5, name: "Wolverine", owner: "Marvel" },
];

const owners = ["DC", "Marvel"];

// export default owners; // Cuando se exporta así, en la importación no son necesarias las llaves

// Otra forma de exportar lo anterior es la siguiente
export{
    heroes,
    owners as default
}