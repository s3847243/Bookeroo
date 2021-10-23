import React from "react";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddBook from "./AddBook";

Enzyme.configure({adapter: new Adapter()});

describe("<AddBook /> component Unit Test", () => {


    it("Should render addBook form", ()=>{
        const component = shallow(
            <AddBook/>
        );
        expect(component.find('form')).toHaveLength(1);    
    });

})
