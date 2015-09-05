(function($) {

	var icon = $('.item-wrap svg');

	$('#icon_color').ColorPicker({
		color: '#6d6be0',
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).ColorPickerHide();
			$(el).val('#' + hex);
		},
		onBeforeShow: function() {
			$(this).ColorPickerSetColor(this.value);
		},
		onChange: function(hsb, hex, rgb, el) {
			$('body').removeClass('static-fill');
			icon.attr('fill', '#' + hex);
			$('.color-view').css('background-color', '#' + hex);
			$('#icon_color').val('#' + hex);
		}
	})

	$('#icon_color').bind('click focus', function() {
		$('.colorpicker').css('display', 'block');
	})

	// open the color picker when the color preview is clicked
	$('.color-view').bind('click focus', function() {
		$('#icon_color').trigger('click');
	})

	// prepare svg for rasterization
	$(document).ready(function() {
		icon.removeAttr('xmlns');
		icon.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');

	})

	// when icon size is changed
	$("#icon_size").bind('keyup mouseup focus', function() {
		icon.css('width', $(this).val() + 'px');
		$('.colorpicker').css('display', 'none');
	})


})(jQuery);