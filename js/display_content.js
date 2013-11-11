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
x.setAttribute("class","blackF")
console.log(x.className)

// $("#presentationResouse a").click(function(event) {

//      Shadowbox.open({
//         content:    x.innerHTML,
//         player:     "html",
//         title:      "Welcome",
//         height:     350,
//         width:      350,
//         options: {onFinish: function () { 
//                $("#test h1").text($(this).data("name"));
//                console.log($(this));
//             }}
//     });
    
//     console.log($(this).data("name"));
//     return false;
// });