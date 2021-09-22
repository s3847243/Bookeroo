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


    // it("Should update state when input changes", ()=>{
    //     const component = shallow(
    //         <AddBook/>
    //     );
    //     const value = 'eg';
    //     const getAttribute = jest.fn();
    //     getAttribute.mockReturnValueOnce(value);
    
        
    //     component.find('#Book-name').simulate('change', { target: { name: 'title',getAttribute, value: value } });
    //     expect(component.find('#Book-name').text()).toEqual('eg');
    // });
})
