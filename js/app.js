(function($) {

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
			$('.item-wrap svg').attr('fill', '#' + hex);
			$('.color-view').css('background-color', '#' + hex);
			$('#icon_color').val('#' + hex);
		}
	});

	// open the color picker when the color preview is clicked
	$('.color-view').click(function() {
		$('#icon_color').trigger('click');
	});

})(jQuery);