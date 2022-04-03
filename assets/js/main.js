document.querySelectorAll('.card--ratingState__number').forEach((item) => {
  item.addEventListener('click', (event) => {
    const value = item.innerText;
    console.log(value);
    document
      .querySelectorAll('.card--ratingState__number')
      .forEach((item) =>
        item.classList.remove('card--ratingState__number--focused')
      );
    switch (value) {
      case '1':
        document
          .querySelector('.one')
          .classList.add('card--ratingState__number--focused');
        break;
      case '2':
        document
          .querySelector('.two')
          .classList.add('card--ratingState__number--focused');
        break;
      case '3':
        document
          .querySelector('.three')
          .classList.add('card--ratingState__number--focused');
        break;
      case '4':
        document
          .querySelector('.four')
          .classList.add('card--ratingState__number--focused');
        break;
      case '5':
        document
          .querySelector('.five')
          .classList.add('card--ratingState__number--focused');
        break;
    }
  });
});

document
  .querySelector('.card--ratingState__submitButton')
  .addEventListener('click', submit);

function submit() {
  const ratingScore = document.querySelector(
    '.card--ratingState__number--focused'
  ).innerText;
  console.log(parseInt(ratingScore));
  document.querySelector('.visible').classList.add('none');
  document.querySelector('.card--thankYouState').classList.add('visible');
  document.querySelector('.card--thankYouState__rating--number').innerText =
    ratingScore;
  document
    .querySelector('.card--ratingState__submitButton')
    .classList.add('none');
}
//Home: Change Div visibility by using class .hidden and .visible on a submittal event listener//
