var burgerStatus = false;
var burgerButton = document.getElementById('header-burger-button');
var burgerMenu = document.getElementById('header-menu');

burgerButton.onclick = function() {
	burgerStatus = !burgerStatus;
	burgerMenu.classList.toggle('header-menu-open');
	switch (burgerStatus) {
		case true:
			this.children[0].className = 'fa fa-times el-transition';
			break;
		case false:
			this.children[0].className = 'fa fa-bars el-transition';
			break;
		default:
			console.log('Something went wrong with header menu');
			break;
	}
}