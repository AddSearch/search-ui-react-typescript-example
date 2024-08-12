import React, { useEffect } from 'react';
import './App.css';
import SearchField from "./addsearch-ui-components/SearchField";
import SearchResults from "./addsearch-ui-components/SearchResults";

declare global {
  interface Window {
    AddSearchClient: any;
    AddSearchUI: any;
  }
}

function App() {
  const addSearchClient = new window.AddSearchClient('82b34461f88ea8d0f6c6e26ed89d07b1');
  const addSearchUI = new window.AddSearchUI(addSearchClient);

  useEffect(() => {
    addSearchUI.start();
  }, [addSearchUI]);

  return (
    <div className="App">
      <header className="App-header">
        <div>Search UI example - Build UI in React TypeScript project</div>
        <SearchField
          uiInstance={addSearchUI}
          button="Search.."
          searchAsYouType={true}
        />

        <SearchResults uiInstance={addSearchUI} />
      </header>
    </div>
  );
}

export default App;
