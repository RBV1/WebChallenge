(function sliderTitle(argument) {
	var left = document.getElementsByClassName('pointer-left')[0];
	var right = document.getElementsByClassName('pointer-right')[0];
	var slides = document.getElementsByClassName('slide');

	var count = 0;
	left.addEventListener('click', function (e) {
		hendler(-1);
	});
	right.addEventListener('click', function (e) {
		hendler(1);
	});
	

	function hendler (side) {

		slides[count].classList.remove('slide-show');

		if (count == 0 && side < 0) {
			count = slides.length;
		}
		else if (count == slides.length - 1 && side > 0) { 
			count = 0;
			side = 0;
		}

		count += side;
		slides[count].classList.add('slide-show');
	}
})()