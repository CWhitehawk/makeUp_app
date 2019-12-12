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
  } else if (eyes === "brown" && hair === "brown" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[2]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[3]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[4]);
  } else if (eyes === "brown" && hair === "blonde" && mood === "dark") {
    showResults(makeUp.eyeshadow[2], makeUp.lipstick[5]);
  } else if (eyes === "brown" && hair === "black" && mood === "neutral") {
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[6]);
  } else if (eyes === "brown" && hair === "black" && mood === "vibrant") {
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
  } else if (eyes === "blue" && hair === "black" && mood === "vibrant") {
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
  <div class="eyeshadow">
  <h3>Your ideal eyeshadow palette is: 
  <p>${eyeshadowIndex.name}</p></h3>
<img src=${eyeshadowIndex.path}/>
</div>
<div class="lipstick">
<h3>Your ideal lipstick colour is: 
<p>${lipstickIndex.name}</p></h3>
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
      name: "Neutral Colours"
    },
    {
      path: "./assets/vibrantpal1.jpg",
      name: "Vibrant Colors"
    },
    {
      path: "./assets/darkpal1.jpg",
      name: "Dark Colours"
    }
  ],
  lipstick: [
    {
      path: "./assets/lip1.jpg",
      name: "Bloom 2 Bloom"
    },
    {
      path: "./assets/lip2.jpg",
      name: "Slow Dance"
    },
    {
      path: "./assets/lip3.jpg",
      name: "Oasis"
    },
    {
      path: "./assets/lip4.jpg",
      name: "La Lady"
    },
    {
      path: "./assets/lip5.jpg",
      name: "On Display"
    },
    {
      path: "./assets/lip6.jpg",
      name: "What If"
    },
    {
      path: "./assets/lip7.jpg",
      name: "Uno Mas"
    },
    {
      path: "./assets/lip8.jpg",
      name: "21 Questions"
    },
    {
      path: "./assets/lip9.jpg",
      name: "27"
    },
    {
      path: "./assets/lip10.jpg",
      name: "Still Crazy"
    },
    {
      path: "./assets/lip11.jpg",
      name: "Money Moves"
    },
    {
      path: "./assets/lip12.jpg",
      name: "Foolish"
    },
    {
      path: "./assets/lip13.jpg",
      name: "Virgo Moon"
    },
    {
      path: "./assets/lip14.jpg",
      name: "Tiana"
    },
    {
      path: "./assets/lip15.jpg",
      name: "Gallop"
    },
    {
      path: "./assets/lip16.jpg",
      name: "C'mon Sis"
    },
    {
      path: "./assets/lip17.jpg",
      name: "Scorpio Moon"
    },
    {
      path: "./assets/lip18.jpg",
      name: "C'mon Clover"
    },
    {
      path: "./assets/lip19.jpg",
      name: "Pinkies"
    },
    {
      path: "./assets/lip20.jpg",
      name: "Alchemist"
    },
    {
      path: "./assets/lip21.jpg",
      name: "Quickie"
    },
    {
      path: "./assets/lip22.jpg",
      name: "Love"
    },
    {
      path: "./assets/lip23.jpg",
      name: "Third Eye"
    },
    {
      path: "./assets/lip24.jpg",
      name: "Hello Stranger"
    },
    {
      path: "./assets/lip25.jpg",
      name: "Lay Over"
    },
    {
      path: "./assets/lip26.jpg",
      name: "Creme Fresh"
    },
    {
      path: "./assets/lip27.jpg",
      name: "Appy"
    }
  ]
};

// `<img src="lip${score}.jpg">`
