(function($) {

	var icon = $('.item-wrap svg');
	var initial_color = '#6d6be0';
	var canvas = $('#canvas');
	var preview = $('#preview select');
	var notification = $('#notification');
	var img64 = '';
	var code = '';

	$('#icon_color').ColorPicker({
		color: initial_color,
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


	// clean svg and prepare for rasterization
	$(document).ready(function() {
		icon.removeAttr('xmlns');
		icon.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink');

		// set initial fill
		icon.attr('fill', initial_color);

		// set inital svg size
		icon.attr({
			width: '24px',
			height: '24px'
		});
	})

	// when icon size is changed
	$("#icon_size").bind('keyup mouseup focus', function() {
		icon.attr({
			width: $(this).val() + 'px',
			height: $(this).val() + 'px'
		});
		$('.colorpicker').css('display', 'none');
	})

	// when icon card is clicked
	$('.item-wrap').on('click', function() {
		$('.item-wrap').removeClass('active');
		$(this).addClass('active');

		// convert svg to string for canvg
		var svg = $(this).find('svg').prop('outerHTML');

		// output icon to canvas
		canvg('canvas', svg)

		// output a png
		var canvas = document.getElementById("canvas");
		img64 = canvas.toDataURL("image/png");

		preview.css('background-image', 'url(' + img64 + ')');

		code = "background-image: url(" + img64 + ");\n";
		code += "background-repeat: no-repeat;\n";
	    code += "background-position: center right 10px;\n";
	    code += "-webkit-appearance: none;\n";
	    code += "-moz-appearance: none;\n";
	    code += "appearance: none;\n";
	    code += "border: none;\n";
	    code += "height: 40px;\n";

		$('#output').val(code);

		$('#sidebar').prepend('<div id="notification" class="active">Code Generated!</div>');
		setTimeout(function() {
			$('#notification').remove();
		}, 1100);

		return false;
	})

})(jQuery);