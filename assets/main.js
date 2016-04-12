var toggleCartVisbility = function() {
  $('.js-cart').toggleClass('is-visible');
};

$('.js-cartToggle').on('click', function(e) {
  e.preventDefault();
  toggleCartVisbility();
});
