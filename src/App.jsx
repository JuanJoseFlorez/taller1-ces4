import { useState } from "react";
import Header from "./components/header/Header";
import style from "./App.module.css";
import Register from "./components/register/Register";
import ListMovements from "./components/listMovements/ListMovements";
import MyModal from "./components/modal/MyModal";

function App() {
  const [startBalance, setStartBalance] = useState(0);
  const [finalBalance, setFinalBalance] = useState(0);
  const [filter, setFilter] = useState("todos");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState({
    show: false,
    title: "",
    description: "",
    type: "",
    transaction: "",
  });
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    name: "",
    amount: 0,
  });

  const handleShowModal = (
    title = "",
    description = "",
    type = "",
    transaction = ""
  ) =>
    setModal({
      show: true,
      title: title,
      description: description,
      type: type,
      transaction: transaction,
    });

  return (
    <div>
      <Header
        startBalance={startBalance}
        setStartBalance={setStartBalance}
        finalBalance={finalBalance}
        setFinalBalance={setFinalBalance}
        transactions={transactions}
      />
      <MyModal
        modal={modal}
        setModal={setModal}
        transactions={transactions}
        formData={formData}
        setFormData={setFormData}
        setTransactions={setTransactions}
        finalBalance={finalBalance}
      />
      <div className="row p-5">
        <div className={`col`}>
          <Register
            finalBalance={finalBalance}
            transactions={transactions}
            setTransactions={setTransactions}
            handleShowModal={handleShowModal}
            modal={modal}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="col">
          <ListMovements
            transactions={transactions}
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
            setTransactions={setTransactions}
            handleShowModal={handleShowModal}
            finalBalance={finalBalance}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
