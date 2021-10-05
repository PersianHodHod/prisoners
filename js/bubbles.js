var data = [
  {name: "ایالات متحده آمریکا", rate: 701, population: 2300000},
  {name: "چین", rate: 120, population: 1700000},
  {name: "برزیل", rate: 348, population: 746532},
  {name: "روسیه", rate: 346, population: 499406},
  {name: "هند", rate: 34, population: 466084},
  {name: "تایلند", rate: 531, population: 367993},
  {name: "اندونزی", rate: 99, population: 266584},
  {name: "ترکیه", rate: 324, population: 264842},
  {name: "ایران", rate: 294, population: 240000},
  {name: "فیلیپین", rate: 179, population: 215000},
  {name: "مکزیک", rate: 163, population: 203364},
  {name: "آفریقای جنوبی", rate: 275, population: 163015},
  {name: "ویتنام", rate: 128, population: 123697},
  {name: "کلمبیا", rate: 246, population: 123005},
  {name: "اتیوپی", rate: 127, population: 113727},
  {name: "مصر", rate: 116, population: 106000},
  {name: "آرژانتین", rate: 230, population: 103209},
  {name: "میانمار", rate: 171, population: 92000},
  {name: "پرو", rate: 278, population: 90934},
  {name: "بنگلادش", rate: 52, population: 88211},
  {name: "مراکش", rate: 237, population: 85767},
  {name: "پاکستان", rate: 38, population: 77275},
  {name: "لهستان", rate: 195, population: 74130},
  {name: "مالزی", rate: 230, population: 74000},
  {name: "نیجریه", rate: 36, population: 72627},
  {name: "فرانسه", rate: 105, population: 70818},
  {name: "آلمان", rate: 77, population: 63851},
  {name: "الجزایر", rate: 151, population: 63000},
  {name: "عربستان سعودی", rate: 197, population: 61000},
  {name: "تایوان", rate: 258, population: 60956},
  {name: "ایتالیا", rate: 101, population: 60769},
  {name: "اسپانیا", rate: 124, population: 58457},
  {name: "کوبا", rate: 510, population: 57337},
  {name: "ونزوئلا", rate: 178, population: 57096},
  {name: "اوگاندا", rate: 124, population: 55229},
  {name: "کره جنوبی", rate: 109, population: 55198},
  {name: "اوکراین", rate: 148, population: 52863},
  {name: "کنیا", rate: 102, population: 51130},
  {name: "ژاپن", rate: 39, population: 48802},
  {name: "عراق", rate: 126, population: 45000},
  {name: "ازبکستان", rate: 150, population: 43900},
  {name: "استرالیا", rate: 170, population: 43032},
  {name: "شیلی", rate: 232, population: 42921},
  {name: "اکوادور", rate: 233, population: 40006},
  {name: "کانادا", rate: 107, population: 39579},
  {name: "السالوادور", rate: 590, population: 38114},
  {name: "کامبوج", rate: 220, population: 36600},
  {name: "تانزانیا", rate: 59, population: 35803},
  {name: "بلاروس", rate: 343, population: 32500},
  {name: "افغانستان", rate: 87, population: 30748},
  {name: "کامرون", rate: 124, population: 30701},
  {name: "ترکمنستان", rate: 552, population: 30452},
  {name: "قزاقستان", rate: 156, population: 29081},
  {name: "جمهوری دومینیکن", rate: 237, population: 26045},
  {name: "گواتمالا", rate: 143, population: 25414},
  {name: "ماداگاسکار", rate: 93, population: 24928},
  {name: "آنگولا", rate: 93, population: 24000},
  {name: "نپال", rate: 79, population: 23775},
  {name: "سری لانکا", rate: 105, population: 23355},
  {name: "آذربایجان", rate: 235, population: 23319},
  {name: "زامبیا", rate: 123, population: 22823},
  {name: "تونس", rate: 195, population: 22663},
  {name: "ساحل عاج", rate: 82, population: 21186},
  {name: "جمهوری چک", rate: 197, population: 21048},
  {name: "سودان", rate: 52, population: 21000},
  {name: "نیکاراگوئه", rate: 332, population: 20918},
  {name: "رومانی", rate: 107, population: 20578},
  {name: "جمهوری دموکراتیک کنگو", rate: 29, population: 20550},
  {name: "هندوراس", rate: 229, population: 20506},
  {name: "اردن", rate: 198, population: 20060},
  {name: "موزامبیک", rate: 63, population: 19832},
  {name: "زیمباوه", rate: 114, population: 19382},
  {name: "اسرائیل", rate: 234, population: 19376},
  {name: "کاستاریکا", rate: 374, population: 19226},
  {name: "بولیوی", rate: 158, population: 18195},
  {name: "پاناما", rate: 401, population: 16953},
  {name: "مجارستان", rate: 173, population: 16947},
  {name: "غنا", rate: 52, population: 15463},
  {name: "مالاوی", rate: 76, population: 14778},
  {name: "یمن", rate: 53, population: 14000},
  {name: "پاراگوئه", rate: 199, population: 13607},
  {name: "پرتغال", rate: 125, population: 12789},
  {name: "سنگاپور", rate: 199, population: 11737},
  {name: "سنگال", rate: 68, population: 11547},
  {name: "بلژیک", rate: 95, population: 10883},
  {name: "صربستان", rate: 156, population: 10852},
  {name: "بوروندی", rate: 85, population: 10832},
  {name: "اسلواکی", rate: 195, population: 10665},
  {name: "سوریه", rate: 60, population: 10599},
  {name: "هلند", rate: 61, population: 10464},
  {name: "اوروگوئه", rate: 295, population: 10243},
  {name: "یونان", rate: 95, population: 10216},
  {name: "قرقیزستان", rate: 161, population: 10142},
  {name: "نیوزیلند", rate: 201, population: 9893},
  {name: "امارات متحده عربی", rate: 104, population: 9826},
  {name: "گرجستان", rate: 262, population: 9740},
  {name: "نیجر", rate: 44, population: 9570},
  {name: "تاجیکستان", rate: 121, population: 9317},
  {name: "لیبی", rate: 139, population: 9100},
  {name: "بلغارستان", rate: 125, population: 9028},
  {name: "لائوس", rate: 130, population: 9000},
  {name: "هائیتی", rate: 80, population: 8882},
  {name: "چاد", rate: 59, population: 8700},
  {name: "اتریش", rate: 98, population: 8692},
  {name: "بنین", rate: 68, population: 7890},
  {name: "بورکینافاسو", rate: 39, population: 7812},
  {name: "نامیبیا", rate: 295, population: 7400},
  {name: "سودان جنوبی", rate: 50, population: 7000},
  {name: "لبنان", rate: 144, population: 6966},
  {name: "سوئیس", rate: 81, population: 6943},
  {name: "مولداوی", rate: 194, population: 6855},
  {name: "سوئد", rate: 61, population: 6210},
  {name: "لیتوانی", rate: 221, population: 6138},
  {name: "مالی", rate: 33, population: 5209},
  {name: "توگو", rate: 66, population: 5109},
  {name: "پاپوآ گینه نو", rate: 62, population: 5087},
  {name: "آلبانی", rate: 177, population: 5045},
  {name: "سیرالئون", rate: 60, population: 4732},
  {name: "کویت", rate: 117, population: 4662},
  {name: "گابن", rate: 241, population: 4476},
  {name: "بوتسوانا", rate: 208, population: 4343},
  {name: "ترینیداد و توباگو", rate: 292, population: 3999},
  {name: "جمهوری ایرلند", rate: 79, population: 3950},
  {name: "جامائیکا", rate: 138, population: 3866},
  {name: "گینه", rate: 28, population: 3782},
  {name: "دانمارک", rate: 63, population: 3635},
  {name: "لاتویا", rate: 183, population: 3522},
  {name: "بحرین", rate: 234, population: 3485},
  {name: "اسواتینی", rate: 258, population: 3453},
  {name: "مغولستان", rate: 110, population: 3398},
  {name: "کرواسی", rate: 79, population: 3217},
  {name: "نروژ", rate: 60, population: 3190},
  {name: "فنلاند", rate: 53, population: 2910}
];
var containerWidth = 1230;
var containerHeight = 830;
var diameterRatio = 5000;
var leftRatio = 3000;
var topRatio = 1.25;

