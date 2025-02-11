/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play/ pause/ seek
 * 4. CD rotate
 * 5. Next/ prev
 * 6. Random
 * 7. Next/ repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const data = [
  {
    name: "song 1",
    singer: "Singer 1",
    path: "./assets/s1.mp3",
    image: "./assets/s1.jpg",
  },
  {
    name: "song 2",
    singer: "Singer 2",
    path: "./assets/s2.mp3",
    image: "./assets/s2.jpg",
  },
  {
    name: "song 3",
    singer: "Singer 3",
    path: "./assets/s3.mp3",
    image: "./assets/s3.jpg",
  },
  {
    name: "song 4",
    singer: "Singer 4",
    path: "./assets/s4.mp3",
    image: "./assets/s4.jpg",
  },
  {
    name: "song 5",
    singer: "Singer 5",
    path: "./assets/s5.mp3",
    image: "./assets/s5.jpg",
  },
  {
    name: "song 6",
    singer: "Singer 6",
    path: "./assets/s1.mp3",
    image: "./assets/s1.jpg",
  },
  {
    name: "song 7",
    singer: "Singer 7",
    path: "./assets/s2.mp3",
    image: "./assets/s2.jpg",
  },
  {
    name: "song 8",
    singer: "Singer 8",
    path: "./assets/s3.mp3",
    image: "./assets/s3.jpg",
  },
  {
    name: "song 9",
    singer: "Singer 9",
    path: "./assets/s4.mp3",
    image: "./assets/s4.jpg",
  },
  {
    name: "song 10",
    singer: "Singer 10",
    path: "./assets/s5.mp3",
    image: "./assets/s5.jpg",
  },
];

