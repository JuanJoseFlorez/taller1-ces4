import React from "react";
import style from "./ListMovements.module.css";
import ListItem from "./ListItem";
import Actions from "./Actions";

function ListMovements({
  transactions,
  filter,
  setFilter,
  search,
  setSearch,
  setTransactions,
  handleShowModal,
  finalBalance,
}) {
  const deleteItem = ({ id, amount, type }) => {
    if (finalBalance - amount < 0 && type === "ingreso") {
      handleShowModal(
        "Error.",
        "No cuenta con saldo suficiente para realizar este movimiento."
      );
    } else {
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
    }
  };
  return (
    <div className="card">
      <div className={`card-header ${style.cardHeader}`}>
        <h5>Listado de movimientos</h5>
        <span className="badge bg-primary w-1">{transactions.length}</span>
      </div>
      <div className="card-body">
        <div className={`mb-3`}>
          <Actions
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
        </div>
        {transactions
          .filter(
            (transaction) =>
              (filter === "todos" || transaction.type === filter) &&
              transaction.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((transaction) => (
            <ListItem
              key={transaction.id}
              transaction={transaction}
              setFilter={setFilter}
              deleteItem={deleteItem}
              handleShowModal={handleShowModal}
            />
          ))}
      </div>
    </div>
  );
}

export default ListMovements;
