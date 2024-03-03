
// 設定畫布
// 取得 canvas 元素
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 設定畫布的寬度和高度為瀏覽器視窗的寬度和高度
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 產生指定範圍內的隨機整數
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// 產生隨機顏色
function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

// 建立小球物件建構函數
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// 新增小球更新方法
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// 添加小球更新方法
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};

// 儲存所有的小球對象
let balls = [];

// 建立多個小球對象，並儲存在陣列中
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // 設定球的位置，確保球至少離畫布邊緣一個球的直徑的距離
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
  );
  balls.push(ball);
}

// 定義循環函數，用於更新和繪製小球
function loop() {
  // 繪製半透明黑色矩形清除之前的內容，以便更新小球位置
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  // 遍歷所有的小球對象，繪製並更新每個小球
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();

  }
  // 使用 requestAnimationFrame 方法遞迴呼叫 loop 函數，實作動畫效果
  requestAnimationFrame(loop);
}

// 定義小球碰撞偵測方法
Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      // 當兩個小球碰撞時，改變它們的顏色
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
};


// 呼叫 loop 函數，開始動畫循環
loop();