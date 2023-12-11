// 請實現 throttle function
// // example 

// const throttleFn = throttle(fn, 1000);
// throttleFn();
// throttleFn();
// throttleFn();
// // only execute once after 1

// 理解題目含義是，設定一個 throttle function
// 內部函數要確認原本的時間跟經過的時間相減是否大於 1000
// 大於 1 時則執行，小於 1 時則不執行
// 大於 1 執行後，將時間重新設定，起始時間為第一次執行的最終時間，直到第二次的執行時間大於 1 再次迴圈
// homework arrow function 哪些可以使用
// homework immediate
// homework 什麼時候可能會壞
// 脆弱性
function throttle(fn, delay, immediate) {
  let lastCallTime = 0;
  let timeout;

  return function () {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;

    if (elapsedTime >= delay) {
      clearTimeout(timeout);
      fn();
      lastCallTime = currentTime;
    } else if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn();
        lastCallTime = Date.now();
      }, delay - elapsedTime);
    }
  };
}

const throttleFn = throttle(() => {
  console.log('Function executed!');
}, 1000);

throttleFn();
throttleFn();
throttleFn();
// setTimeout(throttleFn, 1005)
// setTimeout(throttleFn, 1645)
// setTimeout(throttleFn, 1885)