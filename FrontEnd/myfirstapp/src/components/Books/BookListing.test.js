import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookListing from "./BookListing";


Enzyme.configure({adapter: new Adapter()});

describe("<BookListing/> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {seller: "eg", price: "eg", condition: "eg", qtyRem: "eg", handler: mockFn};

    it("Should call handler on cart button click", ()=>{
        const component = shallow(
            <BookListing {...props}/>
        );
        component.find('button').simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);    
    });
})
