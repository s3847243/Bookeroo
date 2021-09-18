import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
import store from "./../../store"
import App from "../../App";

Enzyme.configure({adapter: new Adapter()});

describe("<Header/> component Unit Test", () => {

    it("Should render login when logged out", ()=>{
        localStorage.clear();
        const component = mount(
            <Header store={store}/>
        );
        expect(component.find("#login")).toHaveLength(1);
        expect(component.find("#signup")).toHaveLength(1);     
    });


    it("Should render logout when logged in", ()=>{
        localStorage.setItem("jwtToken", "example");
        const component = mount(
            <Header store={store}/>
        );
        expect(component.find("#logout")).toHaveLength(1);  
    });
})
