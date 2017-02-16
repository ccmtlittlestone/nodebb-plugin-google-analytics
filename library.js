"use strict";
var controllers = require('./lib/controllers'),

	plugin = {};

plugin.init = function(params, callback) {
	var router = params.router,
		hostMiddleware = params.middleware,
		hostControllers = params.controllers;

	router.get('/admin/plugins/google-analytics', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/google-analytics', controllers.renderAdminPage);
	router.get("/api/plugins/google-analytics",function(req,res){
			if (controllers.settings) {
					//controllers.settings is empty
					res.status(200).json(controllers.settings);
			} else {
					res.send(501);
			}
	});

	controllers.loadSettings();

	callback();
};

plugin.addAdminNavigation = function(header, callback) {
	header.plugins.push({
		route: '/plugins/google-analytics',
		icon: 'fa-bar-chart-o',
		name: 'Google Analytics'
	});

	callback(null, header);
};

module.exports = plugin;
