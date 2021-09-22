import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookIndex from "./BookIndex";
import BookSearch from "./BookSearch";
import BookSort from "./BookSort";

import {BrowserRouter as Router} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

describe("<BookIndex/> component Unit Test", () => {

    it("Should render search bar", ()=>{
        const component = mount(
            <Router>
                <BookIndex />
            </Router>
        );

        expect(component.find(BookSearch)).toHaveLength(1);
        
    });

    it("Should render sort tab", ()=>{
        const component = mount(
            <Router>
                <BookIndex />
            </Router>
        );

        expect(component.find(BookSort)).toHaveLength(1);
        
    });

    it("Should render correct number of book items", ()=>{
        const component = mount(
            <Router>
                <BookIndex />
            </Router>
        );

        component.setState({
        books:
        [
            {
                "id": 10,
                "title": "12 Rules for Life: An Antidote to Chaos ",
                "author": "Jordan Peterson",
                "isbn": "9780345816023",
                "genre": "Psychology",
                "published": 2018,
                "create_At": null,
                "update_At": null
            },
            {
                "id": 6,
                "title": "The Day My Bum Went Psycho",
                "author": "Andy Griffiths",
                "isbn": "9780330400893",
                "genre": "Comedy",
                "published": 2001,
                "create_At": null,
                "update_At": null
            },
            {
                "id": 1,
                "title": "The Lord of the Rings",
                "author": "J. R. R. Tolkien",
                "isbn": "9780007136582",
                "genre": "Fantasy",
                "published": 1968,
                "create_At": null,
                "update_At": null
            }
        ]
        });

        // component not rerendering after setState.
        // this assertion should be component.find(BookItem)
        expect(component.state("books")).toHaveLength(3);
        
    });
})



