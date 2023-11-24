// Paginator 需要滿足以下要求：
// 初始:
// constructor({ page, total, pageSize }): total 表示總數量 page 表示當前頁碼 pageSize表示每頁的數量
// 方法：
// getCurrentPage(): 返回當前頁碼與數字範圍
// nextPage(): 將當前頁碼設為下一頁 並返回對應的數字範圍。
// prevPage(): 將當前頁碼設為上一頁 並返回對應的數字範圍。
// goToPage(page): 跳轉到指定頁碼 page並返回對應的數字範圍
// 靜態方法：
// generatePageNumbers({ page, total, pageSize }): 靜態方法 接收頁碼和總數與每頁的數量 返回對應的數字範圍。