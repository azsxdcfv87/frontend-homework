// paginator.js
class Paginator {
  constructor({ page, total, pageSize }) {
    this.page = page;
    this.total = total;
    this.pageSize = pageSize;
  }

  getCurrentPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = Math.min(start + this.pageSize - 1, this.total - 1);
    return { page: this.page, start, end };
  }

  goToPage(page) {
    this.page = Math.max(1, Math.min(page, Math.ceil(this.total / this.pageSize)));
  }

  static generatePageNumbers({ page, total, pageSize }) {
    const totalPages = Math.ceil(total / pageSize);
    const pages = [];

    // 簡單地生成頁碼
    for (let i = 1; i <= totalPages; i++) {
      pages.push({ display: i.toString() });
    }

    return pages;
  }
}

