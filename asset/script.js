getBirthdayName();

function getBirthdayName() {
  let url = window.location.href;
  let regexName = new RegExp("name" + "(=([^&#]*))");
  let resultsName = regexName.exec(url);
  let regexSeg = new RegExp("seg" + "(=([^&#]*))");
  let resultsSeg = regexSeg.exec(url);

  if (resultsName == null) {
    birthdayName = "";
  } else {
    birthdayName = decodeURIComponent(resultsName[2]);
  }

  if (resultsSeg == null) {
    birthdaySeg = "general";
  } else {
    birthdaySeg = decodeURIComponent(resultsSeg[2]);
  }

  if (birthdaySeg == "fundraisers") {
    document.getElementById("letter").innerHTML =
      "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>Happy birthday my partner " +
      birthdayName +
      "!<br><br> Wishing you a day filled with happiness and a year filled with joy <br>Wishing you a day filled with happiness and a year filled with joy<br></p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'></a></div>";
  } else {
    document.getElementById("letter").innerHTML =
      "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px;'>Happy birthday my partner " +
      birthdayName +
      "!<br><br>i am so grateful to have you as my partner,you're a best partner.hope your birthday is as special as you are,happy birthday enuuunggg.<br><br>Wishing you a day filled with happiness and a year filled with joy.</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'></a></div></div>";
  }
}






anime({
  targets: ".row svg",
  translateY: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate"
});

anime({
  targets: "#zero",
  translateX: 10,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
  scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
  rotateY: { value: "+=180", delay: 200 }
});





document.addEventListener("click", event => {
  bursty(event.pageX, event.pageY);
});

setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { '#ff87ab': '#ffcad4' },
      duration: 2000 } }).

  tune({
    x: x,
    y: y });


  burst.replay();
}

function randomizedConfetti() {
  let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
  let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { '#f20089': "#00b4d8" },
      duration: 2000 } }).

  tune({
    x: randomX,
    y: randomY });


  burst.replay();
}

Splitting();