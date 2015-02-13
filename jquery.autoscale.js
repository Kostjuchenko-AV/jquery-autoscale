/**
 * jQuery Autoscale plugin
 * Adjust the size of an element based on the length of its contents.
 * 
 * @author John J. Camilleri
 * @version 1.0
 */
(function($){

	$.fn.autoscale = function(opts) {
	
		// Default values
		var defaults = {
			target: null,
			scalemap: [	[6, 80], [8, 60] ],
			event: 'keyup'
		};
		var options = $.extend(defaults, opts);
		
		// Apply to each matching item
		return this.each(function() {
		
			// Get handle on objects
			var scaleTarget = $(this);
			var eventTarget = (options.target) ? $(options.target) : $(this);
			
			// Attach event handler
			eventTarget.bind(options.event, function() {
				var length = eventTarget.val().length;
				var changed = false;
				for (var i = 0; i < options.scalemap.length; i++) {
					if (length > options.scalemap[i][0]) {
						scaleTarget.css('font-size', options.scalemap[i][1]+'%');
						changed = true;
					}
				}
				if (!changed) {
					scaleTarget.css('font-size', '');
				}
			});

		});

	};
})(jQuery);
