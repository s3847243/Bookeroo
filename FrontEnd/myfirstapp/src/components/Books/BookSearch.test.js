import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookSearch from "./BookSearch";


Enzyme.configure({adapter: new Adapter()});

describe("<BookSearch/> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {handler: mockFn};

    it("Should call handler on search button click", ()=>{
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };

        const component = shallow(
            <BookSearch {...props}/>
        );

        component.find('.search-bar').simulate('submit', fakeEvent);
        expect(mockFn.mock.calls.length).toEqual(1);    
    });
})
