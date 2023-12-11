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

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push({ display: i.toString() });
      }
    } else {
      const mid = Math.ceil(7 / 2);

      if (page <= mid) {
        // 前半部分
        for (let i = 1; i <= 5; i++) {
          pages.push({ display: i.toString() });
        }
        pages.push({ display: '...', href: null, class: 'non-clickable' });
        pages.push({ display: totalPages.toString() });
      } else if (page >= totalPages - mid + 1) {
        // 後半部分
        pages.push({ display: '1' });
        pages.push({ display: '...', href: null, class: 'non-clickable' });
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push({ display: i.toString() });
        }
      } else {
        // 中間部分
        pages.push({ display: '1' });
        pages.push({ display: '...', href: null, class: 'non-clickable' });
        for (let i = page - mid + 3; i <= page + mid - 3; i++) {
          pages.push({ display: i.toString() });
        }
        pages.push({ display: '...', href: null, class: 'non-clickable' });
        pages.push({ display: totalPages.toString() });
      }
    }

    return pages;
  }
}

