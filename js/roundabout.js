(function roundabout(argument) {
	var container = document.getElementsByClassName('project')[0];
	var image = document.getElementsByClassName('descriptionProject');
	var left = document.getElementsByClassName('pointer-left-roundabout')[0];
	var right = document.getElementsByClassName('pointer-right-roundabout')[0];
	var left2 = document.getElementsByClassName('arrow-left');
	var right2 = document.getElementsByClassName('arrow-right');
	for (var i = left2.length - 1; i >= 0; i--) {
		left2[i].addEventListener('click', function (e) {
			spin(-1);
		})
		right2[i].addEventListener('click', function (e) {
			spin(1);
		})
	}
	left.addEventListener('click', function (e) {
		spin(-1);
	})
	right.addEventListener('click', function (e) {
		spin(1);
	})

	function spin (side) {
		var length = image[0].offsetWidth;
		var min = -length * (image.length - 4);
		var style = container.currentStyle || window.getComputedStyle(container);
		var present = parseInt(style.marginLeft);
		present = Math.ceil(present / length) * length ;
		if (present > min && present <= 0 && side < 0)
			container.style.marginLeft = present + side * length + 'px';
		else if (present < 0 && side > 0) 
			container.style.marginLeft = present + side * length + 'px';
	}
})()