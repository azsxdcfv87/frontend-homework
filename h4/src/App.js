import React from 'react';
import Paginator from './Paginator';

const App = () => {
  const handlePageChange = (currentPageInfo) => {
    console.log('Current Page:', currentPageInfo);
  };

  return (
    <div className="app">
      <h1>My App</h1>
      <Paginator
        page={1}
        total={100}
        pageSize={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
