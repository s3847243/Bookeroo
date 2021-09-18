import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Checkout from "./Checkout";
import { PayPalButton } from "react-paypal-button-v2";

Enzyme.configure({adapter: new Adapter()});

describe("<Checkout/> component Unit Test", () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem("cart", 
        `[{"isbn":"9780316039017","title":"The Melancholy of Haruhi Suzumiya","seller":"example seller",
        "price":"30","condition":"new"},{"isbn":"9780316039017","title":"The Melancholy of Haruhi Suzumiya",
        "seller":"example seller 2","price":"20","condition":"old"}]`)
    });

    it("Should not render paypal before save", ()=>{
        const component = mount(
            <Checkout/>
        );
        expect(component.find(PayPalButton)).toHaveLength(0);    
    });

    it("Should render paypal after save", ()=>{
        const component = mount(
            <Checkout/>
        );
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        component.find('form').simulate('submit', fakeEvent);
        expect(component.find(PayPalButton)).toHaveLength(1); 
    });

    it("Should show no items in cart if no items", ()=>{
        localStorage.clear();
        const component = mount(
            <Checkout/>
        );
        expect(component.find('h1').text()).toEqual('Nothing in your cart.'); 
    });
})
