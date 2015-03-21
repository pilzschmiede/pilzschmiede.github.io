var settings = {

	// Images
		images: {
			
			/*
				Your slides, in this format:

				'path/to/image.jpg': 'position',

				where 'position' is the vertical/horizontal position (eg. 'center center', 'top left').
				Use wide/short images for best results.
			*/
			
			'images/slide01.jpg': 'bottom center',
			'images/slide02.jpg': 'top center',
			'images/slide03.jpg': 'bottom center',
			'images/slide04.jpg': 'center center'

		},

	// Transition speed (in ms)
		speed: 3000,

	// Transition delay (in ms)
		delay: 4500

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

skel.init(
	{
		preset: 'standard',
		prefix: 'css/style',
		resetCSS: true,
		boxModel: 'border',
		breakpoints: {
			'desktop': {
				grid: {
					gutters: 50
				}
			}
		}
	}, 
	{
		panels: {
			preset: 'standard'
		}
	}
);

$(function() {

	var slider;

	// Dropdowns
		$('#nav > ul').dropotron({ 
			offsetY: -50,
			mode: 'fade',
			noOpenerFade: true,
			detach: false,
			alignment: 'center'
		});

	// Slider
		if ((slider = $('#slider')).length > 0)
		{
			var src = settings.images,
				speed = settings.speed,
				delay = settings.delay,
				zIndex = 2, a = [], i, n, x;
			
			// Configure target
				slider.css('position', 'relative');
				
			// Build slides and add them to target
				for (i in src)
				{
					if (!src.hasOwnProperty(i))
						continue;
				
					x = $('<div></div>');
					
					x
						.css('position', 'absolute')
						.css('z-index', zIndex - 1)
						.css('left', 0)
						.css('top', 0)
						.css('width', '100%')
						.css('height', '100%')
						.css('background-position', src[i])
						.css('background-image', 'url("' + i + '")')
						.css('background-size', 'cover')
						.hide();
						
					x.appendTo(slider);
					
					a.push(x);
				}

			// Loop
				i = 0;

				a[i].fadeIn(speed, function() {
					window.setInterval(function() {
						
						n = i + 1;
						if (n >= a.length)
							n = 0;
						
						a[n]
							.css('z-index', zIndex)
							.fadeIn(speed, function() {
								a[i].hide();
								a[n].css('z-index', zIndex - 1);
								i = n;
							});

					}, delay);
				});
		}

					$('#famax').famax({
						//MANDATORY
						appId:'852602131447787',
						accessToken:'CAAJTO0BbbJUBAE3jj7KpVcLZAZBsaTIUvVH1lv5p7Yc4WmxMdsRddXYrNolfzC3QVLHjyLjsKEskfuEmwtHqJSTYEyPY9cZAhAif3DIQjjSIVTZB5uojFPyjtpeCkV0ykIrY4mlmAEFLdnx2TIFLgbPrFY9amb54nUIEGREAZC885mQuTeUaslOWfQRm187zdYUOD6NFsIHVqXRFpJkVi',

						fanPage:'https://www.facebook.com/bonobos',
						
						album : [
							"https://www.facebook.com/media/set/?set=a.10151895992416815.1073741832.8417606814&type=3",
							"https://www.facebook.com/media/set/?set=a.10151315494916815.522233.8417606814&type=3"
						],

						//NON MANDATORY
						maxResults:6, //Maximum videos to display in one load
						innerOffset: 40, //Distance between video thumbnails
						minItemWidth: 300, //Minumum width of a video thumbnails
						maxItemWidth : 450, //Maximum width of a video thumbnails
						outerOffset: 40, //Distance between video thumbnails and plugin conatiner
						maxContainerWidth: 1000, //Maximum width of plugin container
						alwaysUseDropdown: false,
						imagesFolderPath: './images',
						maxAttachments: 3,
						selectedTab: 'p',
						skin:'grey',
						displayMetricsForTags:false,
						displayMetricsForPosts:true,
						maxComments:14, 
						onClickAction:'popup',
						refreshTimeout:1000

					});

});
