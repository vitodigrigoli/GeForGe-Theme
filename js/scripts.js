/* Dark Mode */
const dark_icon = document.getElementById('dark-mode-icon')

dark_icon.addEventListener('click', () =>{
	console.log('click')
	const section = document.getElementsByClassName('dark-mode--change')

	for( let i=0; i < section.length; i++) {
		section[i].classList.toggle('dark-mode')
	}
})

const scroll = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true
})

scroll.on('call', func => {

	const section = document.getElementsByClassName('panel')[0].classList.toggle(func)

});