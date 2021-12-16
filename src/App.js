import './App.css';
import Favorites from './components/favorites';
import Movies from './components/movies';
import SearchBar from './components/searchBar/SearchBar';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="container">
        <SearchBar />
        <Movies />
        <Favorites />
      </div>
    </DataProvider>
  );
}

export default App;
