const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const joinButton = document.querySelector('.join');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	joinButton.classList.toggle('openJoin');
});