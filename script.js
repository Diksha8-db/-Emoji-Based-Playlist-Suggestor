let container = document.querySelector(".container");
let happy = document.getElementById("happy");
let sad = document.getElementById("sad");
let chill = document.getElementById("chill");
let focussed = document.getElementById("focussed");
let selectInput = document.getElementById("InputBox");
let searchBtn = document.getElementById("SearchPlaylist");
let searchIcon = document.getElementById("searchIcon");
let bodyElement = document.body;
let bg = document.getElementById('video-bg')
let bgVideo = document.getElementById("video-bg-src");

happy.addEventListener("click", () => {
  selectInput.value = "Happy";
});
sad.addEventListener("click", () => {
  selectInput.value = "sad";
});
chill.addEventListener("click", () => {
  selectInput.value = "chill";
});
focussed.addEventListener("click", () => {
  selectInput.value = "focussed";
});

searchBtn.addEventListener("click", playlist);
searchIcon.addEventListener("click", playlist);

let body = document.body;
let contentDiv = document.querySelector(".contentContainer");
let thought = document.getElementById("thought");
let backgroundAudio = document.getElementById("backgroundAudio");
let head = document.getElementById("head");
let Playlist = document.getElementById("playlist");

function playlist() {
  container.style.display = "none";
  

  if (selectInput.value == "Happy") {

    $(contentDiv).fadeIn(5000);
    body.classList.add("all");
    thought.innerText =
      '"To be kind to all, to like many and love a few, to be needed and wanted by those we love, is certainly the nearest we can come to happiness."';
    backgroundAudio.src = "./assets/Audio/happy.mp3";
    backgroundAudio.load();
    backgroundAudio.play();
    head.innerText = "😊 Enjoy your day with this songs 😊";
    head.classList.add("happyH2", "pacifico-regular");
    
    bg.style.display = 'block';
    bgVideo.src = "./assets/BackgroundVideo/happyBg.mp4"
    bg.load()
    bg.play()

    let happySongs = [
      "Tumse Hi Tumse",
      "Slow Motion Angreza",
      "Kabhi Kabhi Aditi",
      "Let the music play",
      "Let's Nacho",
    ];

    let hrefs = [
      "https://www.youtube.com/watch?v=KWCLOpaZeLc",
      "https://www.youtube.com/watch?v=60vIVA5AZ9M",
      "https://www.youtube.com/watch?v=HIbzXaBdwZw",
      "https://www.youtube.com/watch?v=HIbzXaBdwZw",
      "https://www.youtube.com/watch?v=TLnwqAarPkM",
    ];

    for (let i = 0; i < 5; i++) {
      document.getElementById(
        `song${i + 1}`
      ).innerHTML = `<p> ${happySongs[i]}</p><button>Play</button>`;
      document.getElementById(`song${i + 1}`).href = hrefs[i];
    }

  }

  if (selectInput.value == "sad") {
    $(contentDiv).slideDown(5000);
    body.classList.add("all")
    thought.innerText =
      '"The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change. The challenge of life is to overcome. The essence of life is to care. The opportunity of like is to serve. The secret of life is to dare. The spice of life is to befriend. The beauty of life is to give."';
    thought.classList.add("sadHeading");
    backgroundAudio.src = "./assets/Audio/sad.mp3";
    backgroundAudio.load();
    backgroundAudio.play();
    head.innerText = "🤞 Don't worry..Everything will be fine 🤞";
    head.classList.add("sadH2");

    let happySongs = [
      "Kar har maidan fateh",
      "Ziddi Dil",
      "Shabashiyaan",
      "Namo Namo ",
      "Bandeya Rey Bandeya",
    ];

    let hrefs = [
      "https://www.youtube.com/watch?v=9iIX4PBplAY",
      "https://www.youtube.com/watch?v=puKD3nkB1h4",
      "https://www.youtube.com/watch?v=Q3JMD4oaXlI",
      "https://www.youtube.com/watch?v=dx4Teh-nv3A",
      "https://www.youtube.com/watch?v=Wj8C_bpnkTY",
    ];

    bg.style.display = 'block';
    bgVideo.src = "./assets/BackgroundVideo/sadBg.mp4"
    bg.load()
    bg.play()

    for (let i = 0; i < 5; i++) {
      document.getElementById(
        `song${i + 1}`
      ).innerHTML = `<p> ${happySongs[i]}</p><button id="playBtn1">Play</button>`;
      document.getElementById(`song${i + 1}`).href = hrefs[i];
    }
  }

  if (selectInput.value == "chill") {
    $(contentDiv).fadeTo(5000,0.9);
    body.classList.add("all");
    thought.innerText =
      '“There’s nothing more relaxing than genuine laughter with friends.”';
      thought.classList.add("chillheading");
    backgroundAudio.src = "./assets/Audio/chill.mp3";
    backgroundAudio.load();
    backgroundAudio.play();
    head.innerText = "😎 It's time for party!! 😎";
    head.classList.add("chillH2");
    

    let happySongs = [
      "Abhi toh party suru huyi hai",
      "Batameez dil",
      "Matarghasti",
      "Senorita",
      "Believer",
    ];

    bg.style.display = 'block';
    bgVideo.src = "./assets/BackgroundVideo/chillBg.mp4"
    bg.load()
    bg.play()

    let hrefs = [
      "https://www.youtube.com/watch?v=8LZgzAZ2lpQ",
      "https://www.youtube.com/watch?v=II2EO3Nw4m0",
      "https://www.youtube.com/watch?v=6vKucgAeF_Q",
      "https://www.youtube.com/watch?v=2Z0Put0teCM",
      "https://www.youtube.com/watch?v=W0DM5lcj6mw",
    ];

    for (let i = 0; i < 5; i++) {
      document.getElementById(
        `song${i + 1}`
      ).innerHTML = `<p> ${happySongs[i]}</p><button id="playBtn1">Play</button>`;
      document.getElementById(`song${i + 1}`).href = hrefs[i];
    }
  }

  if (selectInput.value == "focussed") {
    contentDiv.style.display = "block";
    $(contentDiv).addClass("animateLeft");

    contentDiv.style.backgroundColor = "#008B8B";
    body.classList.add("all");
    thought.innerText =
      'Focus comes a lot more easily when you desperately want the results of your own work – nobody else is going to do it for you.”';
      thought.classList.add("focussedHeading");
    backgroundAudio.src = "./assets/Audio/focussed.mp3";
    backgroundAudio.load();
    backgroundAudio.play();
    head.innerText = "It's your turn to rule the world";
    head.classList.add("focussedH2");

    let happySongs = [
      "Tibetian Bowl Sound",
      "OM Mantra",
      "The Sound of Inner Peace",
      "Focus Music for Study",
      "Work Music",
    ];
    
    bg.style.display = 'block';
    bgVideo.src = "./assets/BackgroundVideo/focussedBg.mp4"
    bg.load()
    bg.play()

    let hrefs = [
      "https://www.youtube.com/watch?v=0-g1zPWQPHk",
      "https://www.youtube.com/watch?v=ijfLsKg8jFY",
      "https://www.youtube.com/watch?v=FTqrQsSIKR0",
      "https://www.youtube.com/watch?v=_4kHxtiuML0&t=2s",
      "https://www.youtube.com/watch?v=j8L6IvuYGOQ",
    ];

    for (let i = 0; i < happySongs.length; i++) {
      document.getElementById(
        `song${i + 1}`
      ).innerHTML = `<p> ${happySongs[i]}</p><button id="playBtn1">Play</button>`;
      document.getElementById(`song${i + 1}`).href = hrefs[i];
    }
  }
}
