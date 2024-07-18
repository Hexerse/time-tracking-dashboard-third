data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const buttons = document.querySelectorAll(".user__buttons");

const listeningToButtons = (buttonArray) => {
  buttonArray.forEach((button) => {
    button.addEventListener("click", () => {
      const optionChoice = button.dataset.options;
      console.log(optionChoice);
      renderCards(optionChoice);
    });
  });
};

const dataTimeperiod = data.forEach((data) => {
  const timePeriod = data.timeframes;
});

const renderCards = (optionChoice) => {

  const calcTimevalue = (data) => {
    if (data === "daily") {
      return "Yesterday - ";
    } else if (data === "weekly") {
      return "Last Week - ";
    } else if (data === "monthly") {
      return "Last Month - ";
    }
  };

  const textBeforetime = calcTimevalue(optionChoice);

  data.forEach((activity) => {
    const name = activity.title;
    const nameofActivity = name.replace(" ", "-");
    const dataTimeframes = activity.timeframes;
    const dataTimeframesChoice = activity.timeframes[optionChoice];
    
  const stringToInject = `<section aria-labelledby="dashboard__${nameofActivity}" class="dashboard__card ${nameofActivity}">
        <div class="card__background work">
          <img src="./images/icon-${nameofActivity}.svg" alt="" />
        </div>
        <div class="card__text">
          <div class="card__header">
            <header>
              <p class="card__header__work">${nameofActivity}</p>
              <button class="card__header__button">
                <img src="./images/icon-ellipsis.svg" alt="" />
              </button>
            </header>
            <div class="card__timings">
              <h2 class="card__timings__current">${dataTimeframesChoice.current}</h2>
              <p class="card__timings__previous">${textBeforetime} ${dataTimeframesChoice.previous}hrs</p>
            </div>
          </div>
        </div>
      </section> ` 

    });

};
listeningToButtons(buttons);
