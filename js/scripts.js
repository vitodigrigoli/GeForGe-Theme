/* Dark Mode */
const dark_icon = document.getElementById('dark-mode-icon')

dark_icon.addEventListener('click', () =>{
	document.getElementsByTagName('body')[0].classList.toggle('dark-mode')
})

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true,
	smartphone: {
		smooth: true
	},
	tablet: {
		smooth: true
	},
	multiplier: 1.3,
	lerp: 0.1
})

scroll.on('call', func => {

	document.getElementsByTagName('body')[0].classList.toggle(func)

});