function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
};

var home = document.querySelector('#home');
var products = document.querySelector('#products');
var about = document.querySelector('#about');
var indicatorOne = document.querySelector('#indicator1');
var indicatorTwo = document.querySelector('#indicator2');
var indicatorThree = document.querySelector('#indicator3');
var indicatorFour = document.querySelector('#indicator4');

var toHeader = document.querySelector('.header');
var toHome = document.querySelector('.s1');
var toProducts = document.querySelector('.s2');
var toAbout = document.querySelector('.s3');

home.addEventListener('click', () => {
	scrollTo(toHome);
});

products.addEventListener('click', () => {
	scrollTo(toProducts);
});

about.addEventListener('click', () => {
	scrollTo(toAbout);
});

indicatorOne.addEventListener('click', () => {
	scrollTo(toHeader);
});

indicatorTwo.addEventListener('click', () => {
	scrollTo(toHome);
});

indicatorThree.addEventListener('click', () => {
	scrollTo(toProducts);
});

indicatorFour.addEventListener('click', () => {
	scrollTo(toAbout);
});