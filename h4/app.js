// app.js
// 初始化 Paginator
const paginator = new Paginator({ page: 1, total: 100, pageSize: 10 });
const lastPage = Math.ceil(paginator.total / paginator.pageSize);
// 渲染頁碼器
renderPaginator();

// 渲染頁碼器的函數
function renderPaginator() {
  const container = document.getElementById('paginator-container');
  container.innerHTML = '';

  const paginationList = document.createElement('ul');
  paginationList.classList.add('pagination');

  const currentPage = paginator.getCurrentPage().page;
  // 上一頁按鈕
  const prevPageItem = createPaginationItem('‹', () => handlePageClick(currentPage - 1));
  paginationList.appendChild(prevPageItem);

  // 頁碼按鈕
  const pageNumbers = Paginator.generatePageNumbers({
    page: currentPage,
    total: paginator.total,
    pageSize: paginator.pageSize
  });
  pageNumbers.forEach((pageNumber) => {
    const pageItem = createPaginationItem(pageNumber.display, () => handlePageClick(+pageNumber.display));
    // 判斷是否為當前頁碼，加入特殊樣式
    if (+pageNumber.display === currentPage) {
      pageItem.classList.add('current-page');
    }
    paginationList.appendChild(pageItem);
  });

  // 下一頁按鈕
  const nextPageItem = createPaginationItem('›', () => handlePageClick(currentPage + 1));
  paginationList.appendChild(nextPageItem);

  container.appendChild(paginationList);
}

// 創建頁碼按鈕的函數
function createPaginationItem(text, onClick) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const currentPage = paginator.getCurrentPage().page;
  link.textContent = text;

  if (text === '‹' || text === '›' || text === '...') {
    link.href = '#';  // 對於 < 和 >，將 href 設置為 #
  } else {
    link.href = `/page/${text}`;  // 對於數字頁碼，將 href 設置為相應的 URL
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();  // 阻止默認行為
    onClick();  // 調用點擊事件處理函數
    if (text !== '‹' && text !== '›') {
      updateURL(`/page/${text}`);  // 只有在點擊數字頁碼時更新 URL
    } else if (text === '‹') {
      if (currentPage === 1) {
        updateURL(`/page/${currentPage}`);
      } else {
        updateURL(`/page/${currentPage - 1}`);  // 將當前頁碼減 1
      }
    } else if (text === '›') {
      if (currentPage === lastPage) {
        updateURL(`/page/${currentPage}`);
      } else {
        updateURL(`/page/${currentPage + 1}`);  // 將當前頁碼加 1
      }
    }
  });

  listItem.appendChild(link);
  return listItem;
}

// 頁碼按鈕點擊處理函數
function handlePageClick(page) {
  if (page < 1 || page > lastPage) {
    return;  // 如果頁碼超出範圍，不進行後續操作
  }
  console.log(`Clicked on page ${page}`);
  paginator.goToPage(page);
  renderPaginator();
}

// 更新 URL 函數
function updateURL(url) {
  console.log(`Updating URL to: ${url}`);
  window.history.pushState({}, '', url);
}

function goToPage() {
  const pageInput = document.getElementById('pageInput');
  const targetPage = parseInt(pageInput.value, 10);

  // 檢查輸入的頁碼是否合法
  const lastPage = Math.ceil(paginator.total / paginator.pageSize);
  if (targetPage >= 1 && targetPage <= lastPage) {
    const url = `/page/${targetPage}`;
    updateURL(url);
    handlePageClick(targetPage);
  } else {
    alert('請輸入有效的頁碼');
  }
}