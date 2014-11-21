/* global $, Strip */

(function () {

$('#gallery-cooking-projects').on('click', function () {
  Strip.show([
    {
      url: "https://c2.staticflickr.com/8/7501/15168369784_746f4bdccd.jpg",
      caption: "IHC"
    },
    {
      url: "https://c2.staticflickr.com/6/5603/15167569384_4718386711.jpg",
      caption: "table and chairs"
    }
  ]);
});

$('#gallery-backyard-play').on('click', function () {
  Strip.show([
    {
      url: "https://c2.staticflickr.com/8/7535/15170130523_84d8c866ee.jpg",
      caption: "Autumn's language / Le langage de l'automne"
    },
    {
      url: "https://c2.staticflickr.com/6/5611/15168342233_4afb5dba5b.jpg",
      caption: "_MG_2362-dualiso-dualiso"
    },
    {
      url: "https://c1.staticflickr.com/9/8665/15601938637_024dc47cb7.jpg",
      caption: "winter is coming"
    }
  ]);
});

}());
