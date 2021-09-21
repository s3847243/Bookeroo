import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./components/Layout/Header";
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

describe("<App/> component Unit Test", () => {

    it("Should render header", ()=>{
        const component = shallow(
            <App/>
        );
        expect(shallow(<App />).find('Connect(Header)')).toHaveLength(1);    
    });
})
