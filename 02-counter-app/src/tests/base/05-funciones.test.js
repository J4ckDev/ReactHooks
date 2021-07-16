import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const usuarioEsperado = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const usuario = getUser();
    /*No se usa toBe porque al hacer {} === {} va a retornar falso, porque los objetos aunque son 
      vacíos, apuntan a diferentes espacios de memoria.
      Por lo anterior se usa toEqual porque evalua que los objetos tengan las mismas propiedades 
      y valores
    */
    expect(usuario).toEqual(usuarioEsperado);
  });
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "J4ckDev";
    const usuario = getUsuarioActivo(nombre);

    const usuarioEsperado = {
      uid: "ABC567",
      username: "J4ckDev",
    };

    expect(usuario).toEqual(usuarioEsperado);
  });
});
