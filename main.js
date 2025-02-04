feather.replace();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
	const header = document.querySelector('.main-header');
	const currentScroll = window.pageYOffset;
	
	if (currentScroll <= 0) {
		header.style.transform = 'translateY(0)';
		return;
	}
	
	if (currentScroll > lastScroll) {
		header.style.transform = 'translateY(-100%)';
	} else {
		header.style.transform = 'translateY(0)';
	}
	lastScroll = currentScroll;
});