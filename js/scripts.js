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
	}
})

scroll.on('call', func => {

	if(func === "bg-green")
		document.getElementsByTagName('body')[0].classList.toggle("bg-green")

	if(func === "bg-blue")
		document.getElementsByTagName('body')[0].classList.toggle("bg-blue")

	if(func === "bg-yellow")
		document.getElementsByTagName('body')[0].classList.toggle("bg-yellow")

});