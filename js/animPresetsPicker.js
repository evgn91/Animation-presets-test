console.log('animPresetsPicker.js');

let appearancePresets = [ 	'Select appearance animation',

							{ 
								title: 'Bouncing entrances',
								presets: [
									         'bounceIn',
									         'bounceInDown',
									         'bounceInLeft',
									         'bounceInRight',
									         'bounceInUp'
								         ],
							}, 

							{ 
								title: 'Fading entrances',
								presets: [
									         'fadeIn',
									         'fadeInDown',
									         'fadeInDownBig',
									         'fadeInLeft',
									         'fadeInLeftBig',
									         'fadeInRight',
									         'fadeInRightBig',
									         'fadeInUp',
									         'fadeInUpBig'
								         ],
							}, 

							{ 
								title: 'Sliding entrances',
								presets: [
									         'slideInUp',
									         'slideInDown',
									         'slideInLeft',
									         'slideInRight'
								         ],
							},

							{ 
								title: 'Zoom entrances',
								presets: [
									         'zoomIn',
									         'zoomInDown',
									         'zoomInLeft',
									         'zoomInRight',
									         'zoomInUp'
								         ],
							},

							{ 
								title: 'Rotating entrances',
								presets: [
									         'rotateIn',
									         'rotateInDownLeft',
									         'rotateInDownRight',
									         'rotateInUpLeft',
									         'rotateInUpRight'
								         ],
							},

							{ 
								title: 'Other entrances',
								presets: [
									         'flipInX',
									         'flipInY',
									         'lightSpeedIn',
									         'jackInTheBox',
									         'rollIn'
								         ],
							}

						];

let fadePresets   = 	[ 	'Select fade animation',
							

							{ 
								title: 'Bouncing exits',
								presets: [
									         'bounceOut',
									         'bounceOutDown',
									         'bounceOutLeft',
									         'bounceOutRight',
									         'bounceOutUp'
								         ],
							}, 

							{ 
								title: 'Fading exits',
								presets: [
									         'fadeOut',
									         'fadeOutDown',
									         'fadeOutDownBig',
									         'fadeOutLeft',
									         'fadeOutLeftBig',
									         'fadeOutRight',
									         'fadeOutRightBig',
									         'fadeOutUp',
									         'fadeOutUpBig'
								         ],
							}, 

							{ 
								title: 'Sliding exits',
								presets: [
									         'slideOutUp',
									         'slideOutDown',
									         'slideOutLeft',
									         'slideOutRight'
								         ],
							},

							{ 
								title: 'Zoom exits',
								presets: [
									         'zoomOut',
									         'zoomOutDown',
									         'zoomOutLeft',
									         'zoomOutRight',
									         'zoomOutUp'
								         ],
							},

							{ 
								title: 'Rotating exits',
								presets: [
									         'rotateOut',
									         'rotateOutDownLeft',
									         'rotateOutDownRight',
									         'rotateOutUpLeft',
									         'rotateOutUpRight'
								         ],
							},

							{ 
								title: 'Other exits',
								presets: [
									         'flipOutX',
									         'flipOutY',
									         'lightSpeedOut',
									         'hinge',
									         'rollOut'
								         ],
							}

						];

let movementPresets   = 	[ 	'Select movement animation',
							

								{ 
									title: 'Movement',
									presets: [
										         'moveRight',
										         'moveLeft',
										         'moveTop',
										         'moveBottom'
									         ],
								}

						];

let animAppearanceDefault = {
	enabled: true,
	preset: 'fadeIn'
};

let animMoveDefault = {
	enabled: true,
	preset: 'moveTop'
};

let animFadeDefault = {
	enabled: true,
	preset: 'zoomOut'
};


let animAppearanceCurrent = 'fadeIn';
let animMoveCurrent = 'moveTop';
let animFadeCurrent = 'rollOut';

let animCurrent = {
					appearance: animAppearanceDefault.preset,
					move: animMoveDefault.preset,
					fade: animFadeDefault.preset
};

let animDisabledStorage = {
							appearance: '',
							move: '',
							fade: ''
};

let animPickers = [ 

					{	
						checkboxTitle: 'Appearance',
						previewAnimation: animAppearanceCurrent,
						animPhase: 'appearance',
						presets: appearancePresets
					},

					{
						checkboxTitle: 'Move',
						previewAnimation: animMoveCurrent,
						animPhase: 'move',
						presets: movementPresets
					}, 

					{
						checkboxTitle: 'Fade',
						previewAnimation: animFadeCurrent,
						animPhase: 'fade',
						presets: fadePresets
					}

				];

let animPickersWrapper = document.getElementById( 'anim-pickers-wrapper' );

let animAppearanceEnableCheckbox = document.getElementById('anim-appearance-enable');

