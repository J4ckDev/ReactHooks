/* Mi primera prueba
test('Debe de ser true', () => {
    const isActive = false
    if (!isActive){
        throw new Error('No está activo')
    }
})*/

// Documentación de Jest https://jestjs.io/
// Para agrupar las pruebas se usa describe()
describe("Pruebas del archivo demo.test.js", () => {
  test("Las cadenas deben ser iguales", () => {
    // Inicialización
    const mensaje = "Hola Mundo";
    // Estímulo
    const mensaje2 = "Hola Mundo";
    // Observar el comportamiento
    expect(mensaje).toBe(mensaje2); // Más métodos en https://jestjs.io/docs/expect
  });
});
