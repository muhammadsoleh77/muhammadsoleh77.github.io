$(document).ready(function () {

	$('#menu').click(function () {
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	})

	$('#indoData').click(function () {
		window.open('http://indo-data.id')
	})

	$('#imezi').click(function () {
		window.open('https://imezi.com')
	})

	$('#bumel').click(function () {
		window.open('http://po.bisku.id')
	})

})