let animAppearancePreset = document.getElementById( 'anim-appearance-preset' );

let animAppearancePicker = document.getElementById( 'anim-appearance-picker' );
let animAppearancePickerImage = document.getElementById( 'anim-appearance-preview-img' );
let animMovePickerImage = document.getElementById( 'anim-move-preview-img' );
let animFadePickerImage = document.getElementById('anim-fade-preview-img');
let animFadePicker = document.getElementById( 'anim-fade-picker' );
let animMovePicker = document.getElementById( 'anim-movement-picker' );

let animAppearancePickerTitle = document.getElementById('anim-appearance-preview-title');
let animMovePickerTitle = document.getElementById('anim-move-preview-title');
let animFadePickerTitle = document.getElementById('anim-fade-preview-title');

// animAppearancePicker.onmouseenter = function() { 
// 	animAppearancePickerImage.style.animationName = animAppearanceCurrent;
// }

// animAppearancePicker.onmouseleave = function() { 
// 	animAppearancePickerImage.style.animationName = '';
// }

// animMovePicker.onmouseenter = function() { 
// 	animMovePickerImage.style.animationName = animMoveCurrent;
// }

// animMovePicker.onmouseleave = function() { 
// 	animMovePickerImage.style.animationName = '';
// }

// animFadePicker.onmouseenter = function() { 
// 	animFadePickerImage.style.animationName = animFadeCurrent;
// }

// animFadePicker.onmouseleave = function() { 
// 	animFadePickerImage.style.animationName = '';
// }

// animAppearanceEnableCheckbox.onchange = function(){
// 	if(!this.checked){
// 		animAppearancePickerTitle.innerHTML = 'Disabled';
// 		animAppearancePickerTitle.style.opacity = '.54';
// 		animAppearancePickerImage.style.opacity = '.54';
// 		animAppearancePicker.onmouseenter = function() { 
// 			animAppearancePickerImage.style.animationName = '';
// 		}
// 	}
// 	else{
// 		animAppearancePickerTitle.innerHTML = animAppearanceCurrent;
// 		animAppearancePickerTitle.style.opacity = '1';
// 		animAppearancePickerImage.style.opacity = '1';
// 		animAppearancePicker.onmouseenter = function() { 
// 			animAppearancePickerImage.style.animationName = animAppearanceCurrent;
// 		}
// 	}
	
// }

let previewImgTimeout;
let activeModal;
let activePicker;

var animSetPreset = function( preset, animPhase, control ){

	return function(){

				clearTimeout(animRemoveTimeout);
				clearTimeout(animCycleTimeout);

				animCurrent[animPhase] = preset;
				control.title.innerHTML = preset;
				clearTimeout(previewImgTimeout);
				activeModal.remove();
				activeModal = null;
				control.image.style.display = 'block';
				control.imageRandom.style.display = 'none';
				control.progressBar.style.display = 'block';

				if(!control.checkbox.checked){

					control.checkbox.checked = true;
					control.placeholder.style.display = 'none';
					//control.image.style.display = 'block';
					control.title.style.opacity = '1';
					control.preview.style.opacity = '1';
					//control.progressBar.style.display = 'block';

				}

				removeAlerts();
				animCycle();

				setTimeout( () => {window.removeEventListener('click', closeModal);}, 1);
			}
	
}

let animSetRandom = function( animPhase, control ){
	return function(){
				animCurrent[animPhase] = 'Random';
				control.title.innerHTML = 'Random';
				clearTimeout(previewImgTimeout);
				activeModal.remove();
				activeModal = null;
				control.progressBar.style.display = 'none';
				control.image.style.display = 'none';
				control.imageRandom.style.display = 'block';

				if(!control.checkbox.checked){

					control.checkbox.checked = true;
					control.placeholder.style.display = 'none';
					
					control.title.style.opacity = '1';
					control.preview.style.opacity = '1';
					
				}
				setTimeout( () => {window.removeEventListener('click', closeModal);}, 1);
			}
}

