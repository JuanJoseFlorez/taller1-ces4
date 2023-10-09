import React from "react";
import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import Buttons from "./Buttons";

const Form = ({
  finalBalance,
  transactions,
  setTransactions,
  handleShowModal,
  modal,
  formData,
  setFormData,
}) => {
  // Manejador de cambios para actualizar formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (modal.type === "edit") {
      const transaction = transactions.find(
        (transaction) => transaction.id === modal.transaction
      );

      if (transaction) {
        setFormData(transaction);
      }
    } else {
      // Reiniciar formData si no estás en modo de edición
      setFormData({
        id: "",
        type: "",
        name: "",
        amount: 0,
      });
    }
  }, [modal.type]);

  const handlerSubmit = (e) => {
    //Se evita que la pagina recargue al enviar el formulario
    e.preventDefault();

    if (e.target.register.value === "add") {
      //Se valida que el tipo de transaccion es
      if (formData.type == "ingreso") {
        //Se define el objeto del nuevo ingreso
        const newIngreso = {
          id: uuid4(),
          type: formData.type,
          name: formData.name,
          amount: parseFloat(formData.amount),
        };
        //Se almacena el nuevo ingreso
        setTransactions([...transactions, newIngreso]);
        handleShowModal("Registro Exitoso.", "Ingreso fue agregado con éxito.");
      } else {
        if (finalBalance - formData.amount >= 0) {
          //Se define el objeto del nuevo gasto
          const newGasto = {
            id: uuid4(),
            type: formData.type,
            name: formData.name,
            amount: parseFloat(formData.amount),
          };
          //Se almacena el nuevo gasto
          setTransactions([...transactions, newGasto]);
          handleShowModal("Registro Exitoso.", "Gasto fue agregado con éxito.");
        } else {
          handleShowModal(
            "Error.",
            "No cuenta con saldo suficiente para realizar este movimiento."
          );
        }
      }
      //Se resetea todo el formulario, todo vuelve por defecto.
      setFormData({
        type: "",
        name: "",
        amount: 0,
      });
    } else if (e.target.register.value === "edit") {
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit} className="column">
        <div className="row mb-3">
          <label htmlFor="type" className="col-sm-3 col-form-label">
            Tipo de movimiento:
          </label>
          <div className="col-sm-9">
            <select
              className="form-select"
              name="type"
              id="type"
              required
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">---</option>
              <option value="ingreso"> Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Nombre:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="amount" className="col-sm-3 col-form-label">
            Cantidad:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              min="1"
              value={formData.amount}
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <input
          type="hidden"
          name="register"
          id="register"
          value={modal.type !== "" ? modal.type : "add"}
        />
        {modal.type === "edit" ? "" : <Buttons />}
      </form>
    </div>
  );
};

export default Form;
