import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SellOldBook from "./SellOldBook";

Enzyme.configure({adapter: new Adapter()});

describe("<SellOldBook /> component Unit Test", () => {


    it("Should render SellOldBook form", ()=>{
        const component = shallow(
            <SellOldBook/>
        );
        expect(component.find('form')).toHaveLength(1);    
    });

})
