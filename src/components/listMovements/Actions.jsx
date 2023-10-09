import React from "react";

const Actions = ({setFilter, search, setSearch}) => {
  return (
    <div>
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className=" col-12">
          <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filters"
              id="filter1"
              value="todos"
              onClick={(e) => setFilter(e.target.value)}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="filter1">
              Todos
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filters"
              id="filter2"
              value="ingreso"
              onClick={(e) => setFilter(e.target.value)}
            />
            <label className="form-check-label" htmlFor="filter2">
              Ingreso
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="filters"
              id="filter3"
              value="gasto"
              onClick={(e) => setFilter(e.target.value)}
            />
            <label className="form-check-label" htmlFor="filter3">
              Gasto
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Actions;
