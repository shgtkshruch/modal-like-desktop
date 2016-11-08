(() => {
  'use strict';

  const $modal = $('.modal');
  const duration = 250;

  $('.btn').click(function (e) {
    $modal
      .show(0)
      .animate({
        width: '80vw',
        height: '80vh'
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