let createPresetsPicker = function(presets, animPhase, control){
	return function(){

		console.log('CREATE PICKER');

		activePicker = event.target;

		let pickerModal = document.createElement('section');
		let pickerModalTitleWrapper = document.createElement('div');

		pickerModal.classList.add('anim-presets-picker');
		
		pickerModalTitleWrapper.classList.add('module-36','settings-section-header','no-border','col-12','anim-picker-head');
		pickerModalTitleWrapper.innerHTML = `<span>${presets[0]}</span>`;

		let presetsGroupWrapper = document.createElement('section');
		let gridContainer = document.createElement('div');
		let presetsGroupTitle = document.createElement('span'); 

		gridContainer.classList.add('grid-container');
		presetsGroupTitle.classList.add('anim-presets-group-title');
		presetsGroupTitle.innerHTML = 'Specials';
		presetsGroupWrapper.classList.add('anim-presets-picker-group');

		let presetItem = document.createElement('div');
		let presetItemTitle = document.createElement('span');
		let presetItemPreviewContainer = document.createElement('div');
		let presetItemPreviewImg = document.createElement('img');

		presetItemTitle.innerHTML = 'Random';
		presetItemPreviewImg.src = "img/preview-random.png";
		presetItem.classList.add('anim-presets-picker-item');

		presetItem.addEventListener('click', animSetRandom( animPhase, control ));

		presetItemPreviewContainer.appendChild(presetItemPreviewImg);

		presetItem.appendChild(presetItemPreviewContainer);
		presetItem.appendChild(presetItemTitle);
				
		gridContainer.appendChild(presetItem);

		presetsGroupWrapper.appendChild(presetsGroupTitle);
		presetsGroupWrapper.appendChild(gridContainer);
		pickerModal.appendChild(presetsGroupWrapper);

		for(let i = 1; i < presets.length; i++ ){

			let presetsGroupWrapper = document.createElement('section');
			let gridContainer = document.createElement('div');
			let presetsGroupTitle = document.createElement('span');

			gridContainer.classList.add('grid-container');
			presetsGroupTitle.classList.add('anim-presets-group-title');
			presetsGroupTitle.innerHTML = presets[i].title;
			presetsGroupWrapper.classList.add('anim-presets-picker-group');
			

			for(let j = 0; j < presets[i].presets.length; j++){

				let presetItem = document.createElement('div');
				let presetItemTitle = document.createElement('span');
				let presetItemPreviewContainer = document.createElement('div');
				let presetItemPreviewImg = document.createElement('img');
				let presetItemProgressBar = document.createElement('div');

				presetItemTitle.innerHTML = presets[i].presets[j];
				presetItemPreviewImg.src = "img/preview-heart.png";
				presetItem.classList.add('anim-presets-picker-item');
				presetItemProgressBar.classList.add('anim-preview-progress-bar');

				switch (animPhase) {
					case 'appearance':
						presetItem.onmouseenter =  function(){ 
							presetItemPreviewImg.style.animationName = presets[i].presets[j];
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = '';
								previewImgTimeout = setTimeout(() => {
									presetItemPreviewImg.style.animationName = presets[i].presets[j];
									previewImgTimeout = setTimeout(previewAnimDelay, 1000);
								}, 400); 
							}, 1000);
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
							clearTimeout(previewImgTimeout);
						}

						presetItem.addEventListener('click', animSetPreset( presets[i].presets[j], 'appearance', control ));


						break;

					case 'move':

						presetItemProgressBar.style.animationDuration = '1s';

						presetItem.onmouseenter =  function(){ 
							presetItemPreviewImg.style.animationName = presets[i].presets[j] + '-preview';
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
						}

						presetItem.addEventListener('click', animSetPreset( presets[i].presets[j], 'move', control ));

						break;

					case 'fade':

						presetItem.onmouseenter =  function(){
							//presetItemPreviewImg.style.animationName = presets[i].presets[j];
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = presets[i].presets[j] + '-preview';
								previewImgTimeout = setTimeout(() => {
									presetItemPreviewImg.style.animationName = '';
									previewImgTimeout = setTimeout(previewAnimDelay, 400);
								}, 1000); 
							}, 400);
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
							clearTimeout(previewImgTimeout);
						}

						presetItem.addEventListener('click', animSetPreset( presets[i].presets[j], 'fade', control ));

						break;


					default:
						// statements_def
						break;
				}

				

				

				presetItemPreviewContainer.appendChild(presetItemPreviewImg);

				presetItem.appendChild(presetItemPreviewContainer);
				presetItem.appendChild(presetItemProgressBar);
				presetItem.appendChild(presetItemTitle);
				

				gridContainer.appendChild(presetItem);

				

				
			}


			presetsGroupWrapper.appendChild(presetsGroupTitle);
			presetsGroupWrapper.appendChild(gridContainer);
			pickerModal.appendChild(presetsGroupWrapper);

		}

		
		activeModal = pickerModal;
		pickerModal.prepend(pickerModalTitleWrapper);
		document.body.prepend(pickerModal);

		setTimeout(() => {window.addEventListener('click', closeModal);}, 1);

	}
}

