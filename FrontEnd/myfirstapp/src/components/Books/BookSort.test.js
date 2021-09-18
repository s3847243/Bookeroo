import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookSort from "./BookSort";


Enzyme.configure({adapter: new Adapter()});

describe("<BookSort/> component Unit Test", () => {
    let mockFn = jest.fn();
    let props = {handler: mockFn};

    it("Should call handler on sort bar click - alphabetical", ()=>{
        const component = shallow(
            <BookSort {...props}/>
        );
        component.find('#sort-alpha').simulate('change', { target: { name: 'eg', value: "eg" } })
        expect(mockFn.mock.calls.length).toEqual(1);    
    });

    // reset the mock function
    const mockFn2 = jest.fn();
    const props2 = {handler: mockFn2};

    it("Should call handler on sort bar click - year", ()=>{
        const component = shallow(
            <BookSort {...props2}/>
        );
        component.find('#sort-year').simulate('change', { target: { name: 'eg', value: "eg" } })
        expect(mockFn2.mock.calls.length).toEqual(1);    
    });
})
