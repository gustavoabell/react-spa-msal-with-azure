import React from "react";
import Button from "react-bootstrap/Button";

/**
 * Renders a sign-out button
 */
export const TokenNotExists = () => {
    
        function handleSubmit(e) {
          e.preventDefault();
          console.log('Faça login para ativar o token!');
        }
    
    return (
        <Button variant="secondary" onClick={handleSubmit}>Verificar Token</Button>
    )
}