if (window.innerWidth < 451) {
  containerWidth = window.innerWidth;
  containerHeight = window.innerHeight * .9;
  diameterRatio = 10000;
  leftRatio = 13500;
  topRatio = 1.5;
}

var bubbles = document.getElementById('bubbles');
var bubblesInner = document.getElementById('bubbles-inner');
var bubbleHeader = document.getElementById('bubble-header');

function scaleBubbles() {
  var heightRatio = window.innerHeight/(containerHeight + 150);
  var widthRatio = window.innerWidth/(containerWidth + 150);
  var smallestRatio = (heightRatio > widthRatio) ? widthRatio : heightRatio;

  if (window.innerHeight < containerHeight || window.innerWidth < containerWidth) {
    bubbles.style.transform = 'scale(' + smallestRatio + ')';
  }
}
scaleBubbles();
window.addEventListener("orientationchange", scaleBubbles);
window.addEventListener("resize", scaleBubbles);
//todo: redraw bubbles when switching from desktop to mobile?

bubbles.style.display = "block";
data.forEach(function(country, i){

  var div = document.createElement("div");

  var innerDiv = document.createElement("div");
  innerDiv.classList = "country-bubble-inner";
  innerDiv.innerHTML = country.name;
  div.appendChild(innerDiv);

  div.classList = 'country-bubble';
  if (country.population < 250000) {
    div.classList.add('country-bubble-small');
  }
  if (country.rate > 400) {
    div.classList.add('country-bubble-high-rate');
  }
  if (country.name === "ایالات متحده آمریکا") {
    div.id = "country-bubble-usa";
    var innerUSA = div.querySelectorAll(".country-bubble-inner");

    var usaRate = document.createElement("div");
    usaRate.id = "usa-bubble-rate";
    usaRate.innerHTML = "رتبه از لحاظ سرانه: ۱";
    innerUSA[0].appendChild(usaRate);

    var usaCount = document.createElement("div");
    usaCount.id = "usa-bubble-count";
    usaCount.innerHTML = "رتبه از لحاظ تعداد: ۱";
    innerUSA[0].appendChild(usaCount);
  }
  div.style.position = 'absolute';

  var diameter = Math.floor(country.population / diameterRatio);
  div.style.left = Math.floor(country.population / leftRatio) + 'px';
  div.style.top = containerHeight - (diameter/2) - Math.floor(country.rate / topRatio) + 'px';
  div.style.width = diameter + 'px';
  div.style.height = diameter + 'px';
  div.style.zIndex = data.length - i;

  if (country.name == 'ژاپن') {
    div.classList.add('ژاپن');
    div.style.zIndex = 1000;
  }

  bubblesInner.appendChild(div);
})

