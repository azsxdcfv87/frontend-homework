// src/App.js
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <h1>Content Goes Here</h1>
      <Stack spacing={2}>
        <Pagination count={10} page={currentPage} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default App;


