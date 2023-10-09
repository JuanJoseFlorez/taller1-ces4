import React from "react";
import style from "./Header.module.css";
import { useEffect } from "react";

function header({
  startBalance,
  setStartBalance,
  finalBalance,
  setFinalBalance,
  transactions,
}) {

  
  //Se usa un efecto para que se ejecute cada que cambie ingresos, gastos y startBalance
  useEffect(() => {
    //Se obtiene la suma de los ingresos y gastos, como se almacenan objetos se usa un reduce
    const ingresos = transactions.reduce(
      (total, transaction) =>
        transaction.type === "ingreso"
          ? total + transaction.amount
          : total + 0,
      0
    );
    const gastos = transactions.reduce(
      (total, transaction) =>
        transaction.type === "gasto" ? total + transaction.amount : total + 0,
      0
    );
    //Se define el nuevo final balance con la formula
    setFinalBalance(parseFloat(startBalance) + parseFloat(ingresos - gastos));
  }, [transactions, startBalance]);

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="https://placehold.co/100x50/png" alt="Logo" />
        <h1>Taller 1</h1>
      </div>
      <div className={style.balance}>
        <div>
          <p>Saldo Inicial: </p>
          <input
            type="number"
            name="startBalance"
            id="startBalance"
            value={startBalance}
            required
            onChange={(e) => setStartBalance(e.target.value)}
          />
        </div>
        <div>
          <p>Saldo Final: </p>
          <input
            type="number"
            name="finalBalance"
            id="finalBalance"
            value={finalBalance}
            disabled
          />
        </div>
      </div>
    </header>
  );
}

export default header;
