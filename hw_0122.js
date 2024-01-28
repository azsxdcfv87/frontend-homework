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
  arr.forEach((current, i) => {
    // 一二、檢查是否非第一個元素，且非最後一個元素
    // 三四、檢查當前元素是否比其前後的元素都大
    if (i > 0 && i < arr.length - 1 && current > arr[i - 1] && current > arr[i + 1]) {
      // 如果是，則輸出前一個元素、當前元素和後一個元素
      console.log(arr[i - 1], current, arr[i + 1]);
    }
  });
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
  arr.forEach((current, i) => {
    if(i === 0 && current > arr[1] && current > arr[arr.length - 1]) {
      console.log(arr[arr.length - 1], current, arr[1]);
    }
    if(i > 0 && i < arr.length - 1 && current > arr[i - 1] && current > arr[i + 1]) {
      console.log(arr[i - 1], current, arr[i + 1]);
    }
    if(i === arr.length - 1 && current > arr[arr.length - 2] && current > arr[0]) {
      console.log(arr[arr.length - 2], current, arr[0]);
    }
  });
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

  function checkAndPrint(arr, i) {
    let left = i === 0 ? arr[arr.length - 1] : arr[i - 1];
    let right = i === arr.length - 1 ? arr[0] : arr[i + 1];
    if (arr[i] > left && arr[i] > right) {
      console.log(left, arr[i], right);
    }
  }

  arr.forEach((current, i) => {
    checkAndPrint(arr, i);
  });
}