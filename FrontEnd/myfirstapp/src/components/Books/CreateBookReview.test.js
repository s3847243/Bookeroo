import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CreateBookReview from "./CreateBookReview";


Enzyme.configure({ adapter: new Adapter() });

describe("<CreateBookReview/> component Unit Test", () => {

    it("Should NOT call handler on review post click when fields empty", () => {
        const logSpy = jest.spyOn(console, 'log');
        const component = shallow(
            <CreateBookReview />
        );

        component.find('.add-review').simulate('submit');
        expect(logSpy.mock.calls.length).toEqual(0);
    });

})
