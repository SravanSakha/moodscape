const quotes = {
  Happy: "Keep smiling! Happiness looks good on you! 😄",
  Sad: "This too shall pass. Take a deep breath. 🌧️",
  Excited: "Your energy is contagious! Keep shining! ⚡",
  Relaxed: "Peace and calm surround you. Enjoy the moment. 🍃",
  Angry: "Channel that energy into something productive! 🔥"
};

const bgColors = {
  Happy: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
  Sad: "linear-gradient(45deg, #667eea, #764ba2)",
  Excited: "linear-gradient(45deg, #f6d365, #fda085)",
  Relaxed: "linear-gradient(45deg, #a1c4fd, #c2e9fb)",
  Angry: "linear-gradient(45deg, #f85032, #e73827)"
};

const bgmFiles = {
  Happy: "assets/happy.mp3",
  Sad: "assets/sad.mp3",
  Excited: "assets/excited.mp3",
  Relaxed: "assets/relaxed.mp3",
  Angry: "assets/angry.mp3"
};

function setMood(mood) {
  document.body.style.background = bgColors[mood];
  document.getElementById("quote").innerText = quotes[mood];

  const bgm = document.getElementById("bgm");
  bgm.src = bgmFiles[mood];
  bgm.play();
}
