'use strict';
var Settings = module.parent.parent.require('./settings');
var Meta = module.parent.parent.require('./meta');
var Controllers = {
	settings:{}
};

Controllers.renderAdminPage = function (req, res, next) {
	res.render('admin/plugins/google-analytics', {});
};

Controllers.loadSettings = function (){
	Meta.settings.get("google-analytics",function(err,settings){
        for(let i in settings){
          if (!err && i && settings.length) {
              Controllers.settings = settings;
          } else {
              console.log("Your Google Analytics Track ID"+i+" was not correct.")
          };

      };

    });
};
module.exports = Controllers;
