// 請實現 throttle function
// // example 

// const throttleFn = throttle(fn, 1000);
// throttleFn();
// throttleFn();
// throttleFn();
// // only execute once after 1

// 理解題目含義是，設定一個 throttle function
// 內部函數要確認原本的時間跟經過的時間相減是否大於 1
// 大於 1 時則執行，小於 1 時則不執行
// 大於 1 執行後，將時間重新設定，起始時間為第一次執行的最終時間，直到第二次的執行時間大於 1 再次迴圈

function throttle(fn, delay) {
  let lastTime = 0;
  let timeoutId = null;

  return function () {
    const currentTime = new Date().getTime();
    const args = Array.from(arguments);

    // 計算距離上次執行的時間間隔
    const timeDiff = currentTime - lastTime;

    // 如果時間間隔大於設定的延遲時間，則執行函數
    if (!lastTime || timeDiff >= delay) {
      fn.apply(this, args);
      lastTime = currentTime;

      // 設置新的計時器，確保下一次執行在 delay 時間後
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        timeoutId = null; // 清空 timeoutId，以便下一次呼叫可以正確設置新的計時器
      }, delay);
    }
  };
}

// 定義實際的函數 fn
function fn() {
  console.log('Executing!');
}

const throttleFn = throttle(fn, 1000);

// 測試
throttleFn(); // 打印 "Executing!"
throttleFn(); // 在 1 秒內不會執行
throttleFn(); // 在 1 秒內不會執行

