import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr.test.js', () => {
    test('retornaArreglo debe retornar el string ABC y el número 123', () => {
        const [letras, numeros] = retornaArreglo()
        const tipoLetras = typeof letras
        const tipoNumeros = typeof numeros
        const letrasEsperadas = 'ABC'
        const numerosEsperados = 123

        expect(letras).toBe(letrasEsperadas)
        expect(tipoLetras).toBe('string')
        
        expect(numeros).toBe(numerosEsperados)
        expect(tipoNumeros).toBe('number')        
    })
    
})