// tao 1 object de code duoc gon hon
const app = {
  currentIndex: 0,
  songs: [
    {
      name: "song 1",
      singer: "Singer 1",
      path: "./assets/s1.mp3",
      image: "./assets/s1.jpg",
    },
    {
      name: "song 2",
      singer: "Singer 2",
      path: "./assets/s2.mp3",
      image: "./assets/s2.jpg",
    },
    {
      name: "song 3",
      singer: "Singer 3",
      path: "./assets/s3.mp3",
      image: "./assets/s3.jpg",
    },
    {
      name: "song 4",
      singer: "Singer 4",
      path: "./assets/s4.mp3",
      image: "./assets/s4.jpg",
    },
    {
      name: "song 5",
      singer: "Singer 5",
      path: "./assets/s5.mp3",
      image: "./assets/s5.jpg",
    },
    {
      name: "song 6",
      singer: "Singer 6",
      path: "./assets/s1.mp3",
      image: "./assets/s1.jpg",
    },
    {
      name: "song 7",
      singer: "Singer 7",
      path: "./assets/s2.mp3",
      image: "./assets/s2.jpg",
    },
    {
      name: "song 8",
      singer: "Singer 8",
      path: "./assets/s3.mp3",
      image: "./assets/s3.jpg",
    },
    {
      name: "song 9",
      singer: "Singer 9",
      path: "./assets/s4.mp3",
      image: "./assets/s4.jpg",
    },
    {
      name: "song 10",
      singer: "Singer 10",
      path: "./assets/s5.mp3",
      image: "./assets/s5.jpg",
    },
  ],
  render: function () {
    $(".playlist").innerHTML = "";

    this.songs.map((song, index) => {
      // Create the main song div
      const songDiv = document.createElement("div");
      songDiv.classList.add("song");
      index === this.currentIndex ? songDiv.classList.add("active") : null;

      // Create the img element
      const img = document.createElement("img");
      img.src = song.image;
      img.classList.add("song-img");
      img.alt = "";

      // Create the song information div
      const songInfoDiv = document.createElement("div");
      songInfoDiv.classList.add("song-infor");

      // Create the song name div
      const songNameDiv = document.createElement("div");
      songNameDiv.classList.add("song-name");
      songNameDiv.textContent = song.name;

      // Create the singer div
      const singerDiv = document.createElement("div");
      singerDiv.classList.add("singer");
      singerDiv.textContent = song.singer;

      // Append song name and singer divs to the song information div
      songInfoDiv.appendChild(songNameDiv);
      songInfoDiv.appendChild(singerDiv);

      // Create the more button icon
      const moreBtn = document.createElement("i");
      moreBtn.classList.add("fa-solid", "fa-ellipsis", "more-btn");

      // Append the img, song information div, and more button icon to the main song div
      songDiv.appendChild(img);
      songDiv.appendChild(songInfoDiv);
      songDiv.appendChild(moreBtn);

      // Append the main song div to the body (or any other container)
      $(".playlist").appendChild(songDiv);
    });
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const dish = $("#dish");
    const dishWidth = dish.offsetWidth; // chieu ngang cua hinh
    const playBtn = $("#play");
    const replayBtn = $("#replay");
    const prevBtn = $("#previous");
    const nextBtn = $("#next");
    const mixBtn = $("#mix");
    const audio = $("#audio");
    const progressBar = $("#progress");
    const playlist = $(".playlist");

    // scroll event => thu nho hinh lai
    document.onscroll = function () {
      //   console.log(window.scrollY); // 2 cach deu duoc
      //   console.log(document.documentElement.scrollTop);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newDishWidth = dishWidth - scrollTop;
      // gan chieu dai cho dish lai
      dish.style.height = newDishWidth > 0 ? newDishWidth + "px" : 0;
      dish.style.width = newDishWidth > 0 ? newDishWidth + "px" : 0;
      // chinh phan mo dan
      dish.style.opacity = newDishWidth / dishWidth;
    };

    // xu ly dish quay va dung
    const dishAnimate = dish.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 10000, // 10 secs
        iterations: Infinity,
      }
    );
    dishAnimate.pause();

    // xu ly khi click play
    playBtn.onclick = function () {
      if (playBtn.children[1].classList.contains("hide")) {
        // play
        audio.play();
      } else {
        // pause
        audio.pause();
      }
    };

    audio.onplay = function () {
      playBtn.children[1].classList.remove("hide");
      playBtn.children[0].classList.add("hide");
      // quay dia
      dishAnimate.play();
    };

    audio.onpause = function () {
      playBtn.children[0].classList.remove("hide");
      playBtn.children[1].classList.add("hide");
      // dung dia
      dishAnimate.pause();
    };

    // xu ly next - previous
    nextBtn.onclick = function () {
      // xoa active cho tab cu
      $$(".song")[_this.currentIndex].classList.remove("active");
      // gan lai gia tri cho cac index
      _this.currentIndex =
        _this.currentIndex === _this.songs.length - 1
          ? 0
          : _this.currentIndex + 1;
      _this.loadCurrentSong();
    };
    prevBtn.onclick = function () {
      // xoa active cho tab cu
      $$(".song")[_this.currentIndex].classList.remove("active");
      // gan lai gia tri cho cac index
      _this.currentIndex =
        _this.currentIndex === 0
          ? _this.songs.length - 1
          : _this.currentIndex - 1;
      _this.loadCurrentSong();
    };

    // xu ly progress bar
    audio.ontimeupdate = function () {
      const currentTime = audio.currentTime; // in sec
      const duration = audio.duration; // in sec - full time of music
      const progressPercent = (currentTime / duration) * 100;
      progressBar.value = progressPercent;
      // neu la 100% thi doi thanh nut play
      if (progressBar.value == 100) {
        playBtn.children[0].classList.remove("hide");
        playBtn.children[1].classList.add("hide");
        if (!replayBtn.classList.contains("active")) {
          nextBtn.click();
        }
      }
    };

    // tua bai hat
    progressBar.onclick = function (e) {
      const duration = audio.duration; // in sec - full time of music
      audio.currentTime = (e.target.value * 100) / duration;
    };

    // random bai hat: khi bam => random ra list moi voi bai dang phat la vi tri 0
    mixBtn.onclick = function () {
      // kiem tra xem co mix chua
      if (!mixBtn.classList.contains("active")) {
        let shuffledArray = [..._this.songs]; // Create a copy of the original array
        shuffledArray.splice(_this.currentIndex, 1);
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        // xep lai bai dang phat len vi tri dau
        shuffledArray.unshift(_this.songs[_this.currentIndex]);
        // gan lai gia tri cho songs
        _this.songs = [...shuffledArray];
        _this.currentIndex = 0;
        _this.render();
        // doi mau cho nut active
        mixBtn.classList.add("active");
      } else {
        // tat mix
        // gan lai gia tri cho songs
        _this.songs = [...data];
        _this.currentIndex = _this.songs.indexOf(
          _this.songs.filter((s) => s.name === $("#song-name h2").innerText)[0]
        );
        _this.render();
        // doi mau cho nut active
        mixBtn.classList.remove("active");
      }
      // chay den vi tri bai hat hien tai
      _this.scrollToCurrentSong();
    };

    // lap lai bai hat
    replayBtn.onclick = function () {
      if (replayBtn.classList.contains("active")) {
        // tat replay => tu dong next khi het bai
        replayBtn.classList.remove("active");
        audio.loop = false;
      } else {
        // bat replay 1 bai khi ket thuc
        replayBtn.classList.add("active");
        audio.loop = true;
      }
    };

    // click vao bai hat => chuyen bai (ngoai le: neu click vao ... + song da active)
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode && !e.target.closest(".more-btn")) {
        $(".song.active").classList.remove("active");
        _this.currentIndex = _this.songs.indexOf(
          _this.songs.filter(
            (s) => s.name === songNode.querySelector(".song-name").innerText
          )[0]
        );
        _this.loadCurrentSong();
      }
    };
  },
  loadCurrentSong: function () {
    const songName = $("#song-name h2");
    const songImage = $("#dish");
    const audio = $("#audio");
    const playBtn = $("#play");

    songName.textContent = this.currentSong.name;
    songImage.src = this.currentSong.image;
    audio.src = this.currentSong.path;
    document.getElementById("audio").play();
    playBtn.children[1].classList.remove("hide");
    playBtn.children[0].classList.add("hide");
    // doi mau cho current item active trong playlist
    $$(".song")[this.currentIndex].classList.add("active");
    // chay den vi tri bai hat hien tai
    this.scrollToCurrentSong();
  },
  scrollToCurrentSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);
  },

  start: function () {
    // dinh nghia cac thuoc tinh cho object
    this.defineProperties();
    // lang nghe cac su kien
    this.handleEvents();
    // hien thi playlist
    this.render();
    // tai thong tin bai hat
    this.loadCurrentSong();
  },
};

// Render bai hat --------------------------------------------

app.start();
