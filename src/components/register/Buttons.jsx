import React from "react";

const Buttons = () => {
  return (
    <div className="text-center">
      <button type="reset" className="btn btn-secondary">
        Cancelar
      </button>
      <button type="submit" className="btn btn-primary ms-5">
        Agregar movimiento
      </button>
    </div>
  );
};

export default Buttons;
