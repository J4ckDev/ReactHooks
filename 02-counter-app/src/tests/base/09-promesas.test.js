import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

// El done se usa para permitir la realización de las pruebas asíncronas
describe("Pruebas en 09-promesas", () => {
  test("Debe retornar a batman de forma asíncrona", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });
  test('Debe retornar el error si el id no existe', (done) => {
      const id = 10
      const errorEsperado = "No se pudo encontrar el héroe";
      getHeroeByIdAsync(id).catch((error) => {
        expect(error).toBe(errorEsperado);
        done();
      });
  })
  
});
