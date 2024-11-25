import React from 'react';

function ButtonComponent({ text, alertMessage }) {
  return (
    <button
      className="imageButton"
      onClick={() => alert(alertMessage)} // Passa una funzione anonima!!!! REACT non gestisce l'HTML come stringhe, ma come oggetti
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
