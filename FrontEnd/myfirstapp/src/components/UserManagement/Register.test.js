import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Register} from "./Register";


Enzyme.configure({adapter: new Adapter()});

describe("<Register /> component Unit Test", () => {
    const props = {
        createNewUser: () => {},
        errors: {}
    }

    it("Should render register form", ()=>{
        const component = mount(
            <Register {...props}/>
        );
        expect(component.find('form')).toHaveLength(1);    
    });


    it("Should update state when input changes", ()=>{
        const component = mount(
            <Register {...props}/>
        );
    
        const value = 'eg';
        component.find('#pw').simulate('change', { target: { name: 'password', value: value } })
        expect(component.state('password')).toEqual(value);
    });
})
