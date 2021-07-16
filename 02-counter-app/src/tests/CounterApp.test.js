import { shallow, ShallowWrapper } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas al componente CounterApp", () => {
  // Como las pruebas se hacen una seguida de la otra, se recomienda usar beforeEach para
  // reiniciar el componente al estado inicial

  let wrapper = shallow(<CounterApp />); // Esto es una mala practica y debería ser solo let wrapper; pero es para no perder el intellisense de VSCode

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = wrapper.find("h2").text().trim();
    expect(counterValue).toBe(`${value}`);
  });
  test("Debe incrementar el valor del contador con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterValue = wrapper.find("h2").text().trim();
    expect(counterValue).toBe("1");
  });
  test("Debe reducir el valor del contador con el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterValue = wrapper.find("h2").text().trim();
    expect(counterValue).toBe("-1");
  });
  test("Debe reiniciar el contador con el botón reset", () => {
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterValue = wrapper.find("h2").text().trim();
    expect(counterValue).toBe("0");
  });
});
