const keyList = [
  {
    id: 1,
    key: "65",
    char: "A",
    soundName: "CLAP",
    src: "sounds/clap.wav"
  },
  {
    id: 2,
    key: "83",
    char: "S",
    soundName: "HIHAT",
    src: "sounds/hihat.wav"
  },
  {
    id: 3,
    key: "68",
    char: "D",
    soundName: "KICK",
    src: "sounds/kick.wav"
  },
  {
    id: 4,
    key: "70",
    char: "F",
    soundName: "OPENHAT",
    src: "sounds/openhat.wav"
  },
  {
    id: 5,
    key: "71",
    char: "G",
    soundName: "BOOM",
    src: "sounds/boom.wav"
  },
  {
    id: 6,
    key: "72",
    char: "H",
    soundName: "RIDE",
    src: "sounds/ride.wav"
  },
  {
    id: 7,
    key: "74",
    char: "J",
    soundName: "SNARE",
    src: "sounds/snare.wav"
  },
  {
    id: 8,
    key: "75",
    char: "K",
    soundName: "TOM",
    src: "sounds/tom.wav"
  },
  {
    id: 9,
    key: "76",
    char: "L",
    soundName: "TINK",
    src: "sounds/tink.wav"
  }
];

(function() {
  const parent = document.createElement("div");
  const keys = document.createElement("div");
  
  parent.classList.add('contents');
  keys.classList.add('keys');

  keyList.forEach((key) => {
    let keyItem = `<div data-key="${key.key}" class="key">
      <kbd>${key.char}</kbd>
      <span class="sound">${key.soundName}</span>
    </div>`;
    keys.innerHTML += keyItem;

    let audioItem = `<audio data-key="${key.key}" src="${key.src}"></audio>`;
    parent.innerHTML += audioItem;
  });

  parent.prepend(keys);
  document.body.prepend(parent);
})();

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  e.target.classList.remove("playing");
}

function playSound(e) {
  let keyCode = e.keyCode;
  let key = document.querySelector(`.key[data-key="${keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;

  key && key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.map((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
