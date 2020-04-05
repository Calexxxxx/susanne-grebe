const button = document.getElementById('toggler'),
	togglerTop = document.getElementById('toggler-top'),
	togglerBottom = document.getElementById('toggler-bottom');

button.addEventListener('click', () => {
	togglerTop.classList.toggle('rotate-top');
	togglerBottom.classList.toggle('rotate-bottom');
});

const logoLage = document.getElementById('logo-large'),
	logoSmall = document.getElementById('logo-small'),
	navbarDesktop = document.getElementById('navbar-desktop');

const heightLogoLarge = '114px';
const heightLogoSmall = '70px';

const scrollToTop = document.getElementById('scroll-to-top');

scrollToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 100,
		left: 100,
		behavior: 'smooth'
	});
});

window.addEventListener('scroll', evt => {
	if (window.scrollY > 200) {
		logoLage.classList.add('fade-down');
		logoLage.classList.remove('fade-up');
		scrollToTop.classList.add('scroll-to-top-show');

		setTimeout(() => {
			logoLage.classList.add('logo-hidden');
			logoSmall.classList.remove('logo-hidden');
		}, 300);

		logoSmall.classList.add('fade-up');
	} else {
		logoSmall.classList.remove('fade-up');
		logoSmall.classList.add('fade-down');
		scrollToTop.classList.remove('scroll-to-top-show');

		setTimeout(() => {
			logoSmall.classList.add('logo-hidden');
			logoLage.classList.remove('logo-hidden');
		}, 300);

		logoLage.classList.add('fade-up');
	}
});

var owl = $('.owl-carousel');
owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 10000,
	autoplayHoverPause: true,
	nav: false,
	dots: false
});
$('.play').on('click', function() {
	owl.trigger('play.owl.autoplay', [10000]);
});
$('.stop').on('click', function() {
	owl.trigger('stop.owl.autoplay');
});

function initMap() {
	var aachen = { lat: 50.7753, lng: 6.0839 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: aachen,
		styles: [
			{
				featureType: 'administrative.locality',
				elementType: 'all',
				stylers: [
					{
						hue: '#2c2e33'
					},
					{
						saturation: 7
					},
					{
						lightness: 19
					},
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text',
				stylers: [
					{
						visibility: 'on'
					},
					{
						saturation: '-3'
					}
				]
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [
					{
						color: '#f39247'
					}
				]
			},
			{
				featureType: 'landscape',
				elementType: 'all',
				stylers: [
					{
						hue: '#ff0000'
					},
					{
						saturation: '-80'
					},
					{
						lightness: '-1'
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'poi',
				elementType: 'all',
				stylers: [
					{
						hue: '#ff0000'
					},
					{
						saturation: -100
					},
					{
						lightness: 100
					},
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [
					{
						lightness: '-53'
					}
				]
			},
			{
				featureType: 'poi.school',
				elementType: 'geometry.fill',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#ff8157'
					},
					{
						lightness: '40'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
					{
						hue: '#ff6f00'
					},
					{
						saturation: '100'
					},
					{
						lightness: 31
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [
					{
						color: '#f39247'
					},
					{
						saturation: '0'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'labels',
				stylers: [
					{
						saturation: -93
					},
					{
						lightness: 31
					},
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'labels.text',
				stylers: [
					{
						weight: '4.00'
					},
					{
						saturation: '-91'
					}
				]
			},
			{
				featureType: 'road',
				elementType: 'labels.icon',
				stylers: [
					{
						saturation: '1'
					},
					{
						lightness: '1'
					},
					{
						gamma: '1.00'
					},
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [
					{
						saturation: '100'
					},
					{
						lightness: '10'
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.stroke',
				stylers: [
					{
						lightness: '1'
					}
				]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.icon',
				stylers: [
					{
						weight: '10.00'
					},
					{
						visibility: 'on'
					},
					{
						lightness: '-2'
					}
				]
			},
			{
				featureType: 'road.highway.controlled_access',
				elementType: 'all',
				stylers: [
					{
						saturation: '0'
					},
					{
						lightness: '10'
					}
				]
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry.stroke',
				stylers: [
					{
						visibility: 'on'
					},
					{
						color: '#f3dbc8'
					},
					{
						saturation: '0'
					}
				]
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels',
				stylers: [
					{
						hue: '#bbc0c4'
					},
					{
						saturation: -93
					},
					{
						lightness: -2
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels.text',
				stylers: [
					{
						visibility: 'off'
					}
				]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry',
				stylers: [
					{
						hue: '#007fff'
					},
					{
						saturation: '-100'
					},
					{
						lightness: '14'
					},
					{
						visibility: 'simplified'
					}
				]
			},
			{
				featureType: 'transit',
				elementType: 'all',
				stylers: [
					{
						hue: '#e9ebed'
					},
					{
						saturation: 10
					},
					{
						lightness: 69
					},
					{
						visibility: 'on'
					}
				]
			},
			{
				featureType: 'water',
				elementType: 'all',
				stylers: [
					{
						hue: '#007fff'
					},
					{
						saturation: '-100'
					},
					{
						lightness: '100'
					},
					{
						visibility: 'simplified'
					}
				]
			}
		]
	});
	var marker = new google.maps.Marker({ position: aachen, map: map });
}
