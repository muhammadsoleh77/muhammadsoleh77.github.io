$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $("#indoData").click(function () {
    window.open("http://indo-data.id");
  });

  $("#imezi").click(function () {
    window.open("https://imezi.com");
  });

  $("#bumel").click(function () {
    window.open("http://po.bisku.id");
  });

  $("#brids").click(function () {
    window.open("https://eform.brights.co.id");
  });

  $("#rmtools").click(function () {
    window.open("https://rmtools.bankmandiri.co.id");
  });

  $("#mass").click(function () {
    window.open("https://mass.bankmandiri.co.id");
  });
});
