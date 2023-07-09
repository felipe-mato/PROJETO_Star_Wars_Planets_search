import PropTypes from 'prop-types';
import { useState } from 'react';
import APIContext from './APIContext';

function PlanetsProvider({ children }) {
  const [planetData, setPlanetData] = useState('');

  const API = 'https://swapi.dev/api/planets';

  const fetchPlanets = async () => {
    try {
      const response = await fetch(API);
      const preData = await response.json();
      const { results } = preData;
      const dataWithoutResidents = results
        .map(({ residents, url, edited, created, films, ...object }) => object);
      setPlanetData(dataWithoutResidents);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  const contextValue = {
    planetData,
    fetchPlanets,
  };
  return (
    <APIContext.Provider value={ contextValue }>
      {children}
    </APIContext.Provider>
  );
}
export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
