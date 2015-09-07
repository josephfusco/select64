(function($) {

	var icon = $('.item-wrap svg');
	var initial_color = '#6d6be0';
	var canvas = $('#canvas');
	var preview = $('#preview select');
	var notification = $('#notification');
	var img64 = '';
	var code = '';

	var demo_html = '';
	var demo_css = '';
	var demo_js = '';
	var codepen_obj = '';


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

		// change out preview background (everything is already set in stylesheet - will need to by fully dynamic for future options)
		preview.css('background-image', 'url(' + img64 + ')');

		// build output code
		code = "select {\n"
		code += "\tbackground-image: url(" + img64 + ");\n";
		code += "\tbackground-repeat: no-repeat;\n";
		code += "\tbackground-color: #FFFFFF;\n";
	    code += "\tbackground-position: center right 10px;\n";
	    code += "\t-webkit-appearance: none;\n";
	    code += "\t-moz-appearance: none;\n";
	    code += "\tappearance: none;\n";
	   	code += "\tcursor: pointer;\n";
	    code += "\tborder: 0;\n";
	   	code += "\tborder-radius: 0;\n";
	    code += "\theight: 40px;\n";
	    code += "\twidth: 100%;\n";
	    code += "\tpadding: 10px;\n";
	    code += "}\n\n";
	    code += "select::-ms-expand {\n";
	    code += "\tdisplay: none;\n";
	    code += "}\n\n";

		$('#output').val(code);

		$('#sidebar').prepend('<div id="notification" class="active">Code Generated!</div>');
		setTimeout(function() {
			$('#notification').remove();
		}, 1100);

		// prepare generated code to be sent to codepen (put in element)
		// build html
		demo_html = '<div class="container">\n';
		demo_html += '\t<select>\n';
		demo_html += '\t\t<option value="select64-preview-a">select64 preview option A</option>\n';
		demo_html += '\t\t<option value="select64-preview-b">select64 preview option B</option>\n';
		demo_html += '\t\t<option value="select64-preview-c">select64 preview option C</option>\n';
		demo_html += '\t</select>\n';
		demo_html += '</div>\n';

		// build css
		demo_css = code;
		demo_css += "/* demo purposes */\n";
		demo_css += ".container {\n";
		demo_css += "\tmax-width: 300px;\n";
		demo_css += "\tmargin: 0 auto\n";
		demo_css += "}\n\n";
		demo_css += "html {display:table;width:100%;height:100%;}body{background-color:#222;display:table-cell;vertical-align:middle;text-align:center;}";

		// build js
		demo_js = "/*\n*\n* Created with http://select64.josephfus.co/\n*\n*/"

		// Send data to codepen form
		codepen_obj = {
			"title": "test",
			"description": "Created with http://select64.josephfus.co/",
			"html": demo_html,
			"css": demo_css,
			"js": demo_js
		}

		console.log(JSON.stringify(codepen_obj));

		$('#codepen_form_data').val(JSON.stringify(codepen_obj));

		return false;
	})

})(jQuery);