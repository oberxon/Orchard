/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/* http://keith-wood.name/calendars.html
   Estonian localisation for Gregorian/Julian calendars for jQuery.
   Written by Mart Sõmermaa (mrts.pydev at gmail com). */
(function($) {
	$.calendars.calendars.gregorian.prototype.regionalOptions['et'] = {
		name: 'Gregorian',
		epochs: ['BCE', 'CE'],
		monthNames: ['Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni', 
			'Juuli','August','September','Oktoober','November','Detsember'],
		monthNamesShort: ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni',
			'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
		dayNames: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
		dayNamesShort: ['Pühap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
		dayNamesMin: ['P','E','T','K','N','R','L'],
		dateFormat: 'dd.mm.yyyy',
		firstDay: 1,
		isRTL: false
	};
	if ($.calendars.calendars.julian) {
		$.calendars.calendars.julian.prototype.regionalOptions['et'] =
			$.calendars.calendars.gregorian.prototype.regionalOptions['et'];
	}
})(jQuery);
