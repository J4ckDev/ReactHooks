// Para evitar ruido en las pruebas, se recomienda quitar o comentar los console.log

const nombre = "Fernando";
const apellido = "Herrera";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//console.log( nombreCompleto );

export function getSaludo(nombre = 'Jonathan') {
  return "Hola " + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
