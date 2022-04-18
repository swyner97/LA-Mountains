$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
  variableWidth: true,

  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
});





let mountainBtn1 = document.querySelector('#mountain-1');
let mountainBtn2 = document.querySelector('#mountain-2');

mountainBtn1.addEventListener('click', function () {
  let scheduleList1 = document.querySelector('.schedule-list');
  scheduleList1.innerHTML =
    `
<ul>
<li class="schedule-li">25 Nov 2016</li>
<li class="schedule-li">28 Nov 2016</li>
<li class="schedule-li">18 Dec 2016</li>
<li class="schedule-li">7 Jan 2017</li>
</ul>
<ul>
<li class="schedule-li">Vetibulum viverra</li>
<li class="schedule-li">Vetibulum viverra</li>
<li class="schedule-li">Vetibulum viverra</li>
<li class="schedule-li">Vetibulum viverra</li>

</ul>
`
});

mountainBtn2.addEventListener('click', function () {
  let scheduleList2 = document.querySelector('.schedule-list');
  scheduleList2.innerHTML =
    `
  <ul>
  <li class="schedule-li">17 Nov 2016</li>
  <li class="schedule-li">13 Dec 2016</li>
  <li class="schedule-li">28 Dec 2016</li>
  <li class="schedule-li">9 Feb 2017</li>
</ul>
<ul>
  <li class="schedule-li">Vetibulum viverra</li>
  <li class="schedule-li">Vetibulum viverra</li>
  <li class="schedule-li">Vetibulum viverra</li>
  <li class="schedule-li">Vetibulum viverra</li>

</ul>
  `
})