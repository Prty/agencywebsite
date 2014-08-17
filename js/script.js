(function() {



			$('.wrapper').fadeIn(1500);


			function preload(arrayOfImages) {
		    $(arrayOfImages).each(function(){
			        $('<img/>')[0].src = this;
			        // Alternatively you could use:
			        // (new Image()).src = this;
			    });
			}

			preload([
			    'img/andropshout2.png',
			    'img/cutcopy_gif.gif',
			    'img/sourlifeismusic2.png',
			    'img/gagadoll.png',
			    'img/drakeweather2.png',
			    'img/focusgear.png',
			    'img/chromemaze.png'
			]);






			$('.sourlifeismusic a').hover( function(){
				$('.mask_party').attr({src:"img/sourlifeismusic2.png" });
				$('body').css({'backgroundColor':'#fcf4f1'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 




			$('.andropshout a').hover( function(){
				$('.mask_party').attr({src:"img/andropshout2.png" });
				$('body').css({'backgroundColor':'#010101'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 




			$('.cutcopyexplorers a').hover( function(){
				$('.mask_party').attr({src:"img/cutcopy_gif.gif" });
				$('body').css({'backgroundColor':'#2c2c2c'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 





			$('.gagadoll a').hover( function(){
				$('.mask_party').attr({src:"img/gagadoll.png" });
				$('body').css({'backgroundColor':'#fbefe6'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 




			$('.chromemaze a').hover( function(){
				$('.mask_party').attr({src:"img/chromemaze.png" });
				$('body').css({'backgroundColor':'#ececec'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 





			$('.focusgear a').hover( function(){
				$('.mask_party').attr({src:"img/focusgear.png" });
				$('body').css({'backgroundColor':'white'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 




			$('.drakeweather a').hover( function(){
				$('.mask_party').attr({src:"img/drakeweather2.png" });
				$('body').css({'backgroundColor':'#ceecfe'}); 
			
			},
			function(){
				$('.mask_party').attr({src:"img/black.png" });
				$('body').css({'backgroundColor':'white'});  
			}); 







})();










			// var _stat = 0;

			// function toggleState( selector, classToToggle ) {
			// $( selector ).hover(
			// 	hoverOn
			// 	, hoverOff
			// );

			// function hoverOn() {
			// 	if(_stat == 0){
			// 		$( 'body' ).addClass( classToToggle );
			// 	}
			// }

			// function hoverOff() {
			// 		$( 'body' ).removeClass( classToToggle );	
			// 	}
			// }

			// var selectorsAndClasses = [
			// 	{
			// 		selector: '.andropshout a'
			// 		, classToToggle: 'andropshout_background'
			// 	}
			// 	, {
			// 		selector: '.fingerbootcamp a'
			// 		, classToToggle: 'fingerbootcamp_background'
			// 	}

			// 	, {
			// 		selector: '.sourlifeismusic a'
			// 		, classToToggle: 'sourlifeismusic_background'
			// 	}

			// ];

			// for ( var i = 0; i < selectorsAndClasses.length; i++ ) {
			// 	var curr = selectorsAndClasses[ i ];

			// 	toggleState( curr.selector, curr.classToToggle );
			// }

