// 承上題，請實現 throttle function，並可取得最新帶入的參數
// // example

// const throttleFn = throttle(fn, 1000);
// throttleFn(1);
// throttleFn(2);
// throttleFn(3);
// throttleFn(4);
// throttleFn(5);
// // only execute once after 1s, and take the latest argument 5
// 閉包 效果 可能會壞掉 查詢

function throttle(fn, delay) {
  let lastCallTime = 0;
  let timeout;
  let args; // 新增一個變數用於保存傳遞的參數

  return function (...newArgs) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;

    // 將新的參數保存下來
    args = newArgs;

    if (elapsedTime >= delay) {
      clearTimeout(timeout);
      fn(...args); // 在執行 fn 函數時使用保存的參數
      lastCallTime = currentTime;
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn(...args); // 在執行 fn 函數時使用保存的參數
        lastCallTime = Date.now();
      }, delay - elapsedTime);
    }
  };
}

const throttleFn = throttle((arg) => {
  console.log('Function executed with argument:', arg);
}, 1000);

throttleFn(1);
throttleFn(2);
throttleFn(3);
throttleFn(4);
throttleFn(5);
