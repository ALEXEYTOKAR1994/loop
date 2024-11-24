
const menuIcon = document.querySelector('.menu__icon');
if (menuIcon) {
	const menuBody = document.querySelector('.menu__body');
	menuIcon.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		menuIcon.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}