let createAnimControl = function( parentElem, animPhase, pickerTitle, presets, configDefault ) {
		
		console.log('Creating control');
		let itemWrapper = document.createElement( 'div' );

		let checkboxWrapper = document.createElement( 'label' );
		let checkboxInput = document.createElement( 'input' );
		let checkboxCheckMark = document.createElement( 'span' );
		let checkboxText = document.createElement( 'span' );

		let previewWrapper = document.createElement( 'div' );
		let preview = document.createElement('div');
		let previewImage = document.createElement('img');
		let previewImageRandom = document.createElement('img');
		let previewPlaceholder = document.createElement('img');
		let previewProgressBar = document.createElement('div');

		let titleWrapper = document.createElement('div');
		let title = document.createElement('span');

		itemWrapper.classList.add('anim-preset-item-wrapper');

		checkboxWrapper.classList.add('checkbox-container');
		checkboxInput.type = 'checkbox';
		checkboxInput.checked = configDefault.enabled;
		checkboxCheckMark.classList.add('checkmark');
		checkboxText.classList.add('checkbox-text');
		checkboxText.innerHTML = pickerTitle;

		previewWrapper.classList.add('anim-preset-item');
		preview.classList.add('anim-preset-preview');
		previewImage.src = "img/preview-heart.png";
		previewImageRandom.src = 'img/preview-random.png';
		previewImageRandom.style.display = 'none';
		previewPlaceholder.src = 'img/anim-disabled-placeholder.png';
		previewPlaceholder.style.display = 'none';
		previewProgressBar.classList.add('anim-preview-progress-bar');

		previewWrapper.onmouseenter = function() {
			previewImage.style.animationName = animCurrent[animPhase] + '-preview';
		}

		previewWrapper.onmouseleave = function() {
			previewImage.style.animationName = '';
		}

		checkboxInput.onchange = function() {
			console.log('checkbox change');
			if(!this.checked){
				clearTimeout(animRemoveTimeout);
				clearTimeout(animCycleTimeout);
				animDisabledStorage[animPhase] = animCurrent[animPhase];
				animCurrent[animPhase] = '';
				previewImageRandom.style.display = 'none';
				previewImage.style.display = 'none';
				title.innerHTML = 'Disabled';
				title.style.opacity = '.54';
				preview.style.opacity = '.34';
				previewProgressBar.style.display = 'none';
				previewPlaceholder.style.display = 'block';
				removeAlerts();
				animCycle();
			}
			else{
				clearTimeout(animRemoveTimeout);
				clearTimeout(animCycleTimeout);
				animCurrent[animPhase] = animDisabledStorage[animPhase];
				title.innerHTML = animCurrent[animPhase];
				title.style.opacity = '1';
				preview.style.opacity = '1';
				previewPlaceholder.style.display = 'none';
				
				if(animCurrent[animPhase] != 'Random'){

					previewImage.style.display = 'block';
					previewProgressBar.style.display = 'block';
					
				}
				else{
					previewImageRandom.style.display = 'block';
				}

				removeAlerts();
				animCycle();
			}
		}; 

		titleWrapper.classList.add('anim-preset-title-wrapper');
		title.innerHTML = configDefault.preset;

		checkboxWrapper.appendChild( checkboxInput );
		checkboxWrapper.appendChild( checkboxCheckMark );
		checkboxWrapper.appendChild( checkboxText );

		preview.appendChild( previewImage );
		preview.appendChild( previewImageRandom );
		preview.appendChild( previewPlaceholder );
		preview.appendChild( previewProgressBar );

		previewWrapper.appendChild( preview );
		previewWrapper.appendChild( titleWrapper );

		titleWrapper.appendChild( title );

		itemWrapper.appendChild( checkboxWrapper );
		itemWrapper.appendChild( previewWrapper );

		parentElem.appendChild( itemWrapper );

		let control = {
		 				image: previewImage,
						title: title,
		 				progressBar: previewProgressBar,
		 				preview: preview,
		 				checkbox: checkboxInput,
		 				placeholder: previewPlaceholder,
		 				imageRandom: previewImageRandom,
					};

		//controlTitle = title;

		previewWrapper.addEventListener( 'click', createPresetsPicker( presets, animPhase, control ) );

		return control;
}

let appearanceAnimControl = createAnimControl( animPickersWrapper, 'appearance', 'Appearance', appearancePresets, animAppearanceDefault );
let moveAnimControl = createAnimControl( animPickersWrapper, 'move', 'Move', movementPresets, animMoveDefault );
let fadeAnimControl = createAnimControl( animPickersWrapper, 'fade', 'Fade', fadePresets, animFadeDefault );

let closeModal = function(){
	//console.log(event.target);

	if(activeModal){

		if( activeModal.contains(event.target) ){

		}

		else{
		
			activeModal.remove();
			activeModal = null;
			setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
		
		}
	}
}


// animAppearancePicker.addEventListener('click', createPresetsPicker( appearancePresets, 'appearance' ) );
// animMovePicker.addEventListener('click', createPresetsPicker( movementPresets, 'move' ) );
// animFadePicker.addEventListener('click', createPresetsPicker( fadePresets, 'fade' ) );

// window.addEventListener('load', () => { return createAnimPickers( animPickers ) });