var domain = $(location).attr('hostname');
if (domain.match("168")) {
//if (true) {
    $("#nowMain").attr("href", "stylesheets/creativeMain.css")
    if($("#nowSubsidiary")){
    	$("#nowSubsidiary").attr("href", "stylesheets/creativeSubsidiary.css")
    }
}


$(window).load(function(){
	var $win = $(window),
		$ad = $('#businessCard').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
		_width = $ad.width(),
		_height = $ad.height(),
		_diffY = 330, _diffX = 0,	
		_moveSpeed = 800;	
 
	
	$ad.css({
		top: $(document).height(),
		left: $win.width() - _width - _diffX,
		opacity: 1
	});
 
	
	$win.bind('scroll resize', function(){
		var $this = $(this);
 
		
		$ad.stop().animate({
			top: $this.scrollTop() + $this.height() - _height - _diffY,
			left: $this.scrollLeft() + $this.width() - _width - _diffX
		}, _moveSpeed);
	}).scroll();
});
