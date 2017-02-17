'use strict';
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/google-analytics', {});
};

Controllers.loadSettings = function (req, res, next){

	var trackSettings = Meta.settings.get("google-analytics",function(err,settings){
          if (!err  && Object.keys(settings).length ) {
              res.render("/api/plugins/google-analytics",settings);
           } else {
               console.log("Your Google Analytics Track ID might be wrong.")
           };

    });
};
module.exports = Controllers;
