// Paginator.js
import React, { useState } from 'react';
import './Paginator.css'; // 引入自定义的样式文件

const Paginator = ({ page, total, pageSize, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const getCurrentPage = () => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, total);
    return { page: currentPage, start, end };
  };

  const nextPage = () => {
    const nextPageValue = Math.min(currentPage + 1, Math.ceil(total / pageSize));
    setCurrentPage(nextPageValue);
    onPageChange(getCurrentPage());
  };

  const prevPage = () => {
    const prevPageValue = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPageValue);
    onPageChange(getCurrentPage());
  };

  const goToPage = (targetPage) => {
    const newPage = Math.max(1, Math.min(targetPage, Math.ceil(total / pageSize)));
    setCurrentPage(newPage);
    onPageChange(getCurrentPage());
  };

  const renderPageNumbers = () => {
    const pageCount = Math.ceil(total / pageSize);
    const pageNumbers = [];

    if (pageCount <= 1) {
      return [];
    }

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(<span key={i} onClick={() => goToPage(i)}>{i}</span>);
      }
    } else {
      const mid = Math.max(3, Math.min(pageCount - 2, currentPage));

      pageNumbers.push(<span key={1} onClick={() => goToPage(1)}>1</span>);
      if (mid > 3) {
        pageNumbers.push(<span key="ellipsis1">...</span>);
      }

      for (let i = mid - 1; i <= mid + 1; i++) {
        pageNumbers.push(<span key={i} onClick={() => goToPage(i)}>{i}</span>);
      }

      if (mid < pageCount - 2) {
        pageNumbers.push(<span key="ellipsis2">...</span>);
      }

      pageNumbers.push(<span key={pageCount} onClick={() => goToPage(pageCount)}>{pageCount}</span>);
    }

    return pageNumbers;
  };

  return (
    <div className="paginator">
      <button onClick={prevPage}>Prev</button>
      <span>{`Page ${getCurrentPage().page}: ${getCurrentPage().start} - ${getCurrentPage().end} of ${total}`}</span>
      <button onClick={nextPage}>Next</button>
      <div className="page-numbers">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Paginator;
