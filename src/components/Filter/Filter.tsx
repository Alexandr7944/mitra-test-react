import { ChangeEvent } from "react";
import './filter-style.css';
import { IFilter } from "../../interface/IFilter";

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  const handlerChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilter({...filter, [event.target.name]: event.target.value})
  }

  const handlerReset = () => {
    setFilter({...filter, query: ''})
  }

  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="input__container">
          <input
            className="filter__search"
            type="text"
            name="query"
            value={filter.query}
            onChange={handlerChange}
            placeholder="Поиск..."
          />
          <button
            className="filter__reset"
            onClick={handlerReset}
          >
            &#10008;
          </button>
        </div>
        <select 
          className="filter__select"
          name="sort"
          onChange={handlerChange}
        >
          <option value="">Сортировка</option>
          <option value="a - z">A - Z</option>
          <option value="z - a">Z - A</option>
        </select>
      </div>
    </div>
  )
}

export default Filter

interface FilterProps {
  filter: IFilter,
  setFilter: (prev: IFilter) => void,
}