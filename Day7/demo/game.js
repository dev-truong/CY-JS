const basket = document.getElementById("basket");
const egg = document.getElementById("egg");
const scoreElement = document.getElementById("score");
let score = 0;
let basketPosition = window.innerWidth / 2 - 50;
let eggFallingSpeed = 3;

// Di chuyển rổ bằng phím trái/phải
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" && basketPosition > 0) {
        basketPosition -= 30;
    }
    if (event.key === "ArrowRight" && basketPosition < window.innerWidth - 100) {
        basketPosition += 30;
    }
    basket.style.left = basketPosition + "px";
});

// Kiểm tra va chạm giữa trứng và rổ
function checkCollision() {
    const eggRect = egg.getBoundingClientRect();
    const basketRect = basket.getBoundingClientRect();

    if (
        eggRect.bottom >= basketRect.top &&
        eggRect.right >= basketRect.left &&
        eggRect.left <= basketRect.right
    ) {
        // Nếu trứng rơi vào rổ, cộng điểm và reset trứng
        score++;
        scoreElement.textContent = score;
        resetEgg();
    }

    // Nếu trứng rơi ra ngoài
    if (eggRect.top > window.innerHeight) {
        resetEgg();
    }
}

// Reset vị trí trứng
function resetEgg() {
    egg.style.top = "-50px";
    egg.style.left = Math.random() * (window.innerWidth - 50) + "px";
}

// Cập nhật vị trí của trứng
function updateEggPosition() {
    let eggTop = parseFloat(egg.style.top);
    eggTop += eggFallingSpeed;
    egg.style.top = eggTop + "px";
    checkCollision();
}

// Khởi chạy game
function gameLoop() {
    updateEggPosition();
    requestAnimationFrame(gameLoop);
}

// Bắt đầu trò chơi
resetEgg();
gameLoop();
