import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import style from "./ListItem.module.css";

const ListItem = ({ transaction, deleteItem, handleShowModal }) => {
  return (
    <div className={`d-flex p-2 border ${style.item}`}>
      <div>
        <div >
          <AiOutlineClose onClick={() => deleteItem(transaction)} className={`ms-2 ${style.action}`} />
          <FiEdit2  className={`ms-3 ${style.action}`} onClick={() => handleShowModal("Editar movimiento", "", "edit", transaction.id)}/>
        </div>
      </div>
      <div>{transaction.name}</div>
      <div>
        {transaction.type === "ingreso" ? (
          <span className="badge text-bg-success">{transaction.amount}</span>
        ) : (
          <span className="badge text-bg-danger">{transaction.amount}</span>
        )}
      </div>
    </div>
  );
};

export default ListItem;
