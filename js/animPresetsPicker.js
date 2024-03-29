console.log('animPresetsPicker.js');

let appearancePresetsNew = ['Select appearance animation',
							
							{
								title: 'Bouncing entrances',
								presets: [
											{
												anim: 'bounceIn',
												title: 'Bounce In',
												target: 'appearanceCenter'
											},

											{
												anim: 'bounceInDown',
												title: 'Bounce In Down',
												target: 'appearance'
											},

											{
												anim: 'bounceInLeft',
												title: 'Bounce In Left',
												target: 'appearance'
											},

											{
												anim: 'bounceInRight',
												title: 'Bounce In Right',
												target: 'appearance'
											},

											{
												anim: 'bounceInUp',
												title: 'Bounce In Up',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-red.png',
								color: colors.red,
							},

							{
								title: 'Fading entrances',
								presets: [
											{
												anim: 'fadeIn',
												title: 'Fade In',
												target: 'appearance'
											},

											{
												anim: 'fadeInDown',
												title: 'Fade In Down',
												target: 'appearance'
											},

											{
												anim: 'fadeInDownBig',
												title: 'Fade In Down Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInLeft',
												title: 'Fade In Left',
												target: 'appearance'
											},

											{
												anim: 'fadeInLeftBig',
												title: 'Fade In Left Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInRight',
												title: 'Fade In Right',
												target: 'appearance'
											},

											{
												anim: 'fadeInRightBig',
												title: 'Fade In Right Big',
												target: 'appearance'
											},

											{
												anim: 'fadeInUp',
												title: 'Fade In Up',
												target: 'appearance'
											},

											{
												anim: 'fadeInUpBig',
												title: 'Fade In Up Big',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.pink,
							},

							{
								title: 'Flip entrances',
								presets: [
											{
												anim: 'flipInX',
												title: 'Flip In X',
												target: 'appearanceCenter'
											},

											{
												anim: 'flipInY',
												title: 'Flip In Y',
												target: 'appearanceCenter'
											},
											
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.purple,
							},

							{
								title: 'Jump entrances',
								presets: [
											{
												anim: 'jumpInLeft',
												title: 'Jump In Left',
												target: 'appearance',
											},

											{
												anim: 'jumpInRight',
												title: 'Jump In Right',
												target: 'appearance',
											},
								],

								previewSample: 'preview-heart-turquoise.png',
								color: colors.deepPurple,
							},

							{
								title: 'Pop entrances',
								presets: [
											{
												anim: 'popIn',
												title: 'Pop In',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInLeft',
												title: 'Pop In Left',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInRight',
												title: 'Pop In Right',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInTop',
												title: 'Pop In Top',
												target: 'appearance',
												duration: '1s',
											},

											{
												anim: 'popInBottom',
												title: 'Pop In Bottom',
												target: 'appearance',
												duration: '1s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.indigo,
							},

							{
								title: 'Pull entrances',
								presets: [
											{
												anim: 'pullUp',
												title: 'Pull Up',
												target: 'appearance'
											},

											{
												anim: 'pullDown',
												title: 'Pull Down',
												target: 'appearance'
											},

											{
												anim: 'pullLeft',
												title: 'Pull Left',
												target: 'appearance'
											},

											{
												anim: 'pullRight',
												title: 'Pull Right',
												target: 'appearance'
											}

								],
								previewSample: 'preview-heart-green.png',
								color: colors.blue,
							},

							{
								title: 'Rotating entrances',
								presets: [
											{
												anim: 'rotateIn',
												title: 'Rotate In',
												target: 'appearanceCenter'
											},

											{
												anim: 'rotateInUpLeft',
												title: 'Rotate In Up Left',
												target: 'appearance'
											},

											{
												anim: 'rotateInUpRight',
												title: 'Rotate In Up Right',
												target: 'appearance'
											},

											{
												anim: 'rotateInDownLeft',
												title: 'Rotate In Down Left',
												target: 'appearance'
											},

											{
												anim: 'rotateInDownRight',
												title: 'Rotate In Down Right',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-green.png',
								color: colors.lightBlue,
							},

							{
								title: 'Sliding entrances',
								presets: [
											{
												anim: 'slideInUp',
												title: 'Slide In Up',
												target: 'appearance'
											},

											{
												anim: 'slideInDown',
												title: 'Slide In Down',
												target: 'appearance'
											},

											{
												anim: 'slideInRight',
												title: 'Slide In Right',
												target: 'appearance'
											},

											{
												anim: 'slideInLeft',
												title: 'Slide In Left',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-orange.png',
								color: colors.cyan,
							},

							{
								title: 'Swoop entrances',
								presets: [
											{
												anim: 'swoopInLeft',
												title: 'Swoop In Left',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInRight',
												title: 'Swoop In Right',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInTop',
												title: 'Swoop In Top',
												target: 'appearance',
												duration: '.5s',
											},

											{
												anim: 'swoopInBottom',
												title: 'Swoop In Bottom',
												target: 'appearance',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.teal,
							},

							{
								title: 'Zoom entrances',
								presets: [
											{
												anim: 'zoomIn',
												title: 'Zoom In',
												target: 'appearanceCenter'
											},

											{
												anim: 'zoomInLeft',
												title: 'Zoom In Left',
												target: 'appearance'
											},

											{
												anim: 'zoomInRight',
												title: 'Zoom In Right',
												target: 'appearance'
											},

											{
												anim: 'zoomInDown',
												title: 'Zoom In Down',
												target: 'appearance'
											},

											{
												anim: 'zoomInUp',
												title: 'Zoom In Up',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-purple.png',
								color: colors.green,
							},

							{
								title: 'Other',
								presets: [

											{
												anim: 'lightSpeedIn',
												title: 'Light Speed In',
												target: 'appearance'
											},

											{
												anim: 'jackInTheBox',
												title: 'Jack In The Box',
												target: 'appearance'
											},

											{
												anim: 'rollIn',
												title: 'Roll In',
												target: 'appearance'
											},

											{
												anim: 'unfold',
												title: 'Unfold',
												target: 'appearance'
											},

											{
												anim: 'blink',
												title: 'Blink',
												target: 'appearance'
											},

											{
												anim: 'spinIn',
												title: 'Spin In',
												target: 'appearance'
											}
								],
								previewSample: 'preview-heart-blue.png',
								color: colors.lightGreen,
							},
];

let fadePresetsNew = ['Select fade animation',
							
							{
								title: 'Bouncing Exits',
								presets: [
											{
												anim: 'bounceOut',
												title: 'Bounce Out',
												target: 'fadeCenter'
											},

											{
												anim: 'bounceOutDown',
												title: 'Bounce Out Down',
												target: 'fade'
											},

											{
												anim: 'bounceOutLeft',
												title: 'Bounce Out Left',
												target: 'fade'
											},

											{
												anim: 'bounceOutRight',
												title: 'Bounce Out Right',
												target: 'fade'
											},

											{
												anim: 'bounceOutUp',
												title: 'Bounce Out Up',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-red.png',
								color: colors.red,
							},

							{
								title: 'Fading Exits',
								presets: [
											{
												anim: 'fadeOut',
												title: 'Fade Out',
												target: 'fade'
											},

											{
												anim: 'fadeOutDown',
												title: 'Fade Out Down',
												target: 'fade'
											},

											{
												anim: 'fadeOutDownBig',
												title: 'Fade Out Down Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutLeft',
												title: 'Fade Out Left',
												target: 'fade'
											},

											{
												anim: 'fadeOutLeftBig',
												title: 'Fade Out Left Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutRight',
												title: 'Fade Out Right',
												target: 'fade'
											},

											{
												anim: 'fadeOutRightBig',
												title: 'Fade Out Right Big',
												target: 'fade'
											},

											{
												anim: 'fadeOutUp',
												title: 'Fade Out Up',
												target: 'fade'
											},

											{
												anim: 'fadeOutUpBig',
												title: 'Fade Out Up Big',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.pink,
							},

							{
								title: 'Flip exits',
								presets: [
											{
												anim: 'flipOutX',
												title: 'Flip Out X',
												target: 'fadeCenter'
											},

											{
												anim: 'flipOutY',
												title: 'Flip Out Y',
												target: 'fadeCenter'
											},
											
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.purple,
							},

							{
								title: 'Jump exits',
								presets: [
											{
												anim: 'jumpOutLeft',
												title: 'Jump Out Left',
												target: 'fade',
											},

											{
												anim: 'jumpOutRight',
												title: 'Jump Out Right',
												target: 'fade',
											},
								],

								previewSample: 'preview-heart-turquoise.png',
								color: colors.deepPurple,
							},

							{
								title: 'Pop exits',
								presets: [
											{
												anim: 'popOut',
												title: 'Pop Out',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutLeft',
												title: 'Pop Out Left',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutRight',
												title: 'Pop Out Right',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutTop',
												title: 'Pop Out Top',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'popOutBottom',
												title: 'Pop Out Bottom',
												target: 'fade',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.indigo,
							},

							{
								title: 'Rotating Exits',
								presets: [
											{
												anim: 'rotateOut',
												title: 'Rotate Out',
												target: 'fadeCenter'
											},

											{
												anim: 'rotateOutUpLeft',
												title: 'Rotate Out Up Left',
												target: 'fade'
											},

											{
												anim: 'rotateOutUpRight',
												title: 'Rotate Out Up Right',
												target: 'fade'
											},

											{
												anim: 'rotateOutDownLeft',
												title: 'Rotate Out Down Left',
												target: 'fade'
											},

											{
												anim: 'rotateOutDownRight',
												title: 'Rotate Out Down Right',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-green.png',
								color: colors.lightBlue,
							},

							{
								title: 'Sliding Exits',
								presets: [
											{
												anim: 'slideOutUp',
												title: 'Slide Out Up',
												target: 'fade'
											},

											{
												anim: 'slideOutDown',
												title: 'Slide Out Down',
												target: 'fade'
											},

											{
												anim: 'slideOutRight',
												title: 'Slide Out Right',
												target: 'fade'
											},

											{
												anim: 'slideOutLeft',
												title: 'Slide Out Left',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-orange.png',
								color: colors.cyan,
							},

							{
								title: 'Swoop exits',
								presets: [
											{
												anim: 'swoopOutLeft',
												title: 'Swoop Out Left',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutRight',
												title: 'Swoop Out Right',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutTop',
												title: 'Swoop Out Top',
												target: 'fade',
												duration: '.5s',
											},

											{
												anim: 'swoopOutBottom',
												title: 'Swoop Out Bottom',
												target: 'fade',
												duration: '.5s',
											}
								],
								previewSample: 'preview-heart-turquoise.png',
								color: colors.teal,
							},

							{
								title: 'Zoom Exits',
								presets: [
											{
												anim: 'zoomOut',
												title: 'Zoom Out',
												target: 'fadeCenter'
											},

											{
												anim: 'zoomOutLeft',
												title: 'Zoom Out Left',
												target: 'fade'
											},

											{
												anim: 'zoomOutRight',
												title: 'Zoom Out Right',
												target: 'fade'
											},

											{
												anim: 'zoomOutDown',
												title: 'Zoom Out Down',
												target: 'fade'
											},

											{
												anim: 'zoomOutUp',
												title: 'Zoom Out Up',
												target: 'fade'
											}
								],
								previewSample: 'preview-heart-purple.png',
								color: colors.green,
							},

							{
								title: 'Other Exits',
								presets: [

											{
												anim: 'lightSpeedOut',
												title: 'Light Speed Out',
												target: 'fade'
											},

											{
												anim: 'hinge',
												title: 'Hinge',
												target: 'fade'
											},

											{
												anim: 'rollOut',
												title: 'Roll Out',
												target: 'fade'
											},

											{
												anim: 'fold',
												title: 'Fold',
												target: 'fadeCenter'
											},

											{
												anim: 'spinOut',
												title: 'Spin Out',
												target: 'fadeCenter'
											}

								],
								previewSample: 'preview-heart-blue.png',
								color: colors.lightGreen,
							},

];

let movePresetsNew = ['Select move animation',
							
							{
								title: 'Start & end inside screen',
								presets: [

											{
												anim: 'moveRight',
												title: 'Left to Right',
												target: 'move'
											},

											{
												anim: 'moveLeft',
												title: 'Right to Left',
												target: 'move'
											},

											{
												anim: 'moveTop',
												title: 'Bottom to Top',
												target: 'move'
											},

											{
												anim: 'moveBottom',
												title: 'Top to Bottom',
												target: 'move'
											}
								
										],
								previewSample: 'preview-heart-white.png',
								color: '#FFCD8D',
							},

							{
								title: 'Start & end outside screen',
								presets: [

											{
												anim: 'moveRight-out-out',
												title: 'Left to Right',
												target: 'move'
											},

											{
												anim: 'moveLeft-out-out',
												title: 'Right to Left',
												target: 'move'
											},

											{
												anim: 'moveTop-out-out',
												title: 'Bottom to Top',
												target: 'move'
											},

											{
												anim: 'moveBottom-out-out',
												title: 'Top to Bottom',
												target: 'move'
											}
								
										],
								previewSample: 'preview-heart-red.png',
								color: '#FFCD8D',
							},

							{
								title: 'Start inside, end outside screen',
								presets: [

											{
												anim: 'moveRight-in-out',
												title: 'Left to Right',
												target: 'move'
											},

											{
												anim: 'moveLeft-in-out',
												title: 'Right to Left',
												target: 'move'
											},

											{
												anim: 'moveTop-in-out',
												title: 'Bottom to Top',
												target: 'move'
											},

											{
												anim: 'moveBottom-in-out',
												title: 'Top to Bottom',
												target: 'move'
											}
								
										],
								previewSample: 'preview-heart-turquoise.png',
								color: '#FFCD8D',
							},

							{
								title: 'Start outside, end inside screen',
								presets: [

											{
												anim: 'moveRight-out-in',
												title: 'Left to Right',
												target: 'move'
											},

											{
												anim: 'moveLeft-out-in',
												title: 'Right to Left',
												target: 'move'
											},

											{
												anim: 'moveTop-out-in',
												title: 'Bottom to Top',
												target: 'move'
											},

											{
												anim: 'moveBottom-out-in',
												title: 'Top to Bottom',
												target: 'move'
											}
								
										],
								previewSample: 'preview-heart-orange.png',
								color: '#FFCD8D',
							}
						];

let animAppearanceDefault = {
	enabled: true,
	preset: 'bounceIn'
};

let animMoveDefault = {
	enabled: true,
	preset: 'moveTop'
};

let animFadeDefault = {
	enabled: true,
	preset: 'fadeOut'
};

let animBaseDefault = {
	enabled: true,
	preset: 'zoomOut'
};



let animAppearanceCurrent = 'fadeIn';
let animMoveCurrent = 'moveTop';
let animFadeCurrent = 'rollOut';

let pickerModalScrollOffset = {
								appearance: 500,
								move: 0,
								fade: 0

};

let animCurrent = {

					appearance: 		{
											preset: animAppearanceDefault.preset,
											duration: '1s',
										},

					move: 				{	
											preset: animMoveDefault.preset,
											duration: null,
										},	

					fade: 				{
											preset: animFadeDefault.preset,
											duration: '1s',
										},

					appearanceCenter: 	{
											preset: animBaseDefault.preset,
											duration: '1s',
										},

					fadeCenter: 		{
											preset: animBaseDefault.preset,
											duration: '1s',
										},

					waves: ''
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
						presets: appearancePresetsNew
					},

					{
						checkboxTitle: 'Move',
						previewAnimation: animMoveCurrent,
						animPhase: 'move',
						presets: movePresetsNew
					}, 

					{
						checkboxTitle: 'Fade',
						previewAnimation: animFadeCurrent,
						animPhase: 'fade',
						presets: fadePresetsNew
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

let previewImgTimeout;
let activeModal;
let activePicker;

var animSetPreset = function( preset, animPhase, control, duration, pickerIndex ){

	return function(){


				clearTimeout(animRemoveTimeout);
				clearTimeout(animCycleTimeout);

				animConfig[animPhase].preset = preset;
				animConfig[animPhase].pickerIndex = pickerIndex;

				console.log(pickerIndex);

				if( duration && animPhase != 'move' ){
					animConfig[animPhase].duration = duration;
				}
				else if( animPhase != 'move' ){
					animConfig[animPhase].duration = '1s';	
				}

				control.title.innerHTML = preset.title;
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

				resetAnim();

				setTimeout( () => {window.removeEventListener('click', closeModal);}, 1);
			}
	
}

let animSetRandom = function( animPhase, control ){
	return function(){
				animCurrent[animPhase].preset = 'Random';
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

let renderPresetsPicker = function(parentElem, collection, animPhase, control, animCfg){

	return function(){

		console.log('CREATE PICKER');


		//activeControl = control.elem;
		//console.log(control.elem);
		//console.log(activeControl);

		//activeControl.removeEventListener('click', renderPresetsPicker);

		let pickerModal = document.createElement('section');
		let pickerModalTitleWrapper = document.createElement('div');
		let scrollContainer = document.createElement('div');
		let indexCount = 0;

		pickerModal.classList.add('anim-presets-picker');
		scrollContainer.classList.add('scroll-container');
		
		//console.log( pickerModal.scrollTop );
		//console.log( pickerModalScrollOffset[animPhase] );
		
		// pickerModal.onclick = function() {
		// 	pickerModal.scrollTop = pickerModalScrollOffset[animPhase];
		// }

		scrollContainer.onscroll = function(){
		// 	console.log(this.scrollTop);
			pickerModalScrollOffset[animPhase] = this.scrollTop;
		}
		
		pickerModalTitleWrapper.classList.add('module-36','settings-section-header','no-border','col-12','anim-picker-head');
		pickerModalTitleWrapper.innerHTML = `<span>${collection[0]}</span>`;

		let presetsGroupWrapper = document.createElement('section');
		let gridContainer = document.createElement('div');
		let presetsGroupTitle = document.createElement('span'); 

		gridContainer.classList.add('grid-container');
		presetsGroupTitle.classList.add('anim-presets-group-title');
		presetsGroupTitle.innerHTML = 'Specials';
		presetsGroupWrapper.classList.add('anim-presets-picker-group');

		let presetItem = document.createElement('div');
		let presetItemTitle = document.createElement('span');
		let presetItemTitleWrapper = document.createElement('div');
		let presetItemPreviewContainer = document.createElement('div');
		let presetItemPreviewImg = document.createElement('img');

		presetItemTitle.innerHTML = 'Random';
		presetItemPreviewImg.src = "img/preview-random.png";
		presetItem.classList.add('anim-presets-picker-item');

		presetItemTitle.classList.add('anim-preset-picker-item-title');
		presetItemTitleWrapper.classList.add('anim-preset-picker-item-title-wrapper');

		presetItemPreviewContainer.classList.add('anim-preset-picker-item-preview-wrapper');

		presetItem.addEventListener('click', animSetRandom( animPhase, control ));

		presetItemTitleWrapper.appendChild(presetItemTitle);
		presetItemPreviewContainer.appendChild(presetItemPreviewImg);

		presetItem.appendChild(presetItemPreviewContainer);
		presetItem.appendChild(presetItemTitleWrapper);
				
		gridContainer.appendChild(presetItem);

		presetsGroupWrapper.appendChild(presetsGroupTitle);
		presetsGroupWrapper.appendChild(gridContainer);
		scrollContainer.appendChild(presetsGroupWrapper);

		for(let i = 1; i < collection.length; i++ ){

			let presetsGroupWrapper = document.createElement('section');
			let gridContainer = document.createElement('div');
			let presetsGroupTitle = document.createElement('div');

			gridContainer.classList.add('grid-container');
			presetsGroupTitle.classList.add('anim-presets-group-title');
			presetsGroupTitle.innerHTML = collection[i].title;
			presetsGroupWrapper.classList.add('anim-presets-picker-group');	

			for(let j = 0; j < collection[i].presets.length; j++){

				indexCount++;
				let presetItem = document.createElement('div');
				let presetItemTitle = document.createElement('span');
				let presetItemTitleWrapper = document.createElement('div');
				let presetItemPreviewContainer = document.createElement('div');
				let presetItemPreviewImg = document.createElement('div');
				let presetItemProgressBar = document.createElement('div');

				let animDuration = '1s';

				if('duration' in collection[i].presets[j]){
					animDuration = collection[i].presets[j].duration;
				}

				presetItemTitle.innerHTML = collection[i].presets[j].title;

				presetItemPreviewImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
				<path d="M30.2031 2.89745C26.474 -0.965815 20.4278 -0.965815 16.6986 2.89745L16.5 3.10319L16.3014 2.89745C12.5722 -0.965816 6.52605 -0.965815 2.79688 2.89745C-0.932292 6.76071 -0.932293 13.0243 2.79688 16.8876L16.5565 31L30.2031 16.8876C33.9323 13.0243 33.9323 6.76071 30.2031 2.89745Z" fill="${collection[i].color}"/>
				</svg>`;

				presetItem.classList.add('anim-presets-picker-item');
				presetItemProgressBar.classList.add('anim-preview-progress-bar');

				presetItemProgressBar.style.backgroundColor = collection[i].color;

				//presetItemTitle.style.color = collection[i].color;
				presetItemTitle.classList.add('anim-preset-picker-item-title');
				presetItemTitleWrapper.classList.add('anim-preset-picker-item-title-wrapper');
				presetItemPreviewImg.classList.add('anim-presets-picker-item-preview-image');
				presetItemPreviewContainer.classList.add('anim-preset-picker-item-preview-wrapper');

				if( indexCount == animCfg[animPhase].pickerIndex ){
							presetItemPreviewContainer.style.backgroundColor = collection[i].color;
							presetItemTitleWrapper.style.backgroundColor = collection[i].color;
							presetItemTitle.style.color = '#131b20';
							presetItemProgressBar.style.backgroundColor = '#131b20';
							presetItemPreviewImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
				<path d="M30.2031 2.89745C26.474 -0.965815 20.4278 -0.965815 16.6986 2.89745L16.5 3.10319L16.3014 2.89745C12.5722 -0.965816 6.52605 -0.965815 2.79688 2.89745C-0.932292 6.76071 -0.932293 13.0243 2.79688 16.8876L16.5565 31L30.2031 16.8876C33.9323 13.0243 33.9323 6.76071 30.2031 2.89745Z" fill="#131b20"/>
				</svg>`;

						}

				switch (animPhase) {
					case 'appearance':

						presetItem.onmouseenter = function(){ 

							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';

							if('duration' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationDuration = collection[i].presets[j].duration;
								console.log('CUSTOM PREVIEW DURATION');
							}
							else{
								console.log('DEFAULT PREVIEW DURATION');
								presetItemPreviewImg.style.animationDuration = '1s';
							}

							if('timingFunction' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationTimingFunction = collection[i].presets[j].timingFunction;
							}
							
							console.log( collection[i].presets[j].anim );
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = '';
								previewImgTimeout = setTimeout(() => {
									presetItemPreviewImg.style.animationName = collection[i].presets[j].anim;
									previewImgTimeout = setTimeout(previewAnimDelay, 1000);
								}, 400); 
							}, 1000);
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
							presetItemPreviewImg.style.animationDuration = '';
							clearTimeout(previewImgTimeout);
						}

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'appearance', control, animDuration, indexCount ));


						break;

					case 'move':

						presetItemProgressBar.style.animationDuration = '1s';

						presetItem.onmouseenter =  function(){ 
							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';
						}

						presetItem.onmouseleave =  function(){ 
							presetItemPreviewImg.style.animationName = '';
						}

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'move', control, animDuration, indexCount ));

						break;

					case 'fade':

						presetItem.onmouseenter =  function(){

							presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';

							if('duration' in collection[i].presets[j]){
								presetItemPreviewImg.style.animationDuration = collection[i].presets[j].duration;
							}
							else{
								presetItemPreviewImg.style.animationDuration = '1s';
							}
							
							previewImgTimeout = setTimeout( function previewAnimDelay(){ 
								presetItemPreviewImg.style.animationName = collection[i].presets[j].anim + '-preview';
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

						console.log(indexCount);

						presetItem.addEventListener('click', animSetPreset( collection[i].presets[j], 'fade', control, animDuration, indexCount ));

						break;


					default:

						break;
				}

				// presetItem.style.opacity = '0';
				// presetItem.style.animationFillMode = 'forwards';
				// presetItem.style.animationName = 'pickerAppearance';
				// presetItem.style.animationDuration = '.2s';
				// presetItem.style.animationDelay = i + '.' + j + 's';
				
				presetItemTitleWrapper.appendChild(presetItemTitle);
				presetItemPreviewContainer.appendChild(presetItemPreviewImg);
				presetItemPreviewContainer.appendChild(presetItemProgressBar);
				presetItem.appendChild(presetItemPreviewContainer);
				presetItem.appendChild(presetItemTitleWrapper);

				gridContainer.appendChild(presetItem);



				
			}


			presetsGroupWrapper.appendChild(presetsGroupTitle);
			presetsGroupWrapper.appendChild(gridContainer);
			// presetsGroupWrapper.style.animationName = 'pickerGroupAppearance';
			scrollContainer.appendChild(presetsGroupWrapper);
			

		}

		activeModal = pickerModal;
		pickerModal.appendChild(scrollContainer);
		pickerModal.prepend(pickerModalTitleWrapper);
		pickerModal.style.animationDuration = '.2s';
		pickerModal.style.animationName = 'pickerAppearance';
		parentElem.prepend(pickerModal);
		//document.body.prepend(pickerModal);

		scrollContainer.scrollTop = pickerModalScrollOffset[animPhase];
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
			previewImage.style.animationName = animCurrent[animPhase].preset + '-preview';
		}

		previewWrapper.onmouseleave = function() {
			previewImage.style.animationName = '';
		}

		// checkboxInput.onchange = function() {
		// 	console.log('checkbox change');
		// 	if(!this.checked){
		// 		clearTimeout(animRemoveTimeout);
		// 		clearTimeout(animCycleTimeout);
		// 		animDisabledStorage[animPhase] = animCurrent[animPhase].preset;
		// 		animCurrent[animPhase].preset = '';
		// 		previewImageRandom.style.display = 'none';
		// 		previewImage.style.display = 'none';
		// 		title.innerHTML = 'Disabled';
		// 		title.style.opacity = '.54';
		// 		preview.style.opacity = '.34';
		// 		previewProgressBar.style.display = 'none';
		// 		previewPlaceholder.style.display = 'block';
		// 		removeAlerts();
		// 		animCycle();
		// 	}
		// 	else{
		// 		clearTimeout(animRemoveTimeout);
		// 		clearTimeout(animCycleTimeout);
		// 		animCurrent[animPhase].preset = animDisabledStorage[animPhase];
		// 		title.innerHTML = animCurrent[animPhase].preset;
		// 		title.style.opacity = '1';
		// 		preview.style.opacity = '1';
		// 		previewPlaceholder.style.display = 'none';
				
		// 		if(animCurrent[animPhase].preset != 'Random'){

		// 			previewImage.style.display = 'block';
		// 			previewProgressBar.style.display = 'block';
					
		// 		}
		// 		else{
		// 			previewImageRandom.style.display = 'block';
		// 		}

		// 		removeAlerts();
		// 		animCycle();
		// 	}
		// }; 

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

		checkboxInput.addEventListener('change', () => {return switchAnimState(control, animConfig, animPhase, checkboxInput)});
		previewWrapper.addEventListener( 'click', renderPresetsPicker( document.body, presets, animPhase, control, animConfig ) );


		return control;
}

let appearanceAnimControl = createAnimControl( animPickersWrapper, 'appearance', 'Appearance', appearancePresets, animAppearanceDefault );
let moveAnimControl = createAnimControl( animPickersWrapper, 'move', 'Move', movePresets, animMoveDefault );
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

function switchAnimState(control, animCfg, animPhase, checkbox){
				
				if(checkbox.checked){

						animCfg[animPhase].enabled = true;
						control.title.innerHTML = animCfg[animPhase].preset.title;
						control.title.style.opacity = '1';
						control.preview.style.opacity = '1';
						control.placeholder.style.display = 'none';

						if(animCfg[animPhase].preset.anim != 'random'){

							
							
							
							
							control.image.style.display = 'block';

						}

						else{
							control.imageRandom.style.display = 'block';
						}

						resetAnim();

				}

				else{		
							console.log( animCfg[animPhase] );
							animCfg[animPhase].enabled = false;
							resetAnim();

							control.imageRandom.style.display = 'none';
							control.image.style.display = 'none';
							control.title.innerHTML = 'Disabled';
							control.title.style.opacity = '.54';
							control.preview.style.opacity = '.34';
							control.progressBar.style.display = 'none';
							control.placeholder.style.display = 'block';

						}
						

}

// animAppearancePicker.addEventListener('click', createPresetsPicker( appearancePresets, 'appearance' ) );
// animMovePicker.addEventListener('click', createPresetsPicker( movementPresets, 'move' ) );
// animFadePicker.addEventListener('click', createPresetsPicker( fadePresets, 'fade' ) );

// window.addEventListener('load', () => { return createAnimPickers( animPickers ) });