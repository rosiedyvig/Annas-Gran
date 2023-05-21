$().ready(function () {
  const newGame = function () {
    const solutions = [
      "alice",
      "alaine",
      "alberta",
      "betty",
      "abigail",
      "annie",
      "alexandra",
      "bernadette",
      "olivia",
      "amanda",
      "katie",
      "nancy",
      "adele",
      "mollie",
      "lilly",
      "emily",
      "juliette",
      "catherine",
      "karen",
    ];
    const random = function () {
      return (target = Math.floor(Math.random() * solutions.length));
    };
    let answer = solutions[random()];
    console.log("answer", answer);

    $("h3").after(newP).text(randomWordScramble(answer));

    $("#button").on("click", () => {
      if ($("#useranswer").val() === answer) {
        correctResult();
      } else {
        wrongResult();
        console.log("wrong");
      }
      setTimeout(() => {
        clearResult();
      }, 2000);
    });

    const wrongResult = function () {
      let wrongbanner = $(
        `<p class="remove"> Oh no!! The correct answer was ${answer} </p>`
      );
      $(".result").empty();
      $(".result").append(wrongbanner); //.attr("id", "banner");
    };
  };

  const correctResult = function () {
    let correctbanner = $(`<p class="remove"> Correct!!!</p>`);

    $(".result").empty();
    $(".result").append(correctbanner);
  };

  const clearResult = function () {
    console.log("inside clear result");
    $("#useranswer").val("");
    // $("p#remove").remove();
    // $(".result").html("");
    $(".remove").remove();
    newGame();
  };

  const randomWordScramble = function (answer) {
    return answer
      .split("")
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .join("");
  };

  let newP = $("<p>");

  newGame();
});
