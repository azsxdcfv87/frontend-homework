import React, { useState } from 'react';
import './Paginator.css';

// 定義 Paginator 函數組件，接受 page、total、pageSize、onPageChange 四個 props
const Paginator = ({ page, total, pageSize, onPageChange }) => {
  // 使用 useState 追蹤當前頁面和目標頁面
  const [currentPage, setCurrentPage] = useState(page);
  const [targetPage, setTargetPage] = useState('');

  // 定義取得當前頁面範圍的函數
  const getCurrentPage = () => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, total);
    return { page: currentPage, start, end };
  };

  // 定義下一頁的函數，更新當前頁面後調用 onPageChange 回調
  const nextPage = () => {
    const nextPageValue = Math.min(currentPage + 1, Math.ceil(total / pageSize));
    setCurrentPage(nextPageValue);
    onPageChange(getCurrentPage());
  };

  // 定義上一頁的函數，更新當前頁面後調用 onPageChange 回調
  const prevPage = () => {
    const prevPageValue = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPageValue);
    onPageChange(getCurrentPage());
  };

  // 定義跳轉到指定頁面的函數，檢查目標頁碼是否有效，更新當前頁面後調用 onPageChange 回調
  const goToPage = () => {
    if (targetPage !== '') {  // 檢查目標頁碼是否為空
      const newPage = Math.max(1, Math.min(parseInt(targetPage), Math.ceil(total / pageSize)));  // 將目標頁碼轉為整數，確保它是有效的頁碼
      setCurrentPage(newPage);
      setTargetPage(''); // 清空輸入框，在跳轉到指定頁面後
      onPageChange(getCurrentPage());
    }
  };

  const handlePageClick = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    onPageChange(getCurrentPage());
  };

  const renderPageNumbers = () => {
    const pageCount = Math.ceil(total / pageSize);
    const pageNumbers = [];

    if (pageCount <= 1) {
      return [];
    }

    const maxPageNumbers = 7;
    const mid = Math.ceil(maxPageNumbers / 2);
    const isStart = currentPage <= mid;
    const isEnd = currentPage > pageCount - mid;

    if (pageCount <= maxPageNumbers) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(<a className="page-number" key={i} href={`/page/${i}`} onClick={(e) => handlePageClick(i, e)}>{i}</a>);
      }
    } else if (isStart) {
      for (let i = 1; i <= maxPageNumbers - 2; i++) {
        pageNumbers.push(<a className="page-number" key={i} href={`/page/${i}`} onClick={(e) => handlePageClick(i, e)}>{i}</a>);
      }
      pageNumbers.push(<span className="page-number" key="ellipsis">...</span>);
      pageNumbers.push(<a className="page-number" key={pageCount} href={`/page/${pageCount}`} onClick={(e) => handlePageClick(pageCount, e)}>{pageCount}</a>);
    } else if (isEnd) {
      pageNumbers.push(<a className="page-number" key={1} href={`/page/${1}`} onClick={(e) => handlePageClick(1, e)}>{1}</a>);
      pageNumbers.push(<span className="page-number" key="ellipsis">...</span>);
      for (let i = pageCount - maxPageNumbers + 3; i <= pageCount; i++) {
        pageNumbers.push(<a className="page-number" key={i} href={`/page/${i}`} onClick={(e) => handlePageClick(i, e)}>{i}</a>);
      }
    } else {
      pageNumbers.push(<a className="page-number" key={1} href={`/page/${1}`} onClick={(e) => handlePageClick(1, e)}>{1}</a>);
      pageNumbers.push(<span className="page-number" key="ellipsis1">...</span>);
      for (let i = currentPage - mid + 3; i <= currentPage + mid - 3; i++) {
        pageNumbers.push(<a className="page-number" key={i} href={`/page/${i}`} onClick={(e) => handlePageClick(i, e)}>{i}</a>);
      }
      pageNumbers.push(<span className="page-number" key="ellipsis2">...</span>);
      pageNumbers.push(<a className="page-number" key={pageCount} href={`/page/${pageCount}`} onClick={(e) => handlePageClick(pageCount, e)}>{pageCount}</a>);
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
