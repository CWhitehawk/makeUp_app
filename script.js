const submitQuiz = function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    checkedAnswers();
  });
};

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
    showResults(makeUp.eyeshadow[0], makeUp.lipstick[5]);
  } else if (eyes === "brown" && hair === "brown" && mood === "vibrant") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[4]);
  } else if (eyes === "brown" && hair === "brown" && mood === "dark") {
    showResults(makeUp.eyeshadow[1], makeUp.lipstick[4]);
  }
};

const showResults = function(eyeshadowIndex, lipstickIndex) {
  const htmlToAppend = `
<p>Your ideal color pallet based on your selection is:</p>
<p>Your eyeshadow palette is: ${eyeshadowIndex}</p>
<p>Your lipstick colour is: ${lipstickIndex}</p>
`;
  $(".container").html(htmlToAppend);
};
submitQuiz();

// DATA
const makeUp = {
  eyeshadow: ["neutral", "vibrant", "dark"],
  lipstick: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
  ]
};
