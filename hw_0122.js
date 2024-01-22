function printArray1() {
  // 創造空陣列
  const arr = [];
  for (let i = 0; i < 3000 ; i++) {
    // 塞入 3000 個隨機整數，使用 Math.random()，取小數點最大值
    // Math.random() 0~1 之間的數字，但不包含 1
    // Math.floor() 傳入的參數是一個正數，返回 <= 最大整數。傳入負數，返回 >= 最小整數。
    let randomNumber = Math.floor(Math.random() * 3001) - 1000;
    arr.push(randomNumber);
  }
  for (let i = 1; i < arr.length - 2; i++) {
    // 檢查當前元素是否比其前後的元素都大
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      // 如果是，則輸出前一個元素、當前元素和後一個元素
      console.log(arr[i - 1], arr[i], arr[i + 1]);
    }
  }
}

function printArray2() {
  // 創造空陣列
  const arr = [];
  for (let i = 0; i < 3000 ; i++) {
    // 塞入 3000 個隨機整數，使用 Math.random()，取小數點最大值
    // Math.random() 0~1 之間的數字，但不包含 1
    // Math.floor() 傳入的參數是一個正數，返回 <= 最大整數。傳入負數，返回 >= 最小整數。
    let randomNumber = Math.floor(Math.random() * 3001) - 1000;
    arr.push(randomNumber);
  }
  // 檢查第一個元素是否比第二個元素和最後一個元素都大
  if (arr[0] > arr[1] && arr[0] > arr[arr.length - 1]) {
    console.log(arr[arr.length - 1], arr[0], arr[1]);
  }
  for (let i = 1; i < arr.length - 2; i++) {
    // 檢查當前元素是否比其前後的元素都大
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      // 如果是，則輸出前一個元素、當前元素和後一個元素
      console.log(arr[i - 1], arr[i], arr[i + 1]);
    }
  }
  // 檢查最後一個元素是否比第一個元素和倒數第二個元素都大
  if (arr[arr.length - 1] > arr[arr.length - 2] && arr[arr.length - 1] > arr[0]) {
    console.log(arr[arr.length - 2], arr[arr.length - 1], arr[0]);
  }
}

function printArray3() {
  // 創造空陣列
  const arr = [];
  for (let i = 0; i < 3000 ; i++) {
    // 塞入 3000 個隨機整數，使用 Math.random()，取小數點最大值
    // Math.random() 0~1 之間的數字，但不包含 1
    // Math.floor() 傳入的參數是一個正數，返回 <= 最大整數。傳入負數，返回 >= 最小整數。
    let randomNumber = Math.floor(Math.random() * 3001) - 1000;
    arr.push(randomNumber);
  }

  const checkAndPoint = function (prev, current, next) {
    if (current > prev && current > next) {
      console.log(prev, current, next);
    }
  }
  // 檢查第一個元素是否比第二個元素和最後一個元素都大
  checkAndPoint(arr[0], arr[1], arr[arr.length - 1]);
  // 用 forloop 檢查中間元素
  for (let i = 1; i < arr.length - 2; i++) {
    checkAndPoint(arr[i - 1], arr[i], arr[i + 1]);
  }
  // 檢查最後一個元素是否比第一個元素和倒數第二個元素都大
  checkAndPoint(arr[arr.length - 2], arr[arr.length - 1], arr[0]);
}