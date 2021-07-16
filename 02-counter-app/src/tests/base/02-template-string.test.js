import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe retornar Hola J4ckDev", () => {
    const nombre = 'J4ckDev'
    const saludoEsperado = `Hola J4ckDev`
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(saludoEsperado)
  });
  test('getSaludo debe retornar el valor por defecto Hola Jonathan', () => {
    const saludoEsperado = 'Hola Jonathan'
    const saludo = getSaludo()
    expect(saludo).toBe(saludoEsperado)
  })
  
});
