import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
import store from "./../../store"
import App from "../../App";

Enzyme.configure({adapter: new Adapter()});

describe("<Header/> component Unit Test", () => {

    it("Should header", ()=>{
        const component = mount(
            <Header store={store}/>
        );
        expect(component.find("#contact")).toHaveLength(1);
        expect(component.find("#about")).toHaveLength(1);    
        expect(component.find("#dashboard")).toHaveLength(1);  
    });
})
