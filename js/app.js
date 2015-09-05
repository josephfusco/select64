(function($) {

	  $('#color').ColorPicker({
	    onSubmit: function(hsb, hex, rgb, el){
	      $(el).ColorPickerHide();
	      $(el).val('#'+hex);
	    },
	    onBeforeShow: function (){
	      $(this).ColorPickerSetColor(this.value);
	    },
	    onChange: function(hsb, hex, rgb, el){
	      $('.item-wrap').css('fill', '#'+hex);
	    }
	  });

})(jQuery);