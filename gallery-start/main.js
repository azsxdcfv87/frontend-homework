const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  // 創建新的 <img> 元素
  const newImage = document.createElement('img');
  
  // 設定 src 屬性為圖片路徑
  newImage.src = `images/pic${i}.jpg`;
  // 設定 alt 屬性為圖片描述
  newImage.alt = alts[`pic${i}.jpg`];
  // 在 thumbBar 中增加新的 <img>
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (event) => {
  // 確保點擊的是圖片元素
  if (event.target.tagName === 'IMG') {
    // 將 displayedImage 的 src 和 alt 設定為點擊的圖片的 src 和 alt
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
  }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  // 檢查當前設置在 <button> 上的 class 名稱
  // 如果 class 名稱是 "dark"，則進行相應的更改
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
  // 如果 class 名稱不是 "dark"，則進行相應的更改
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
