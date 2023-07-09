import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/APIContext';
import Filters from './Filters';

export default function Table() {
  const loading = 'Loading...';
  const apiContext = useContext(Context);
  const { planetData, fetchPlanets } = apiContext;
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleSearchChange = (searchValue) => {
    if (!searchValue) {
      setFilteredData(planetData);
      console.log(planetData);
    } else {
      const filteredResults = planetData.filter((item) => (
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      ));
      setFilteredData(filteredResults);
    }
  };

  useEffect(() => {
    handleSearchChange();
  }, [fetchPlanets]);

  const handleFiltereData = (newFilteredData) => {
    setFilteredData(newFilteredData);
  };

  const handleResetFilters = () => {
    setFilteredData(planetData);
  };

  return (
    <div className="table-container">
      <h3>
        {
          !filteredData ? loading
            : `Planetas ${filteredData.length} de ${filteredData.length}`
        }
      </h3>
      <Filters
        onFilterChange={ handleSearchChange }
        onFilteredData={ handleFiltereData }
        onResetFilters={ handleResetFilters }
      />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {
            !filteredData ? loading
              : (filteredData)
                .map((item, index) => (
                  <tr key={ index }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                  </tr>
                ))
          }
        </tbody>
      </table>
    </div>
  );
}
