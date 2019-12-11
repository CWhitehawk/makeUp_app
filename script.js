const submitQuiz = function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    checkedAnswers();
  });
};
// Adding a comment to practice Git flow

const checkedAnswers = function() {
  const valuesArray = [];
  const values = $("input[type='radio']:checked").map(function(value) {
    valuesArray.push($(this).val());
  });
  console.log(valuesArray);
  const userEyes = valuesArray[0];
  const userHair = valuesArray[1];
  const userMood = valuesArray[2];
  result(userEyes, userHair, userMood);
};

const result = function(eyes, hair, mood) {
  if (eyes === "brown" && hair === "brown" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[0]);
  } else if (eyes === "brown" && hair === "brown" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[1]);
  } else if (eyes === "brown" && hair === "brown" && mood === "neutral") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[2]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[3]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[4]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[5]);
  } else if (eyes === "brown" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[6]);
  } else if (eyes === "brown" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[7]);
  } else if (eyes === "brown" && hair === "black" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[8]);
  } else if (eyes === "blue" && hair === "brown" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[9]);
  } else if (eyes === "blue" && hair === "brown" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[10]);
  } else if (eyes === "blue" && hair === "brown" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[11]);
  } else if (eyes === "blue" && hair === "blonde" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[12]);
  } else if (eyes === "blue" && hair === "blonde" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[13]);
  } else if (eyes === "blue" && hair === "blonde" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[14]);
  } else if (eyes === "blue" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[15]);
  } else if (eyes === "blue" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[16]);
  } else if (eyes === "blue" && hair === "black" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[17]);
  } else if (eyes === "green" && hair === "brown" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[18]);
  } else if (eyes === "green" && hair === "brown" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[19]);
  } else if (eyes === "green" && hair === "brown" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[20]);
  } else if (eyes === "green" && hair === "blonde" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[21]);
  } else if (eyes === "green" && hair === "blonde" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[22]);
  } else if (eyes === "green" && hair === "blonde" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[23]);
  } else if (eyes === "green" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[24]);
  } else if (eyes === "green" && hair === "black" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[25]);
  } else if (eyes === "green" && hair === "black" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[26]);
  }
};

const showResults = function(eyeshadowIndex, lipstickIndex) {
  const htmlToAppend = `
<div class="box">
  <div class="eyeshadow"><h3>Your ideal eyeshadow palette is: ${eyeshadowIndex.name}</h3>
<img src=${eyeshadowIndex.path}/></div>
<div class="lipstick"><h3>Your ideal lipstick colour is: ${lipstickIndex.name}</h3>
<img src=${lipstickIndex.path}/></div>
</div>
`;
  $(".container").html(htmlToAppend);
};
submitQuiz();

// DATA
const makeUp = {
  eyeshadow: [
    {
      path: "./assets/neutralpal1.jpg",
      name: "Neutral Palette"
    },
    {
      path: "./assets/vibrantpal1.jpg",
      name: "Vibrant Palette"
    },
    {
      path: "./assets/darkpal1.jpg",
      name: "Dark Palette"
    }
  ],
  lipstick: [
    {
      path: "./assets/lip1.jpg",
      name: "Shade 1"
    },
    {
      path: "./assets/lip2.jpg",
      name: "Shade 2"
    },
    {
      path: "./assets/lip3.jpg",
      name: "Shade 3"
    },
    {
      path: "./assets/lip4.jpg",
      name: "Shade 4"
    },
    {
      path: "./assets/lip5.jpg",
      name: "Shade 5"
    },
    {
      path: "./assets/lip6.jpg",
      name: "Shade 6"
    },
    {
      path: "./assets/lip7.jpg",
      name: "Shade 7"
    },
    {
      path: "./assets/lip8.jpg",
      name: "Shade 8"
    },
    {
      path: "./assets/lip9.jpg",
      name: "Shade 9"
    },
    {
      path: "./assets/lip10.jpg",
      name: "Shade 10"
    },
    {
      path: "./assets/lip11.jpg",
      name: "Shade 11"
    },
    {
      path: "./assets/lip12.jpg",
      name: "Shade 12"
    },
    {
      path: "./assets/lip13.jpg",
      name: "Shade 13"
    },
    {
      path: "./assets/lip14.jpg",
      name: "Shade 14"
    },
    {
      path: "./assets/lip15.jpg",
      name: "Shade 15"
    },
    {
      path: "./assets/lip16.jpg",
      name: "Shade 16"
    },
    {
      path: "./assets/lip17.jpg",
      name: "Shade 17"
    },
    {
      path: "./assets/lip18.jpg",
      name: "Shade 18"
    },
    {
      path: "./assets/lip19.jpg",
      name: "Shade 19"
    },
    {
      path: "./assets/lip20.jpg",
      name: "Shade 20"
    },
    {
      path: "./assets/lip21.jpg",
      name: "Shade 21"
    },
    {
      path: "./assets/lip22.jpg",
      name: "Shade 22"
    },
    {
      path: "./assets/lip23.jpg",
      name: "Shade 23"
    },
    {
      path: "./assets/lip24.jpg",
      name: "Shade 24"
    },
    {
      path: "./assets/lip25.jpg",
      name: "Shade 25"
    },
    {
      path: "./assets/lip26.jpg",
      name: "Shade 26"
    },
    {
      path: "./assets/lip27.jpg",
      name: "Shade 27"
    }
  ]
};

// `<img src="lip${score}.jpg">`
