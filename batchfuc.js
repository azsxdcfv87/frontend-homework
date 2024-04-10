let executeCount = 0;

// function batch(func) {
//   // 函數內容
// }
// const batch = function(func) {
//   // 函數內容
// }
const batch = (func) => {
  let promise;
  let args = [];
  return (numbers) => {
    args.push(...numbers);
    if (!promise) {
      promise = new Promise((resolve) => {
        resolve(func(args));
        executeCount++;
        promise = null;
        args = [];
      });
    }
    return promise;
  };
};

const batchedFunc = batch((numbers) => {
  return numbers.map((x) => x * 2);
});

async function runBatchedFunc() {
  const [r1, r2, r3] = await Promise.all([
    batchedFunc([1, 2, 3]),
    batchedFunc([4, 5]),
    batchedFunc([6, 7, 8, 9]),
  ]);

  console.log(r1);  // 輸出：[2, 4, 6]
  console.log(r2);  // 輸出：[8, 10]
  console.log(r3);  // 輸出：[12, 14, 16, 18]
  console.log(executeCount);  // 輸出：1
}

runBatchedFunc();
// -------------------------
// (Bonus) Create a batch function. The batchedFunc will execute once even invoke 3 times in Promise.all. let executeCount = 0;

// const batch = (func) => { // TODO // do not just assign executeCount = 1 };

// const batchedFunc = batch((nums) => { executeCount++; return nums.map((x) => x * 2); });

// const [r1, r2, r3] = await Promise.all([ batchedFunc([1, 2, 3]), batchedFunc([4, 5]), batchedFunc([6, 7, 8, 9]), ]); 
// r1: [2, 4, 6] // r2: [8, 10] // r3: [12, 14, 116, 18] // executeCount: 1 <--- need to be one