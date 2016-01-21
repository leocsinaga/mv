$(function() {
		$('#header_template').load('header.html',function() {
			$.get('right-side-bar.html', function(data) {
				$(data).insertAfter('#header');
				$('#btn-right').click(function() {
					$('.right-sidebar').toggleClass("open-right-bar");
					$('#header').toggleClass("merge-header");
					$('#container').toggleClass("open-right-panel");
				});
			});
		});
		$('.widget').hover(function() {
			$(this).find('.front').toggleClass("front-hover");
		});
		$('.owl-carousel').owlCarousel({items: 4, loop: false, 
		//autoplay:true,autoplayTimeout:1000,autoplayHoverPause:true
		});
		/*
		$.fn.dataTable.defaults.responsive = true;
		$('#example')
		.dataTable({
			"responsive": true
		});*/
});
