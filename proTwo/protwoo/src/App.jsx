import { useState } from "react";
import "./App.css";
import Search from "./components/SearchBar";
import SearchResultslist from "./components/SearchResultslist";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <Search setResults={setResults} />
        <SearchResultslist results={results} />
      </div>
    </div>
  );
}

export default App;
