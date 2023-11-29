// Paginator.js
import React, { useState } from 'react';

class Paginator {
  constructor({ page, total, pageSize }) {
    this.page = page;
    this.total = total;
    this.pageSize = pageSize;
  }

  getCurrentPage() {
    const start = (this.page - 1) * this.pageSize;
    const end = Math.min(this.page * this.pageSize - 1, this.total - 1);
    return { page: this.page, start, end };
  }

  nextPage() {
    this.page = Math.min(this.page + 1, Math.ceil(this.total / this.pageSize));
    return this.getCurrentPage();
  }

  prevPage() {
    this.page = Math.max(this.page - 1, 1);
    return this.getCurrentPage();
  }

  goToPage(page) {
    this.page = Math.max(1, Math.min(page, Math.ceil(this.total / this.pageSize)));
    return this.getCurrentPage();
  }

  static generatePageNumbers({ page, total, pageSize }) {
    const pageCount = Math.ceil(total / pageSize);
    const pageNumbers = [];

    if (pageCount <= 1) {
      return [];
    }

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push({ display: i.toString(), href: `/page/${i}` });
      }
    } else {
      const mid = Math.max(3, Math.min(pageCount - 2, page));

      pageNumbers.push({ display: '1', href: '/page/1' });
      if (mid > 3) {
        pageNumbers.push({ display: '...', href: null });
      }

      for (let i = mid - 1; i <= mid + 1; i++) {
        pageNumbers.push({ display: i.toString(), href: `/page/${i}` });
      }

      if (mid < pageCount - 2) {
        pageNumbers.push({ display: '...', href: null });
      }

      pageNumbers.push({ display: pageCount.toString(), href: `/page/${pageCount}` });
    }

    return pageNumbers;
  }
}

export default Paginator;

