import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Login} from "./Login";

Enzyme.configure({adapter: new Adapter()});

describe("<Login /> component Unit Test", () => {

    const props = {
        security: {validToken: "eg"},
        history: [],
        login: () => {},
        errors: {}
    }

    it("Should render login form", ()=>{
        const component = mount(
            <Login {...props}/>
        );
        expect(component.find('form')).toHaveLength(1);    
    });


    it("Should update state when input changes", ()=>{
        const component = mount(
            <Login {...props}/>
        );
    
        const value = 'eg';
        component.find('#pw').simulate('change', { target: { name: 'password', value: value } })
        expect(component.state('password')).toEqual(value);
    });
})
