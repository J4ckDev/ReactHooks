//import '@testing-library/jest-dom/extend-expect'
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// enzyme-to-json nos permite ver más en detalle lo que se renderiza en un componente
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
