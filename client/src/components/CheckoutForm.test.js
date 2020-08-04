import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});

test("form has labels", () => {
    const { getByLabelText } = render(<CheckoutForm/>);
  
    getByLabelText(/First Name:/i);
    getByLabelText(/Last Name:/i);
    getByLabelText(/Address:/i);
    getByLabelText(/City:/i);
    getByLabelText(/State:/i);
    getByLabelText(/Zip:/i);

  });

  test("Form will Submit", () => {
    async () => {const {getByLabelText, getByTestId} = render(<ContactForm />)
    const firstNameInput = getByLabelText(/First Name:/i);
    const lastNameInput = getByLabelText(/First Name:/i);
    const addressInput =  getByLabelText(/Address:/i);
    const cityInput =  getByLabelText(/City:/i);
    const stateInput =  getByLabelText(/State:/i);
    const zipInput =  getByLabelText(/Zip:/i);
    const submit = getByTestId("submit");
  
    fireEvent.change(firstNameInput, {target: { value: "First Name" },});
    fireEvent.change(lastNameInput, {target: { value: "Last Name" },});
    fireEvent.change(addressInput, {target: { value: "123 Add Dr." },});
    fireEvent.change(cityInput, {target: { value: "city" },});
    fireEvent.change(stateInput, {target: { value: "state" },});
    fireEvent.change(zipInput, {target: { value: "12345" },});
    fireEvent.change(submitBtn);
    fireEvent.click(getByTestId("submit"));}
  
    setTimeout(() => {
        const formRes = getByTestId(/dataInfo/i);
        expect(formRes).toBeInTheDocument();
      }, 1);
  });