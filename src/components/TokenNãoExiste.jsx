import React from "react";
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
        <button variant="secondary" onClick={handleSubmit}>Verificar Token</button>
    )
}