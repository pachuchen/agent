var domain = $(location).attr('hostname');
if (domain.match("168")) {
//if (true) {
    $("#nowMain").attr("href", "stylesheets/creativeMain.css")
    if($("#nowSubsidiary")){
    	$("#nowSubsidiary").attr("href", "stylesheets/creativeSubsidiary.css")
    }
}