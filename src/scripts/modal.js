(() => {
  'use strict';

  const $modal = $('.modal');
  const duration = 250;

  $('.btn').click(function (e) {
    $modal
      .show(0)
      .animate({
        width: '800px',
        height: '500px'
      }, duration);
  });

  $('.controll__icon--close').click(function (e) {
    $modal
      .animate({
        width: 0,
        height: 0
      }, {
        duration,
        done() {
          $(this).hide();
        }
      });
  });

})();
