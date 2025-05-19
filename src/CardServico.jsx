import React from "react";
import "./CardServico.css"; // CSS separado para os cards

const CardServico = ({ icon, titulo, descricao }) => {
  return (
    <div className="card-servico">
      <div className="icone">{icon}</div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

export default CardServico;
