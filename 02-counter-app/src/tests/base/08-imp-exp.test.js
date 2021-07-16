import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("getHeroesById debe retornar la información de un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeEsperado = heroes.find(hero => hero.id === id)
    expect(heroe).toEqual(heroeEsperado)
  });
  test('getHeroesById debe retornar un undefined cuando no se especifique un id', () => {
      const valor = getHeroeById()
      expect(valor).toBe(undefined)
  })
  test('getHeroesById debe retornar un undefined cuando no existe un heroe', () => {
    const id = 10  
    const valor = getHeroeById(id)
    expect(valor).toBe(undefined)
  })
  test('getHeroesByOwner debe retornar un arreglo con lo heroes de DC', () => {
      const owner = 'DC'
      const heroesObtenidos = getHeroesByOwner(owner)
      const heroesEsperados = heroes.filter((heroe) => heroe.owner === owner)
      expect(heroesObtenidos).toEqual(heroesEsperados)
  })
  test('getHeroesByOwner debe retornar un arreglo con lo heroes de Marvel', () => {
    const owner = 'Marvel'
    const totalHeroes = getHeroesByOwner(owner).length
    expect(totalHeroes).toBe(2)
})
});
