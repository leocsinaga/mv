$(function() {
		$('#container').load('header.html',function() {
			$.get('right-side-bar.html', function(data) {
				$(data).insertAfter('#header');
				$('#btn-right').click(function() {
					$('.right-sidebar').toggleClass("open-right-bar");
					$('#header').toggleClass("merge-header");
					$('#container').toggleClass("open-right-panel");
				});
			});
		});
});