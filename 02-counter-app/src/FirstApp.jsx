import React from "react";
// import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FirstApp = ({ quien, info }) => {
  const saludo = "Hola Mundo";
  const persona = { name: "Jonathan", age: 25 };

  /*
    Usando Fragment   
        return (
            <Fragment>
                <h1>{saludo}</h1>
                <p>Mi primera aplicación</p>
            </Fragment>
        ); 
    */

  // Usando la forma corta sin importar fragment
  return (
    <>
      <h1>{saludo}</h1>
      <p>
        React imprime todo lo que sea texto, números y listas, concatenado su
        contenido; pero en el caso de los booleanos, null y undefined no los
        muestra y en el caso de los objetos toca hacer un procedimiento
        adicional para convertirlo a texto y poderlo mostrar.
      </p>
      <pre>{JSON.stringify(persona, null, 3)}</pre>
      <h2>
        {quien} 
      </h2>
      <p>{info}</p>
    </>
  );
};

// Manejar los tipos de propiedades necesarias para el componente y cuales son necesarias
FirstApp.propTypes = {
  quien: PropTypes.string,
  info: PropTypes.string.isRequired,
};

// Aunque se pueden definir valores por defecto en las variables de la función (const FirstApp = ({ quien = "No hay nadie", info })), 
// otra alternativa es definir las propiedades por defecto del componente, esto nos permite llevar
// un mejor control de las propiedades que necesita el componente

FirstApp.defaultProps = {
    quien : 'No hay nadie',
    info : 'No hay info'
}

export default FirstApp;
