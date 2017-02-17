"use strict";

$(document).ready(function() {
	$.get(RELATIVE_PATH+"/api/plugins/google-analytics").done(function(config){

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				const num = Object.keys(config).length -5;
				for(var i =1;i<=num;i++ ){
					//貌似tracker的名字有限制,输入track-id1这种就不行，如果是trackid1这种就可以
						var name = "tracker"+i;
				    ga("create",config["track-id"+i],"auto",name);
						ga(name+".send","pageview");
        }


        $(window).on("action:ajaxify.end",function(ev,data) {
          for(var i =1;i<=num;i++ ){
							var name = "tracker"+i;
              ga(name+".send","pageview",RELATIVE_PATH+"/"+data.url);
          };

        });

    }).fail(function() {
        if (window.console) {
            console.warn("[plugin/google-analytics]Please check your Google Analytics Track ID in the plugin.It might be wrong.");
        };

    });
});
