// paginator.js
const Paginator = ({ page, total, pageSize, onPageChange }) => {
  let currentPage = page;
  let targetPage = '';

  const getCurrentPage = () => {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, total);
    return { page: currentPage, start, end };
  };

  const nextPage = () => {
    const nextPageValue = Math.min(currentPage + 1, Math.ceil(total / pageSize));
    currentPage = nextPageValue;
    onPageChange(getCurrentPage());
  };

  const prevPage = () => {
    const prevPageValue = Math.max(currentPage - 1, 1);
    currentPage = prevPageValue;
    onPageChange(getCurrentPage());
  };

  const goToPage = () => {
    const newPage = Math.max(1, Math.min(targetPage, Math.ceil(total / pageSize)));
    currentPage = newPage;
    onPageChange(getCurrentPage());
  };

  const setTargetPage = (value) => {
    targetPage = value;
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
        pageNumbers.push(`<span class="page-number" onclick="goToPage(${i})">${i}</span>`);
      }
    } else if (isStart) {
      for (let i = 1; i <= maxPageNumbers - 2; i++) {
        pageNumbers.push(`<span class="page-number" onclick="goToPage(${i})">${i}</span>`);
      }
      pageNumbers.push('<span class="page-number">...</span>');
      pageNumbers.push(`<span class="page-number" onclick="goToPage(${pageCount})">${pageCount}</span>`);
    } else if (isEnd) {
      pageNumbers.push(`<span class="page-number" onclick="goToPage(1)">1</span>`);
      pageNumbers.push('<span class="page-number">...</span>');
      for (let i = pageCount - maxPageNumbers + 3; i <= pageCount; i++) {
        pageNumbers.push(`<span class="page-number" onclick="goToPage(${i})">${i}</span>`);
      }
    } else {
      pageNumbers.push(`<span class="page-number" onclick="goToPage(1)">1</span>`);
      pageNumbers.push('<span class="page-number">...</span>');
      for (let i = currentPage - mid + 3; i <= currentPage + mid - 3; i++) {
        pageNumbers.push(`<span class="page-number" onclick="goToPage(${i})">${i}</span>`);
      }
      pageNumbers.push('<span class="page-number">...</span>');
      pageNumbers.push(`<span class="page-number" onclick="goToPage(${pageCount})">${pageCount}</span>`);
    }

    return pageNumbers.join('');
  };

  const container = document.getElementById('paginator-container');
  container.innerHTML = `
    <div class="paginator">
      <span>Page ${getCurrentPage().page}: ${getCurrentPage().start} - ${getCurrentPage().end} of ${total}</span>
      <input
        type="number"
        value="${targetPage}"
        onchange="setTargetPage(this.value)"
        placeholder="Go to page"
      />
      <button class="page-button" onclick="goToPage()">Go</button>
    </div>
    <div class="page-numbers">
      <button class="page-button" onclick="prevPage()">&#9664;</button>
      ${renderPageNumbers()}
      <button class="page-button" onclick="nextPage()">&#9654;</button>
    </div>
  `;
};

// Example usage
Paginator({ page: 1, total: 100, pageSize: 10, onPageChange: () => {} });
