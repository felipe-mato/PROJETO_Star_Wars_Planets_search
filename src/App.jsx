import Header from './Components/Header';
import Footer from './Components/Footer';
import PlanetsProvider from './Context/PlanetsProvider';
import ThemeProvider from './Context/ThemeProvider';
import './App.css';
import Table from './Components/Table';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
