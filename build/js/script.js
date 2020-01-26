let zodiac = document.querySelectorAll('.select input');
let photoName = document.querySelector('.pendant__about h3');
let orderName = document.querySelector('.order__sign p');
let backImg = document.querySelector('.pendant img:first-of-type');
let frontImg = document.querySelector('.pendant img:last-of-type');

let zodiacList = {
  aries: 'Овен',
  taurus: 'Телец',
  gemini: 'Близнецы',
  cancer: 'Рак',
  leo: 'Лев',
  virgo: 'Дева',
  libra: 'Весы',
  scorpio: 'Скорпион',
  sagittarius: 'Стрелец',
  capricorn: 'Козерог',
  aquarius: 'Водолей',
  pisces: 'Рыбы'
};

zodiac.forEach(function (item) {
    item.addEventListener('change', function () {
        photoName.textContent = zodiacList[item.value];
        orderName.textContent = zodiacList[item.value];
        backImg.src = `img/zodiac-${item.value}.png`;
        backImg.srcset = `img/zodiac-${item.value}@2x.png`;
        frontImg.src = `img/${item.value}.png`;
        frontImg.srcset = `img/${item.value}@2x.png`;
      }
    );
  }
);
