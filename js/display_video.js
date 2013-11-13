	Shadowbox.init({
    // let's skip the automatic setup because we don't have any
    // properly configured link elements on the page
    //skipSetup: true
});



$("#presentationResouse a").click(function(event) {
   var htmlTemplate = '';
   var domain = $(location).attr('href');

    heading = $(this).data("heading");
    discription =  $(this).data("discription");
    displayImg= $(this).data("image");
    diplaylink=$(this).data("link");

     Shadowbox.open({
        content:    '<div class="easyhtml5video" style="position:relative;max-width:442px;"><video controls="controls" autoplay="autoplay" poster="index.files/html5video/bbsin9-20131113.jpg" style="width:100%" title="442"><source src="index.files/html5video/bbsin9-20131113.m4v" type="video/mp4" /><source src="index.files/html5video/bbsin9-20131113.webm" type="video/webm" /><source src="index.files/html5video/bbsin9-20131113.ogv" type="video/ogg" /><source src="index.files/html5video/bbsin9-20131113.mp4" /><object type="application/x-shockwave-flash" data="index.files/html5video/flashfox.swf" width="442" height="276" style="position:relative;"><param name="movie" value="index.files/html5video/flashfox.swf" /><param name="allowFullScreen" value="true" /><param name="flashVars" value="autoplay=true&amp;controls=true&amp;fullScreenEnabled=true&amp;posterOnEnd=true&amp;loop=false&amp;poster=index.files/html5video/bbsin9-20131113.jpg&amp;src=bbsin9-20131113.m4v" /> <embed src="index.files/html5video/flashfox.swf" width="442" height="276" style="position:relative;" flashVars="autoplay=true&amp;controls=true&amp;fullScreenEnabled=true&amp;posterOnEnd=true&amp;loop=false&amp;poster=index.files/html5video/bbsin9-20131113.jpg&amp;src=bbsin9-20131113.m4v"allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer_en" /><img alt="bbsin9-20131113" src="index.files/html5video/bbsin9-20131113.jpg" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser" /></object></video></div><script src="index.files/html5video/html5ext.js" type="text/javascript"></script><div class="video_discript"><h1>博九介紹影片</h1><h2>类 型 : 影片</h2><h2>長 度 : 57秒</h2></div>',
        player:     "html",
        width:     1000,
        height:    296,
       
        options: {onFinish: function () { 
               $("#sb-player h1").text(heading);
                $("#sb-player p").text(discription);
                $("#sb-player img").attr({
                    src: displayImg
                });
                
                }}
    });
    return false;
});

