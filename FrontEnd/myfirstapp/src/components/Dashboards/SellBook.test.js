import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SellBook from "./SellBook";

Enzyme.configure({adapter: new Adapter()});

describe("<SellBook /> component Unit Test", () => {


    it("Should render SellBook form", ()=>{
        const component = shallow(
            <SellBook/>
        );
        expect(component.find('form')).toHaveLength(1);    
    });

})
