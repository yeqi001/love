const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseText = document.getElementById('response');
const bgMusic = document.getElementById('bgMusic');

let noClickCount = 0; // 记录“不要”按钮点击次数

// 页面加载时自动播放背景音乐
window.addEventListener('load', () => {
    bgMusic.play();
});

yesBtn.addEventListener('click', () => {
    responseText.textContent = "贴贴❤️";
    yesBtn.style.display = 'none'; // 隐藏“可以”按钮
    noBtn.style.display = 'none'; // 隐藏“不要”按钮
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount === 1) {
        responseText.textContent = "你确定？";
    } else if (noClickCount === 2) {
        responseText.textContent = "再考虑一下吗？";
    } else {
        responseText.textContent = "不要也得要！贴贴❤️";
        yesBtn.style.display = 'none'; // 隐藏“可以”按钮
        noBtn.style.display = 'none'; // 隐藏“不要”按钮
    }
});