var open = $('.open'),
    a = $('tile').find('a');

var pageid = $("tile a[data-page]");

console.log(pageid);

var close = $('#close');

var direction = "up";
var speed = 800;
var easing = "easeOutQuart";

console.log(a.hasClass('active'));

open.click(function(e){
    e.preventDefault();
    var $this = $(this);
    if($this.hasClass('active') === true) {
        $this.removeClass('active').next('.box').toggle("slide", { direction: direction, easing: easing }, speed);
    } else if(a.hasClass('active') === false) {
        $this.addClass('active').next('.box').toggle("slide", { direction: direction, easing: easing }, speed);
    } else {
        a.removeClass('active').next('.box').hide();
        $this.addClass('active').next('.box').toggle("slide", { direction: direction, easing: easing }, speed);
    }
});