		$('#owl-slider').owlCarousel({
			loop:false,
			margin:10,
			autoplay:false,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:2,
					nav:false
				},
				1000:{
					items:3,
					nav:true,
				}
			}
		})	
		$('#owl-slider-2').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:true,
					loop:true
				}
			}
		})	