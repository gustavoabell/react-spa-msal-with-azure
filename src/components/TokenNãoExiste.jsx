import React from "react";
import Button from "react-bootstrap/Button";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

/**
 * Renders a sign-out button
 */
export const TokenNãoExiste = () => {
    
        function handleSubmit(e) {
          e.preventDefault();
          console.log('Faça login para ativar o token!');
        }
    
    return (
        <Button variant="secondary" onClick={handleSubmit}>Verificar Token</Button>
    )
}