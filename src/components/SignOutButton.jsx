import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }
    //     if (logoutType === "popup") {
    //         instance.logoutPopup({
    //             postLogoutRedirectUri: "/",
    //             mainWindowRedirectUri: "/"
    //         });
    //     } else if (logoutType === "redirect") {
    //         instance.logoutRedirect({
    //             postLogoutRedirectUri: "/",
    //         });
    //     }
    // }
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Logout" onClick={() => handleLogout("redirect")}>
            {/* <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>Sair usando pop-up</Dropdown.Item> */}
            {/* <Dropdown.Item as="button" onClick={() => handleLogout("redirect")}>Sair usando Redirecionamento</Dropdown.Item> */}
        </DropdownButton>
    )
}