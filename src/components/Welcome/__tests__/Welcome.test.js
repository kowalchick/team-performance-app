import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Welcome from '../Welcome';


describe("WelcomeComponent",()=> {

    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
    })


    it('button should changes box-shadow color ', async () => {
        render(<Welcome />);
        const buttonElement = screen.getByText("Continue")
        fireEvent.mouseOver(buttonElement)
        expect(buttonElement).toBeVisible(`box-shadow: rgba(238, 58, 104, 0.2) 0 5px 15px`);
    });
    it('cursor button should be visible as pointer ', async () => {
        render(<Welcome />);
        const buttonElement = screen.getByRole("button")
        fireEvent.mouseOver(buttonElement)
        expect(buttonElement).toBeVisible(`cursor: pointer`);
    });
})