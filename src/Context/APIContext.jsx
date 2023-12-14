import { createContext } from 'react';

const APIContext = createContext({
  fetchPlanets: () => {},
  planetData: [],
});

export default APIContext;
