import {getByTestId, render} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Login from "./Login";

describe("Login component test",()=>{
    it("render input",()=>{
        const {getByTestId}=render(<Login/>);
        const login=getByTestId("login_button");
        expect(login).toBeTruthy();

    });

    it("render div",()=>{
        const {getByTestId} =render(<Login/>);
        const div=getByTestId("form1");
        expect(div).toBeTruthy();
    });
    // it("dont render div",()=>{
    //     const {queryByTestId} =render(<Login/>);
    //     const div=getByTestId("form1");
    //     expect(div).toBeFalsy();
    // });

    // it("switch to signup page",()=>{
    //     act(()=>{
    //         const {queryByTestId} =render(<Login/>);

    //     })
    // });

    // it("Button click",()=>{
    //     const {getAllByTestId}=render(<Login/>)
    //     const button=getByTestId("login_button");
    //     expect(button).toHaveLength(1);
    // });
});