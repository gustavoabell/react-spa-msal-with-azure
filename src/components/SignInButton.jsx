import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = () => {
    const { instance } = useMsal();
    const handleLogin = (loginType) => {
        if (loginType === "redirect") {
                  instance.loginRedirect(loginRequest).catch(e => {
                         console.log(e);
                     });
                 }
                }
    // const handleLogin = (loginType) => {
    //     if (loginType === "popup") {
    //         instance.loginPopup(loginRequest).catch(e => {
    //             console.log(e);
    //         });
    //     } else if (loginType === "redirect") {
    //         instance.loginRedirect(loginRequest).catch(e => {
    //             console.log(e);
    //         });
    //     }
    // }
    return (
         <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Login" onClick={() => handleLogin("redirect")}>
          {/* <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Faça login usando pop-up</Dropdown.Item> */}
            {/* <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Faça login usando o Redirecionamento</Dropdown.Item> */}
         </DropdownButton>
    )
}