import React from "react";
import Form from "./Form";

function Register({ finalBalance, transactions, setTransactions, handleShowModal, modal, formData, setFormData }) {
  return (
    <div className="card">
      <h5 className="card-header">Register</h5>
      <div className="card-body">
        <Form
          finalBalance={finalBalance}
          transactions={transactions}
          setTransactions={setTransactions}
          handleShowModal={handleShowModal}
          modal={modal}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
}

export default Register;
