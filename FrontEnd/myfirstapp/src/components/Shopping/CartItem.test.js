import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CartItem from "./CartItem";


Enzyme.configure({adapter: new Adapter()});

describe("<CartItem/> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {handler: mockFn};

    it("Should call handler on remove button click", ()=>{
        const component = shallow(
            <CartItem {...props}/>
        );

        component.find('.rm-cart-btn').simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);    
    });
})
