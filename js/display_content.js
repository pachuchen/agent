	Shadowbox.init({
    // let's skip the automatic setup because we don't have any
    // properly configured link elements on the page
    //skipSetup: true
});




/*
window.onload = function() {
    var x=document.getElementById("test");
    //x.class = "test_css";
     console.log(x.innerHTML);

    // open a welcome message as soon as the window loads
    Shadowbox.open({
        content:    x.innerHTML,
        player:     "html",
        title:      "Welcome",
        height:     350,
        width:      350,
        option: {onFinish: function () { 
                
            }}
    });

};*/
var x=document.getElementById("test");
//console.log(x.className)

//x.onclick=displayContent;

// function displayContent(event){
//      console.log(event.target)
//     Shadowbox.open({
//         content:    event.target.outerHTML,
//         player:     "html",
//          height:     350,
//          width:      350,
//     });
// }

var heading;
var discription;
var displayImg;
 

$("#presentationResouse a").click(function(event) {
   var htmlTemplate = "<figure><img><article><h1></h1><p></p></article></figure>";
    heading = $(this).data("heading");
    discription =  $(this).data("discription")
    displayImg= $(this).data("image")
     Shadowbox.open({
        content:    htmlTemplate,
        player:     "html",
        width:     1000,
        height:    400,
       
        options: {onFinish: function () { 
               $("#sb-player h1").text(heading);
                $("#sb-player p").text(discription);
                $("#sb-player img").attr({
                    src: displayImg
                });
                }}
    });
    
    //console.log(event.target);
    return false;
});