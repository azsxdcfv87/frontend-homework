import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Paginator.css';

const Paginator = ({ page, total, pageSize, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [targetPage, setTargetPage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const changePage = (newPage) => {
    const pageInfo = { page: newPage, start: (newPage - 1) * pageSize + 1, end: Math.min(newPage * pageSize, total) };
    setCurrentPage(newPage);
    onPageChange(pageInfo);

    const currentPath = location.pathname;
    const newPath = currentPath.includes('/page/') 
      ? currentPath.replace(/\/page\/\d+/, `/page/${newPage}`)
      : `${currentPath}/page/${newPage}`;
    navigate(newPath);
  };


  const nextPage = () => {
    const nextPageValue = Math.min(currentPage + 1, Math.ceil(total / pageSize));
    changePage(nextPageValue);
  };

  const prevPage = () => {
    const prevPageValue = Math.max(currentPage - 1, 1);
    changePage(prevPageValue);
  };

  const goToPage = () => {
    if (targetPage !== '') {
      const newPage = Math.max(1, Math.min(parseInt(targetPage), Math.ceil(total / pageSize)));
      changePage(newPage);
      setTargetPage('');
    }
  };

  const renderPageNumbers = () => {
    const pageCount = Math.ceil(total / pageSize);
    const pageNumbers = [];

    if (pageCount <= 1) {
      return [];
    }

    const maxPageNumbers = 11;
    const mid = Math.ceil(maxPageNumbers / 2);
    const isStart = currentPage <= mid;
    const isEnd = currentPage > pageCount - mid;

    if (pageCount <= maxPageNumbers) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(
          <button 
            key={i} 
            onClick={() => changePage(i)} 
            className={`page-number ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    } else if (isStart) {
      for (let i = 1; i <= maxPageNumbers - 2; i++) {
        pageNumbers.push(
          <button 
            key={i} 
            onClick={() => changePage(i)} 
            className={`page-number ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
      pageNumbers.push(<span key="ellipsis" className="page-ellipsis">...</span>);
      pageNumbers.push(
        <button 
          key={pageCount} 
          onClick={() => changePage(pageCount)} 
          className="page-number"
        >
          {pageCount}
        </button>
      );
    } else if (isEnd) {
      pageNumbers.push(
        <button 
          key={1} 
          onClick={() => changePage(1)} 
          className="page-number"
        >
          1
        </button>
      );
      pageNumbers.push(<span key="ellipsis" className="page-ellipsis">...</span>);
      for (let i = pageCount - maxPageNumbers + 3; i <= pageCount; i++) {
        pageNumbers.push(
          <button 
            key={i} 
            onClick={() => changePage(i)} 
            className={`page-number ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button 
          key={1} 
          onClick={() => changePage(1)} 
          className="page-number"
        >
          1
        </button>
      );
      pageNumbers.push(<span key="ellipsis1" className="page-ellipsis">...</span>);
      for (let i = currentPage - mid + 3; i <= currentPage + mid - 3; i++) {
        pageNumbers.push(
          <button 
            key={i} 
            onClick={() => changePage(i)} 
            className={`page-number ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
      pageNumbers.push(<span key="ellipsis2" className="page-ellipsis">...</span>);
      pageNumbers.push(
        <button 
          key={pageCount} 
          onClick={() => changePage(pageCount)} 
          className="page-number"
        >
          {pageCount}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="paginator-container">
      <div className="paginator">
        <input
          type="number"
          value={targetPage}
          onChange={(e) => setTargetPage(e.target.value)}
          placeholder="請輸入頁碼"
        />
        <button className="page-button" onClick={goToPage}>Go</button>
      </div>
      <div className="page-numbers">
        <button className="page-button" onClick={prevPage}>&#9664;</button>
        {renderPageNumbers()}
        <button className="page-button" onClick={nextPage}>&#9654;</button>
      </div>
    </div>
  );
};

export default Paginator;
