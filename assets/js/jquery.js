jQuery(document).ready(function($) {
  var owl = $(".karosel");
    owl.owlCarousel({  
      pagination: true,
      autoPlay: 5000,
      items: 2,
      itemsDesktop: [1000, 2],
      itemsTablet: [600, 1],
      itemsMobile: false
  });
});

