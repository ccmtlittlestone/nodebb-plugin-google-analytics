"use strict";

$(document).ready(function() {
	$.get(RELATIVE_PATH+"/api/plugins/google-analytics").done(function(config){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        $.each(config,function(index,value) {
					//测试
					console.log(config);
            alert(index);
            ga("create",config.index,index);
            ga("send","pageview",index);
        });

        $(window).on("action:ajaxify.end",function(ev,data) {
          $.each(config,function(index,value) {
              ga("send","pageview",RELATIVE_PATH+"/"+data.url);
          });
        });

    }).fail(function() {
        if (window.console) {
            console.warn("[plugin/google-analytics]Please check your Google Analytics Track ID in the plugin.It might be wrong.");
        };

    });
});
