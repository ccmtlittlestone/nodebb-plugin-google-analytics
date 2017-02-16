'use strict';
/* globals $, app, socket */

define('admin/plugins/google-analytics', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('google-analytics', $('.ga-settings'));

		$('#save').on('click', function() {
			Settings.save('google-analytics', $('.ga-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'trackid-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});
