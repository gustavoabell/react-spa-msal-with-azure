import React from "react";
import Button from "react-bootstrap/Button";


export const TokenExists = () => {
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Token ativado!');
      }
      
  return (
      <Button variant="secondary" onClick={handleSubmit}>Verificar Token</Button>
  )
}