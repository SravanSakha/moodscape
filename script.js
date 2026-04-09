// Multiple messages per mood
const messages = {
  Happy: [
    "Keep smiling! Happiness looks great on you! 😄",
    "Today is full of joy and laughter! 🌞",
    "Your positivity will attract amazing things! 🌈",
    "Smile, the world smiles with you! 😁"
  ],
  Sad: [
    "It’s okay to feel down; tomorrow is brighter. 🌧️",
    "Take a deep breath and give yourself some love. 💙",
    "Even clouds clear eventually. ☁️",
    "Small steps forward are still progress. 🌿"
  ],
  Excited: [
    "Your energy is contagious! ⚡",
    "Embrace the thrill of new adventures! 🌟",
    "Your excitement will spark creativity! 🎉",
    "Today is the day to shine bright! ✨"
  ],
  Relaxed: [
    "Enjoy the calm and peace around you. 🍃",
    "Breathe slowly and let your mind rest. 🌊",
    "Relaxation fuels clarity and joy. 🌿",
    "A calm mind creates endless possibilities. 🕊️"
  ],
  Angry: [
    "Channel your fire into something positive! 🔥",
    "Take a breath before reacting; strength lies in control. 💪",
    "Turn anger into motivation for change! ⚡",
    "Even storms pass; stay strong and calm. 🌪️"
  ]
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

let currentMood = "";
let lastMessageIndex = -1;

function setMood(mood) {
  currentMood = mood;
  document.body.style.background = bgColors[mood];
  showMessage();
  document.getElementById("newMessage").style.display = "inline-block";

  const bgm = document.getElementById("bgm");
  if (bgmFiles[mood]) {
    bgm.src = bgmFiles[mood];
    bgm.play();
  }
}

function showMessage() {
  const msgs = messages[currentMood];
  let index;
  do {
    index = Math.floor(Math.random() * msgs.length);
  } while (index === lastMessageIndex && msgs.length > 1);

  lastMessageIndex = index;
  document.getElementById("quote").innerText = msgs[index];
}

// Show new random message without changing mood
function newMessage() {
  showMessage();
}
