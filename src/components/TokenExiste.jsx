import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";

/**
 * Renders a sign-out button
 */
export const TokenExiste = () => {
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Token ativado!');
      }
  
  return (
      <button variant="secondary" onClick={handleSubmit}>Verificar Token</button>
  )
}