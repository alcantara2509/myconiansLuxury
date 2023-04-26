import React from "react";
import languages from "../../../Utils/languages";
import "./style.css";

const EnquireButton = () => {
  const portuguese = "Solicitar Orçamento";
  const english = "Enquire Today";
  const spanish = "Pregúntenos Hoy";
  return (
    <button type="button" className="enquire-button">
      {languages(english, portuguese, spanish)}
    </button>
  );
};
export default EnquireButton;
