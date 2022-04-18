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