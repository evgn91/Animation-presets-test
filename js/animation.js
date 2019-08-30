let durationSlider = document.getElementById('anim-duration-slider');
let animDuration = Number(durationSlider.value) * 1000;
let fadeDuration = 1000;
//let previewProgressBarFill = document.getElementById('preview-progress-bar-fill');
let preview900 = document.getElementById('preview-1440-900');
let preview720 = document.getElementById('preview-1280-720');
let preview600 = document.getElementById('preview-800-600');
let preview480 = document.getElementById('preview-640-480');

let animRemoveTimeout;
let animCycleTimeout;

let alert_1;
let alert_2;
let alert_3;

function renderPreview(parentContainer){

	let appearanceContainer = document.createElement('div');
	let moveContainer = document.createElement('div');
	let fadeContainer = document.createElement('div');
	let previewImage = document.createElement('div');

	appearanceContainer.style.animationName = animCurrent.appearance;
	appearanceContainer.style.animationDuration = '1s';

	moveContainer.style.animationName = animCurrent.move;
	moveContainer.style.animationDuration = animDuration / 1000 + 's';
	moveContainer.style.position = 'absolute';

	fadeContainer.style.animationName = animCurrent.fade;
	fadeContainer.style.animationDuration = fadeDuration / 1000 + 's';
	fadeContainer.style.animationDelay = (animDuration - fadeDuration) / 1000 + 's';

	previewImage.classList.add('preview-image');

	fadeContainer.appendChild(previewImage);
	appearanceContainer.appendChild(fadeContainer);
	moveContainer.appendChild(appearanceContainer);

	parentContainer.appendChild(moveContainer);

	return moveContainer;

}

function createAlerts(){
	alert_1 = renderPreview(preview720);
	alert_2 = renderPreview(preview600);
	alert_3 = renderPreview(preview480);
	alert_4 = renderPreview(preview900);
}

function removeAlerts(){
	alert_1.remove(); 
	alert_2.remove(); 
	alert_3.remove();
	alert_4.remove();
}

function animCycle(){
	createAlerts();
	animRemoveTimeout = setTimeout( removeAlerts, animDuration - 50);
	animCycleTimeout = setTimeout( animCycle, animDuration + 100);	
}

animCycle();


// let move = document.getElementById('mover');
// let fade = document.getElementById('fade');



// previewProgressBarFill.style.animationDuration = animDuration / 1000 + 's';

// let clearAnim = function(){
// 	appearance.style.animationName = '';
// 	fade.style.animationName = '';
// 	move.style.opacity = '0';
// }

// let applyAnim = function() {

// 		move.style.opacity = '1';
// 		appearance.style.animationDuration = '1s';
// 		appearance.style.animationName = animCurrent.appearance;

// 	 	fade.style.animationDuration = '1s';
// 	 	fade.style.animationDelay = (animDuration - 1000) / 1000 + 's';
// 	 	fade.style.animationName = animCurrent.fade;

// 	 	setTimeout(clearAnim, animDuration + 200);

// }

// let animTimer = setTimeout(function tick(){

// 		console.log('call tick');
// 		appearance.style.animationDuration = '1s';
// 		appearance.style.animationName = animCurrent.appearance;
// 		appearance.style.animationPlayState = 'running';

// 	 	fade.style.animationDuration = '1s';
// 	 	fade.style.animationDelay = (animDuration - 1000) / 1000 + 's';
// 	 	fade.style.animationName = animCurrent.fade;
// 	 	fade.style.animationPlayState = 'running';
// 	 	setTimeout(clearAnim, animDuration - 10);
// 	 	animTimer = setTimeout(tick, animDuration);
// }, animDuration);

//applyAnim();




//setInterval(applyAnim, animDuration + 400);

// let animTimeout = setTimeout( function(){

// 	for(let i = 0; i < appearance.length; i++){

// 		appearance[i].style.animationName = '';
// 		setTimeout(() => {appearance[i].style.animationName = animCurrent.appearance}, 100);
		
// 	}

// 	for(i = 0; i < move.length; i++){

// 		move[i].style.animationName = '';
// 		setTimeout(() => {move[i].style.animationName = animCurrent.move}, 100);

// 	}

// 	for(i = 0; i < fade.length; i++){
// 		fade[i].style.animationDuration = '1s';
// 		fade[i].style.animationDelay = '3s';
// 		fade[i].style.animationName = animCurrent.fade;
// 	}

// }, 4000);



// fadeContainer.style.animationDuration = fadeDuration / 1000 + 's';
// console.log(fadeDuration / 1000 + 's');
// console.log(animDuration);

// setTimeout( () => {	fadeContainer.classList.add('fader'); }, animDuration * 1000 - fadeDuration);
// moverContainer.style.animationDuration = animDuration + 's';


// let animReset = function(){

// 	moverContainer.classList.remove('mover');
// 	appearanceContainer.classList.remove('appearance');
	
// 	//moverContainer.style.animationName = '';
// 	//appearanceContainer.style.animationName = '';
// 	// setTimeout( () => {	moverContainer.style.animationName = 'bottom-top'; }, 10)
// 	// setTimeout( () => {	appearanceContainer.style.animationName = 'bounceInLeft'; }, 10)
// 	setTimeout( () => {	moverContainer.classList.add('mover'); }, 5)
// 	setTimeout( () => {	appearanceContainer.classList.add('appearance'); }, 5)
// }

// let animUpdateDuration = function(){
// 	animDuration = Number(this.value);
// 	console.log(animDuration);

// 	moverContainer.style.animationDuration = animDuration + 's';
	
// 	animReset();

// 	// setTimeout(() => {	appearanceContainer.classList.remove('appearance'); }, 1)
// 	// setTimeout(() => {	appearanceContainer.classList.add('appearance'); }, 2)
// 	// setTimeout(() => {	moverContainer.classList.remove('mover'); }, 5)
// 	// setTimeout(() => {	moverContainer.classList.add('mover'); }, 10)
	
// }

// durationSlider.addEventListener('change', animUpdateDuration);
// testTipButton.addEventListener('click', animReset);