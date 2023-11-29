// // src/App.js
// import React, { useState } from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   return (
//     <div>
//       <h1>Content Goes Here</h1>
//       <Stack spacing={2}>
//         <Pagination count={10} page={currentPage} onChange={handleChange} />
//       </Stack>
//     </div>
//   );
// };

// export default App;


// app.js
import React from 'react';
import Paginator from './Paginator'; // 这里根据您的项目结构和文件路径进行调整

const App = () => {
  const handlePageChange = (currentPageInfo) => {
    console.log('Current Page:', currentPageInfo);
    // 这里可以添加处理当前页码变化的逻辑
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
