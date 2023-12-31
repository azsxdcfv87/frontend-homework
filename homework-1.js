// 請實現 Web API: Array.prototype.myFlat
// // example

// [[1, 2], 3, [4, [5, 6]]].myFlat(); // [1, 2, 3, 4, 5, 6]

// 以範例來看， myFlat 要完成的是將巢狀結構的 array 扁平化
// 實際查詢的情況與範例最後產生的情況相同
// bigO 時間複雜度為 O(n^2) 查詢
// 邊際情況 查詢
Array.prototype.myFlat = function() {
  let flattenArray = [];
  this.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArray = flattenArray.concat(item.myFlat()); // 使用 myFlat 方法進行遞迴處理
    } else {
      flattenArray.push(item);
    }
  });
  return flattenArray;
};

const nestedArray = [[1, 2], 3, [4, [5, 6]]];
const result = nestedArray.myFlat();
console.log(result); // [1, 2, 3, 4, 5, 6]

// function NewMyFlat(arr) {
//   let flattenArray = [];
//   // 將 array 使用 forEach((item)，將陣列中每個元素都跑過一次
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       // concat 將處理過的陣列數字，連接到 flattenArray 中，且不多新增巢狀結構
//       // 重新調用 NewMyFlat(item) 處理陣列內數字
//       flattenArray = flattenArray.concat(NewMyFlat(item));
//     } else {
//       flattenArray.push(item);
//     }
//   });
//   return flattenArray;
// }

// const nestedArray = [[1, 2], 3, [4, [5, 6]]];
// const flattenArray = NewMyFlat(nestedArray);
// console.log(flattenArray); // [1, 2, 3, 4, 5, 6]
