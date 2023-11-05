import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';

const mockedSetValues = jest.fn
const mockedOnSetStep = jest.fn();

describe("LoginComponent",()=> {

    beforeEach(() => {
        console.log("RUNS BEFORE EACH TEST")
    })


    it('should render input element "Email"', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Email/i);
        expect(inputElement).toBeInTheDocument();
    });
    it('should render input element "Password"', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Password/i);
        expect(inputElement).toBeInTheDocument();
    });
    it('should be able to type in "Email" input', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Email/i);
        fireEvent.change(inputElement,{target:{value: "User email address"}})
        expect(inputElement.value).toBe("User email address");
    });
    it('should be able to type in "Password" input', async () => {
        render(
            <Login
                values={[]}
                setValues={mockedSetValues}
            />
        );
        const inputElement = screen.getByLabelText(/Password/i);
        fireEvent.change(inputElement,{target:{value: "User password"}})
        expect(inputElement.value).toBe("User password");
    });
    it('input should has a border while focused on', async () => {
        render(<Login />);
        const inputElement = screen.getByLabelText(/Email/i);
        fireEvent.mouseOver(inputElement)
        expect(inputElement).toBeVisible(`borderColor: 'rgba(161, 0, 255, 0.5)'`);
    });

    it('displays error text when a too short password is provided', async () => {
        render(<Login onSetStep={mockedOnSetStep} />);
        const inputElement = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /start survey/i });
    
        fireEvent.change(inputElement, { target: { value: "123" } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
          const errorText = screen.getByText(/password must be at least 6 characters long/i);
          expect(errorText).toBeInTheDocument();
        });
      });

      it('displays error text when an invalid email is provided', async () => {
        render(<Login onSetStep={mockedOnSetStep} />);
        const inputElement = screen.getByLabelText(/Email/i);
        const submitButton = screen.getByRole('button', { name: /start survey/i });
    
        fireEvent.change(inputElement, { target: { value: "invalidemail" } });
        fireEvent.click(submitButton);
    
        await waitFor(() => {
          const errorText = screen.getByText(/invalid email address/i);
          expect(errorText).toBeInTheDocument();
        });
      });
})