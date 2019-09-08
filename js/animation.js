let durationInput = document.getElementById('anim-duration-input');
let animDuration = Number(durationInput.value) * 1000;
//let fadeDuration = 1000;

let moveTimingFunc = 'ease';
let moveTimingFuncRadios = document.getElementsByClassName('timing-func-radio');

let moveWavesRadios = document.getElementsByClassName('move-waves-radio');
let appearanceModeRadios = document.getElementsByClassName('appearance-style-radio');

//let previewProgressBarFill = document.getElementById('preview-progress-bar-fill');
let preview1080 = document.getElementById('preview-1920-1080');
let preview900 = document.getElementById('preview-1440-900');
let preview720 = document.getElementById('preview-1280-720');
let preview600 = document.getElementById('preview-800-600');
let preview480 = document.getElementById('preview-640-480');

let animRemoveTimeout;
let animCycleTimeout;

let alert_1;
let alert_2;
let alert_3;
let alert_4;
let alert_5;



function renderPreview(parentContainer, animConfig){

	let appearanceContainer = document.createElement('div');
	let moveContainer = document.createElement('div');
	let fadeContainer = document.createElement('div');
	let fadeCenterContainer = document.createElement('div');
	let appearanceCenterContainer = document.createElement('div');
	let wavesXContainer = document.createElement('div');
	let baseContainer = document.createElement('div');

	let tipperName = document.createElement('span');
	let tipAmount = document.createElement('span');
	let customMessage = document.createElement('p');

	let fadeDuration = parseFloat(animCurrent.fade.duration) * 1000;

	tipAmount.innerHTML = '100';
	tipAmount.id = 'tip-amount';
	
	tipAmount.style.animationDuration = '1s';

	tipperName.innerHTML = 'TipAlerts';
	tipperName.id = 'tipper-name';
	
	tipperName.style.animationDuration = '1s';

	customMessage.innerHTML = 'Thank you!';
	customMessage.id = 'custom-message';
	
	customMessage.style.animationDuration = '1s';

	appearanceContainer.style.position = 'absolute';
	appearanceContainer.style.left = '0%';
	appearanceContainer.style.top = '0%';
	appearanceContainer.style.width = '144px';
	appearanceContainer.style.height = '144px';
	appearanceContainer.style.boxSizing = 'border-box';
	appearanceContainer.style.transformOrigin = '72px 72px 0px';

	if(animConfig['appearance'].enabled){
		appearanceContainer.style.animationName = animConfig['appearance'].preset.anim;
		appearanceContainer.style.animationDuration = animCurrent.appearance.duration;

		if(animConfig['appearance'].mode == '2'){

				tipAmount.style.display = 'none';
				tipperName.style.display = 'none';
				customMessage.style.display = 'none';

				setTimeout(() => { 
									tipAmount.style.display = 'block';
									tipAmount.style.animationName = animConfig['appearance'].preset.anim;
					}, 200);

				setTimeout(() => { 
									tipperName.style.display = 'block';
									tipperName.style.animationName = animConfig['appearance'].preset.anim;
					}, 400);

				setTimeout(() => { 
									customMessage.style.display = 'block';
									customMessage.style.animationName = animConfig['appearance'].preset.anim;
					}, 600);		
		}

		else{
				tipAmount.style.display = 'block';
				tipperName.style.display = 'block';
				customMessage.style.display = 'block';
			}
	}

	moveContainer.style.position = 'absolute';
	moveContainer.style.left = 'calc(50% - 72px)';
	moveContainer.style.top = 'calc(50% - 72px)';
	moveContainer.style.animationTimingFunction = moveTimingFunc;

	moveContainer.style.width = '100%';
	moveContainer.style.height = '100%';
	moveContainer.classList.add('move-container');

	if(animConfig['move'].enabled){
		moveContainer.style.animationName = animConfig['move'].preset.anim;
		moveContainer.style.animationDuration = animDuration / 1000 + 's';
	}

	if(animConfig['fade'].enabled){
		fadeContainer.style.animationName = animConfig['fade'].preset.anim;
		fadeContainer.style.animationDuration = animCurrent.fade.duration;
		fadeContainer.style.animationDelay = (animDuration - fadeDuration) / 1000 + 's';
	}
	
	fadeContainer.style.transformOrigin = '72px 72px 0px';
	fadeContainer.style.position = 'absolute';

	fadeContainer.style.width = '100%';
	fadeContainer.style.height = '100%';
	fadeContainer.style.boxSizing = 'border-box';

	fadeCenterContainer.style.position = 'absolute';
	fadeCenterContainer.style.width = '100%';
	fadeCenterContainer.style.height = '100%';

	appearanceCenterContainer.style.position = 'absolute';
	appearanceCenterContainer.style.width = '100%';
	appearanceCenterContainer.style.height = '100%'

	wavesXContainer.style.position = 'absolute';
	wavesXContainer.style.animationDuration = '2s';
	wavesXContainer.style.animationIterationCount = 'infinite';
	//wavesXContainer.style.animationTimingFunction = 'ease-out';
	wavesXContainer.style.left = '0%';
	wavesXContainer.style.animationName = animCurrent.waves;

	baseContainer.classList.add('preview-image');

	baseContainer.appendChild(tipAmount);
	baseContainer.appendChild(tipperName);
	baseContainer.appendChild(customMessage);

	wavesXContainer.appendChild(baseContainer);
	fadeCenterContainer.appendChild(wavesXContainer);
	appearanceCenterContainer.appendChild(fadeCenterContainer);
	fadeContainer.appendChild(appearanceCenterContainer);
	appearanceContainer.appendChild(fadeContainer);
	moveContainer.appendChild(appearanceContainer);
	
	parentContainer.appendChild(moveContainer);
	

	return moveContainer;
	
	/*
	moveContainer.appendChild(previewImage);
	appearanceContainer.appendChild(moveContainer);
	fadeContainer.appendChild(appearanceContainer);
	
	parentContainer.appendChild(fadeContainer);
	

	return fadeContainer;
	*/
}

function createAlerts(){
	alert_1 = renderPreview(preview720, animConfig);
	alert_2 = renderPreview(preview600, animConfig);
	alert_3 = renderPreview(preview480, animConfig);
	alert_4 = renderPreview(preview900, animConfig);
	alert_5 = renderPreview(preview1080, animConfig);
}

function removeAlerts(){
	alert_1.remove(); 
	alert_2.remove(); 
	alert_3.remove();
	alert_4.remove();
	alert_5.remove();
}

function animCycle(){
	createAlerts();
	animRemoveTimeout = setTimeout( removeAlerts, animDuration - 50);
	animCycleTimeout = setTimeout( animCycle, animDuration + 100);	
}

function resetAnim(){
	clearTimeout(animRemoveTimeout);
	clearTimeout(animCycleTimeout);
	removeAlerts();
	animCycle();
}

animCycle();

durationInput.onchange = function(){
	animDuration = Number(durationInput.value) * 1000;
	resetAnim();
}

for(let i = 0; i < moveTimingFuncRadios.length; i++){
	moveTimingFuncRadios[i].onchange = function(){
		moveTimingFunc = this.value;
		console.log(this.value);
		resetAnim();
	}
}

for(let i = 0; i < moveWavesRadios.length; i++){
	moveWavesRadios[i].onchange = function(){
		animCurrent.waves = this.value;
		resetAnim();
	}
}

//console.log(appearanceModeRadios);

for(i = 0; i < appearanceModeRadios.length; i++){
	
	appearanceModeRadios[i].onchange = function(){
		animConfig['appearance'].mode = this.value;
		resetAnim();
	}
}

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