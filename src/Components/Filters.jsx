import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import APIContext from '../Context/APIContext';

export default function Filters({ onFilterChange, onFilteredData, onResetFilters }) {
  const apiContext = useContext(APIContext);
  const { planetData } = apiContext;
  const [search, setSearch] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [numericValue, setNumericValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [availableColumns, setAvailableColumns] = useState([]);

  useEffect(() => {
    const initialColumns = planetData.length > 0 ? Object.keys(planetData[0]) : [];
    const finalColumns = initialColumns.filter((column) => column !== 'name');
    setAvailableColumns(finalColumns);
  }, [planetData]);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    onFilterChange(searchValue);
  };

  const handleFiltereData = () => {
    const newFilter = {
      column: selectedColumn,
      condition: selectedCondition,
      value: numericValue,
    };

    const updatedFilters = [...selectedFilters, newFilter];
    setSelectedFilters(updatedFilters);

    const dataFiltred = planetData.filter((planet) => {
      return updatedFilters.every((filter) => {
        const { column, condition, value } = filter;

        if (condition === '=') {
          return planet[column] === value;
        } if (condition === '>') {
          return planet[column] > value;
        } if (condition === '<') {
          return planet[column] < value;
        }

        return true;
      });
    });

    setFilteredData(dataFiltred);
    onFilteredData(dataFiltred);

    setAvailableColumns((prevColumns) => prevColumns
      .filter((column) => column !== selectedColumn));
    setSelectedColumn('');
    setSelectedCondition('');
    setNumericValue('');
  };

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
  };

  const handleNumericValueChange = (e) => {
    setNumericValue(e.target.value);
  };

  const handleDeleteFilters = () => {
    setFilteredData('');
    setSelectedFilters([]);
    onResetFilters();
  };

  return (
    <div className="searchInputs">
      <div className="txtInputDiv">
        <input
          type="text"
          className="filterInput"
          placeholder="Filtro por Nome"
          value={ search }
          onChange={ handleSearchChange }
        />
        <select
          className="filterSelect"
          value={ selectedColumn }
          onChange={ handleColumnChange }
        >
          <option>Selecione uma coluna</option>
          {availableColumns.map((column, index) => (
            <option className="option" key={ index } value={ column }>
              {column}
            </option>
          ))}
        </select>
        <select
          className="filterSelect"
          value={ selectedCondition }
          onChange={ handleConditionChange }
        >
          <option className="option">Selecione uma condição</option>
          <option className="option" key="igual" value="=">
            igual
          </option>
          <option className="option" key="maior" value=">">
            maior
          </option>
          <option className="option" key="menor" value="<">
            menor
          </option>
        </select>
        <input
          className="filterInput"
          type="number"
          placeholder="digite uma quantidade"
          value={ numericValue }
          onChange={ handleNumericValueChange }
        />
        <button onClick={ handleFiltereData }>Aplicar Filtro</button>
        <button onClick={ handleDeleteFilters }>Delete Filters</button>
        <div>
          Filtros selecionados:
          {selectedFilters.map((filter, index) => (
            <div key={ index }>
              {filter.column}
              {' '}
              {filter.condition}
              {' '}
              {filter.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onFilteredData: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
};
