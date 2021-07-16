import React from "react";
//import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";
import { shallow } from "enzyme";

describe("Pruebas en el componente <PrimeraApp />", () => {
  /*
    test("Debe mostrar el mensaje Soy J4ckDev", () => {    
        const saludo = "Soy J4ckDev";
        const {getByText} = render(<FirstApp quien="Soy J4ckDev" info=""/>);
        expect(getByText(saludo)).toBeInTheDocument();    
    });
    */
  test("Debe mostrar <FirstApp /> correctamente", () => {
    const wrapper = shallow(<FirstApp />);
    expect(wrapper).toMatchSnapshot();
    // El toMatchSnapshot permite comparar la parte visual de un componenete, de este modo podemos
    // cerciorarnos que si tenemos una alteración en la UI del componente, la prueba fallará y
    // podremos revisarcuales fueron los cambios. Si el cambio es el esperado, se puede generar
    // una nueva instantánea o snapshot del componente. Más info en https://jestjs.io/docs/snapshot-testing
  });
  test("Debe mostrar la info enviada por props", () => {
    const info = "Soy la info";
    const wrapper = shallow(<FirstApp info={info} />);
    const textParagraph = wrapper.find("p").get(1).props.children;
    //wrapper.find() Equivale a document.querySelector()
    //en este caso get sirve para obtener el segundo nodo de parrafo, que contiene la información de info
    expect(textParagraph).toBe(info)
  });
});
//Documentación de enzyme https://enzymejs.github.io/enzyme/
//Adapatador no oficial de enzyme para react 17 https://github.com/wojtekmaj/enzyme-adapter-react-17
