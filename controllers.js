'use strict';
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/quickstart', {});
};

module.exports = Controllers;
