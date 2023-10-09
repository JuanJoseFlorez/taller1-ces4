import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "../register/Form";

const MyModal = ({
  modal,
  setModal,
  transactions,
  formData,
  setFormData,
  setTransactions,
  finalBalance,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleClose = () =>
    setModal({ show: false, title: "", description: "", type: "" });

  const editTransaction = () => {
    const transaccionEditada = transactions.find(
      (transaction) => transaction.id === formData.id
    );
    let nuevoSaldoFinal = finalBalance;

    if (transaccionEditada.type === "ingreso") {
      // Resta el monto de la transacción original al saldo final temporal
      nuevoSaldoFinal -= transaccionEditada.amount;
    } else if (transaccionEditada.type === "gasto") {
      // Suma el monto de la transacción original al saldo final temporal
      nuevoSaldoFinal += transaccionEditada.amount;
    }
    if (formData.type === "gasto") {
      // Resta la nueva cantidad al saldo final temporal si el nuevo tipo es gasto
      nuevoSaldoFinal -= formData.amount;
    } else if (formData.type === "ingreso") {
      // Suma la nueva cantidad al saldo final temporal si el nuevo tipo es ingreso
      nuevoSaldoFinal += formData.amount;
    }

    // Verifica si el nuevo saldo final es menor que 0 y si la transacción es un gasto
    if (nuevoSaldoFinal < 0 && formData.type === "gasto") {
      // Muestra un mensaje de error o realiza alguna acción de manejo de errores
      setErrorMessage(
        "No cuenta con saldo suficiente para realizar este movimiento."
      );
    } else {
      // Realiza la edición de la transacción
      setErrorMessage("");
      formData.amount = parseFloat(formData.amount);
      const newTransactions = transactions.map((item) =>
        item.id === formData.id ? formData : item
      );
      setTransactions(newTransactions);
      handleClose();
    }
  };

  return (
    <div>
      <Modal show={modal.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modal.type === "edit" ? errorMessage : modal.description}
        </Modal.Body>
        {modal.type === "edit" ? (
          <div className="mx-5">
            <Form
              modal={modal}
              transactions={transactions}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        ) : (
          ""
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {modal.type === "edit" ? (
            <Button type="submit" variant="primary" onClick={editTransaction}>
              Save Changes
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
