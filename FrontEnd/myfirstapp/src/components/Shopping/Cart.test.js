import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import store from "./../../store"
import Cart from "./Cart";
import CartItem from "./CartItem";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

describe("<Cart/> component Unit Test", () => {
    
    let component;

    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem("cart", 
        `[{"isbn":"9780316039017","title":"The Melancholy of Haruhi Suzumiya","seller":"example seller",
        "price":"30","condition":"new"},{"isbn":"9780316039017","title":"The Melancholy of Haruhi Suzumiya",
        "seller":"example seller 2","price":"20","condition":"old"}]`)
    });

    it("Should render correct number of items", ()=>{
        component = mount(
            <Router>
                <Provider store={store}>
                    <Cart/>
                </Provider>
            </Router>
        );
        expect(component.find(CartItem)).toHaveLength(2);
    });

    it("Should clear items", ()=>{
        component = mount(
            <Router>
                <Provider store={store}>
                    <Cart/>
                </Provider>
            </Router>
        );
        component.find('.cl-cart-btn').simulate('click');
        expect(component.find(CartItem)).toHaveLength(0);
    });

    it("Should calculate total", ()=>{
        component = mount(
            <Router>
                <Provider store={store}>
                    <Cart/>
                </Provider>
            </Router>
        );
        const total = Number(component.find('#total').text().substring(9));
        expect(total).toEqual(50);
    });



})