function recalculateUSA(prisoners) {
  var usa = document.getElementById("country-bubble-usa");
  var rate = (prisoners/328000000) * 100000;

  var usaCount = document.getElementById("usa-bubble-count");
  usaCount.innerHTML = "رتبه از لحاظ تعداد: " + getRankPopulation(prisoners);

  var usaRate = document.getElementById("usa-bubble-rate");
  usaRate.innerHTML = "رتبه از لحاظ سرانه: " + getRankRate(rate);

  var diameter = Math.floor(prisoners / diameterRatio);
  usa.style.left = Math.floor(prisoners / leftRatio) + 'px';
  usa.style.top = containerHeight - (diameter/2) - Math.floor(rate / topRatio) + 'px';
  usa.style.width = diameter + 'px';
  usa.style.height = diameter + 'px';
}

function getRankPopulation(population) {
  var rank = 0;
  data.forEach(function(country){
    if (country.population > population) {
      rank++;
    }
  });
  return rank || 1;
}

function getRankRate(rate) {
  var rank = 0;
  data.forEach(function(country){
    if (country.rate > rate) {
      rank++;
    }
  });
  return rank || 1;
}

var usa_prisoners = 2300000;
var checks = document.querySelectorAll('.release');
checks.forEach(function(check) {
  check.addEventListener('change', function(e){
    var change = parseInt(e.target.value);

    if (e.target.checked) {
      usa_prisoners -= change;
    }
    else {
      usa_prisoners += change;
    }
    recalculateUSA(usa_prisoners);
  });
})

var radios = document.querySelectorAll('.release-radio');
radios.forEach(function(radio){
  radio.addEventListener('change', function(e){
    var change = parseInt(e.target.value);
    var sibiling = document.getElementById(e.target.dataset.sibiling);
    sibiling.checked = false;
    usa_prisoners -= change;
    recalculateUSA(usa_prisoners);
  })
})
