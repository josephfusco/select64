(function($) {

	$("#color").spectrum({
	    preferredFormat: "hex",
	    showInput: true
	});
	function updateFill(element, fill) {
	    var hexColor = "transparent";
	    if (fill) hexColor = fill.toHexString();
	    $(element).css("fill", hexColor);
	}

	$("#color").spectrum({
	    fill: "#333",
	    preferredFormat: "hex",
	    showInput: true,
	    hide: function (fill) {
	        updateFill(".item-wrap svg", fill);
	    }
	});

})(jQuery);