const canvas = document.getElementById("myCanvas");
const gameBox = canvas.getContext("2d");

// 게임 박스의 너비와 높이 설정

const bw = 40 * 10; // 12칸 너비
const bh = 40 * 20; // 22칸 높이

// 패딩 설정
const p = 3;

// 캔버스의 크기 설정
canvas.width = bw + 150; // 게임 박스 너비 + 스코어 박스 너비 (추가적인 공간)
canvas.height = bh + 2 * p;

function drawBoard() {
  for (let x = 0; x <= bw; x += 40) {
    gameBox.moveTo(0.5 + x + p, p);
    gameBox.lineTo(0.5 + x + p, bh + p);
  }

  for (let y = 0; y <= bh; y += 40) {
    gameBox.moveTo(p, 0.5 + y + p);
    gameBox.lineTo(bw + p, 0.5 + y + p);
  }
  gameBox.strokeStyle = "lightskyblue";
  gameBox.stroke();
}

drawBoard();

// 스코어 박스
const scoreBoxX = bw + 50;
const scoreBoxY = 150;
const scoreBoxWidth = 100;
const scoreBoxHeight = 50;

function drawScoreBox() {
  gameBox.beginPath();
  gameBox.rect(scoreBoxX, scoreBoxY, scoreBoxWidth, scoreBoxHeight);
  gameBox.strokeStyle = "lightskyblue";
  gameBox.stroke();
  gameBox.closePath();
}

drawScoreBox();
