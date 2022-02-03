import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { TokenExists } from "./TokenExists";
import { TokenNotExists } from "./TokenNotExists";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Plataforma de identidade da Microsoft</a>
                { isAuthenticated ? <SignOutButton />   : <SignInButton />  } 
            </Navbar>
            
            <h5><center>Bem-vindo à Biblioteca de Autenticação da Microsoft para Javascript - React MSAL</center></h5>
            <br />
            <br />
            {props.children}
            <p>
            <center> 
            {isAuthenticated ? <TokenExists />   : <TokenNotExists />}
            </center>
            <br />
            </p>
        </>
    );
};
